import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LimitZeroOverZero from "@/components/docs/Limit-Zero-Over-Zero";

export const curriculum = {
  "grade-12": {
    math: {
      limits: {
        title: "Limits",
        topics: {
          "zero-over-zero": {
            title: "Indeterminate Form 0/0",
            component: () => import("@/components/Header"),
          },
          "infinity-over-infinity": {
            title: "Indeterminate Form ∞/∞",
            component: () => import("@/components/Header"),
          },
        },
      },
      derivatives: {
        title: "Derivatives",
        topics: {
          "first-principle": {
            title: "First Principle of Derivatives",
            component: () => import("@/components/Header"),
          },
        },
      },
    },
    physics: {
      motion: {
        title: "Motion",
        topics: {
          "uniform-motion": {
            title: "Uniform Motion",
            component: () => import("@/components/Header"),
          },
        },
      },
    },
  },
};

export const curriculum2 = [
  {
    grade: "grade-12",
    content: [
      {
        subject: "math",
        lessons: [
          {
            lesson: "limits",
            topics: [
              {
                title: "zero-over-zero",
                component: LimitZeroOverZero,
              },
              {
                title: "infinity-over-infinity",
                component: LimitZeroOverZero,
              },
            ],
          },
        ],
      },
      {
        subject: "physics",
        lessons: [
          {
            lesson: "motion",
            topics: [
              {
                title: "uniform-motion",
                component: LimitZeroOverZero,
              },
              {
                title: "non-uniform-motion",
                component: LimitZeroOverZero,
              },
            ],
          },
        ],
      },
    ],
  },
];
