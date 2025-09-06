import api from "@/config/axios";
import {
  ExerciseDashboard,
  ExerciseHistory,
  ExerciseWithAttempts,
  ExerciseReport,
} from "@/types/user-content/exercise";
import { Exercise } from "@/types/content/exercises";

// Get exercise dashboard
export const getExerciseDashboard = async (): Promise<ExerciseDashboard> => {
  try {
    const response = await api.get<ExerciseDashboard>(
      `/me/exercises/dashboard`
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
    const response = await api.get<ExerciseHistory[]>(`/me/exercises/history`);
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
      `/me/exercises/?grade=${grade}`
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
    const response = await api.get<ExerciseReport>(`/me/exercises/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching exercise report:", error);
    throw new Error("Failed to fetch exercise report");
  }
};

// Update an exercise
export const updateExercise = async (
  id: string,
  exerciseData: Partial<Exercise>
): Promise<Exercise> => {
  try {
    const response = await api.put(`/me/exercises/${id}`, exerciseData);
    return response.data;
  } catch (error) {
    console.error("Error updating exercise:", error);
    throw new Error("Failed to update exercise");
  }
};

// Delete an exercise
export const deleteExercise = async (id: string): Promise<void> => {
  try {
    await api.delete(`/me/exercises/${id}`);
  } catch (error) {
    console.error("Error deleting exercise:", error);
    throw new Error("Failed to delete exercise");
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
    await api.post(`/me/exercises/${id}/submit`, submissionData);
  } catch (error) {
    console.error("Error submitting exercise:", error);
    throw new Error("Failed to submit exercise");
  }
};

// USER CONTENT EXERCISES

// Create a new exercise
export const createExercise = async (
  exerciseData: Partial<Exercise>
): Promise<Exercise> => {
  try {
    const response = await api.post(`/me/exercises`, exerciseData);
    return response.data;
  } catch (error) {
    console.error("Error creating exercise:", error);
    throw new Error("Failed to create exercise");
  }
};
