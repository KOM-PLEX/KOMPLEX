export interface ExerciseDashboard {
  totalExercisesCompleted: number;
  totalAttempts: number;
  averageScore: number;
}

export interface ExerciseHistory {
  id: number;
  title: string;
  score: number;
  timeTaken: number;
  createdAt: string | null;
}

export interface ExerciseReport {
  // TODO: Add report fields when API is ready
  // This will be populated when the report API is implemented
  placeholder?: string; // Temporary field to avoid empty interface error
}
