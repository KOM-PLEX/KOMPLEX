import api from "@/config/axios";
import { UploadUrlResponse } from "@/types/uploadUrl";
import axios from "axios";

// UPLOAD HELPERS ==============================================================

// Get presigned URL for file upload
export const getUploadUrl = async (
  fileName: string,
  fileType: string
): Promise<UploadUrlResponse> => {
  try {
    const response = await api.post<UploadUrlResponse>(
      `/upload/upload-url`,
      {
        fileName,
        fileType,
      },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting upload URL:", error);
    throw new Error("Failed to get upload URL");
  }
};

// Upload file to R2 using presigned URL
export const uploadFileToR2 = async (
  signedUrl: string,
  file: File
): Promise<void> => {
  try {
    await axios.put(signedUrl, file, {
      headers: {
        "Content-Type": file.type,
      },
    });
  } catch (error) {
    console.error("Error uploading file to R2:", error);
    throw new Error("Failed to upload file");
  }
};

// UPLOAD OPERATIONS ===========================================================

// Complete file upload process (get URL + upload)
export const uploadFile = async (file: File): Promise<string> => {
  try {
    const { signedUrl, key } = await getUploadUrl(file.name, file.type);
    await uploadFileToR2(signedUrl, file);
    return key;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error("Failed to upload file");
  }
};

// Upload multiple files
export const uploadMultipleFiles = async (files: File[]): Promise<string[]> => {
  try {
    const uploadPromises = files.map((file) => uploadFile(file));
    return await Promise.all(uploadPromises);
  } catch (error) {
    console.error("Error uploading multiple files:", error);
    throw new Error("Failed to upload files");
  }
};

// Upload file with progress callback
export const uploadFileWithProgress = async (
  file: File,
  onProgress?: (progress: number) => void
): Promise<string> => {
  try {
    const { signedUrl, key } = await getUploadUrl(file.name, file.type);

    await api.put(signedUrl, file, {
      headers: {
        "Content-Type": file.type,
      },
      onUploadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          onProgress(progress);
        }
      },
    });

    return key;
  } catch (error) {
    console.error("Error uploading file with progress:", error);
    throw new Error("Failed to upload file");
  }
};
