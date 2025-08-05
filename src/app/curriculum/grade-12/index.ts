import { Grade } from "@/types/docs";
import { math } from "./math";
import { chemistry } from "./chemistry";
import { biology } from "./biology";

export const grade12: Grade = {
  grade: "grade-12",
  gradeKhmer: "ថ្នាក់ទី១២",
  content: [math, chemistry, biology],
};
