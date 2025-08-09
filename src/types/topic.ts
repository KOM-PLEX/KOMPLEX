import { ThreeDBoxProps } from "@/components/pages/docs/common/box/3DBox";
// ===== TOPIC CONTENT TYPES =====
// These types define the structure for educational topic content
// Each type corresponds to a specific box component used in topic pages

// Basic content types used across different topic sections
export interface Step {
  title?: string | React.ReactNode;
  content?: string | string[] | React.ReactNode;
}

export interface ExerciseQuestion {
  id: string;
  question: string | React.ReactNode;
  options: string[] | React.ReactNode[];
  correctAnswer: number | React.ReactNode;
}

// ===== BOX COMPONENT PROP INTERFACES =====
// Import prop interfaces from box components to ensure type safety
// Each interface matches exactly what its corresponding component expects

import { DefinitionBoxProps } from "@/components/pages/docs/common/box/DefinitionBox";
import { TipBoxProps } from "@/components/pages/docs/common/box/TipBox";
import { ExampleBoxProps } from "@/components/pages/docs/common/box/ExampleBox";
import { ExerciseBoxProps } from "@/components/pages/docs/common/box/ExerciseBox";
import { HintBoxProps } from "@/components/pages/docs/common/box/HintBox";
import { WarningBoxProps } from "@/components/pages/docs/common/box/WarningBox";
import { CustomBoxProps } from "@/components/pages/docs/common/box/CustomBox";
import { GraphBoxProps } from "@/components/pages/docs/common/box/GraphBox";

// Explanation Box Props
import { ImageBoxProps } from "@/components/pages/docs/common/box/explanation-box/ImageExplanationBox";
import { VideoBoxProps } from "@/components/pages/docs/common/box/explanation-box/VideoExplanationBox";
import { GraphExplanationBoxProps } from "@/components/pages/docs/common/box/explanation-box/GraphExplanationBox";
import { ThreeDExplanationBoxProps } from "@/components/pages/docs/common/box/explanation-box/3DExplanationBox";

// ===== MAIN TOPIC CONTENT INTERFACE =====
// This interface defines the complete structure for a topic's content
// Each field is optional, allowing topics to use only the sections they need
// All fields use the exact prop interfaces from their corresponding box components

export interface TopicContent {
  // Definition section - explains the core concept
  definition?: DefinitionBoxProps;

  // Tip section - provides helpful hints or tips
  tip?: TipBoxProps;

  // Example section - shows worked examples with steps
  example?: ExampleBoxProps;

  // Exercise section - interactive practice questions
  exercise?: ExerciseBoxProps;

  // Hint section - additional guidance or notes
  hint?: HintBoxProps;

  // Warning section - important cautions or common mistakes
  warning?: WarningBoxProps;

  // Custom section - flexible custom content
  custom?: CustomBoxProps;

  // 3D section - 3D model with wrapper
  threeD?: ThreeDBoxProps;

  // Graph section - mathematical graph with wrapper
  graph?: GraphBoxProps;

  // ===== EXPLANATION BOXES =====
  // These boxes have content on the left and explanation on the right
  // They are responsive and follow a specific layout pattern

  // Image explanation section - image with explanation
  imageExplanation?: ImageBoxProps;

  // Video explanation section - video with explanation
  videoExplanation?: VideoBoxProps;

  // Graph explanation section - Desmos graph with explanation
  graphExplanation?: GraphExplanationBoxProps;

  // 3D explanation section - 3D content with explanation
  threeDExplanation?: ThreeDExplanationBoxProps;
}
