import { Grade } from "@/types/curriculum";
import { math } from "./math";
import { chemistry } from "./chemistry";
import { biology } from "./biology";
import { physics } from "./physics";

export const grade12: Grade = {
  grade: "grade-12",
  gradeKhmer: "ថ្នាក់ទី១២",
  content: [math, physics, chemistry, biology],
};
