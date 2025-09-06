import api from "@/config/axios";
import {
  Exercise,
  ExerciseWithQuestions,
  ExerciseData,
} from "@/types/content/exercises";
import {
  ExerciseDashboard,
  ExerciseHistory,
  ExerciseWithAttempts,
  ExerciseReport,
} from "@/types/user-content/exercise";

const API_BASE_URL = "http://localhost:6969";

// Get exercises by grade
export const getExercisesByGrade = async (grade: string): Promise<Exercise> => {
  try {
    const response = await api.get<Exercise>(
      `${API_BASE_URL}/exercises?grade=${grade}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching exercises by grade:", error);
    throw new Error("Failed to fetch exercises");
  }
};

// Get exercise by ID with questions
export const getExerciseById = async (
  id: string
): Promise<ExerciseWithQuestions> => {
  try {
    const response = await api.get<ExerciseWithQuestions>(
      `${API_BASE_URL}/exercises/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching exercise by ID:", error);
    throw new Error("Failed to fetch exercise");
  }
};

// Submit exercise results
export const submitExercise = async (
  id: string,
  submissionData: {
    score: number;
    timeTaken: number;
    answers: { questionId: number; isCorrect: boolean }[];
  }
): Promise<void> => {
  try {
    await api.post(`${API_BASE_URL}/exercises/${id}/submit`, submissionData);
  } catch (error) {
    console.error("Error submitting exercise:", error);
    throw new Error("Failed to submit exercise");
  }
};

// USER CONTENT EXERCISES

// Get exercise dashboard
export const getExerciseDashboard = async (): Promise<ExerciseDashboard> => {
  try {
    const response = await api.get<ExerciseDashboard>(
      `${API_BASE_URL}/user-content/exercises/dashboard`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching exercise dashboard:", error);
    throw new Error("Failed to fetch exercise dashboard");
  }
};

// Get exercise history
export const getExerciseHistory = async (): Promise<ExerciseHistory[]> => {
  try {
    const response = await api.get<ExerciseHistory[]>(
      `${API_BASE_URL}/user-content/exercises/history`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching exercise history:", error);
    throw new Error("Failed to fetch exercise history");
  }
};

// Get exercises with attempts by grade
export const getExercisesWithAttempts = async (
  grade: string
): Promise<ExerciseWithAttempts[]> => {
  try {
    const response = await api.get<ExerciseWithAttempts[]>(
      `${API_BASE_URL}/user-content/exercises/?grade=${grade}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching exercises with attempts:", error);
    throw new Error("Failed to fetch exercises with attempts");
  }
};

// Get exercise report by ID
export const getExerciseReport = async (
  id: string
): Promise<ExerciseReport> => {
  try {
    const response = await api.get<ExerciseReport>(
      `${API_BASE_URL}/user-content/exercises/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching exercise report:", error);
    throw new Error("Failed to fetch exercise report");
  }
};

// Create a new exercise
export const createExercise = async (
  exerciseData: Partial<ExerciseData>
): Promise<ExerciseData> => {
  try {
    const response = await api.post(
      `${API_BASE_URL}/exercises`,
      exerciseData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating exercise:", error);
    throw new Error("Failed to create exercise");
  }
};

// Update an exercise
export const updateExercise = async (
  id: string,
  exerciseData: Partial<ExerciseData>
): Promise<ExerciseData> => {
  try {
    const response = await api.put(
      `${API_BASE_URL}/exercises/${id}`,
      exerciseData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating exercise:", error);
    throw new Error("Failed to update exercise");
  }
};

// Delete an exercise
export const deleteExercise = async (id: string): Promise<void> => {
  try {
    await api.delete(`${API_BASE_URL}/exercises/${id}`);
  } catch (error) {
    console.error("Error deleting exercise:", error);
    throw new Error("Failed to delete exercise");
  }
};
