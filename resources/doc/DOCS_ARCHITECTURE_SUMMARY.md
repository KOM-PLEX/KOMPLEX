# 📚 Docs Architecture Summary

Here's a comprehensive overview of how the docs system works - it's designed to be flexible and maintainable! 🚀

## 🏗️ Curriculum Data Structure

The curriculum follows a hierarchical structure: **Grade → Subject → Lesson → Topic**

```typescript
// The main types in src/types/curriculum.ts
interface Grade {
  grade: string; // "grade-12"
  gradeKhmer: string; // "ថ្នាក់ទី១២"
  content: Content[]; // All subjects in this grade
}

interface Content {
  subject: string; // "math"
  title: string; // "គណិតវិទ្យា"
  englishTitle: string; // "Mathematics"
  icon: React.Component; // Lucide icon component
  lessons: Lesson[]; // All lessons in this subject
}

interface Lesson {
  lesson: string; // "limits"
  title: string; // "លីមីត"
  englishTitle: string; // "Limits"
  icon: React.Component;
  topics: Topic[]; // All topics in this lesson
}

interface Topic {
  title: string; // "លីមីត ០/០"
  englishTitle: string; // "zero-over-zero"
  component: React.Component; // The actual topic component!
  subtopics?: Topic[]; // Optional nested topics
}
```

The data is organized in `src/curriculum/` directory with separate files for each subject, imported into the main `curriculum.ts` file. 📁

## 🧭 Navigation Components

### Sidebar (`src/components/pages/docs/common/Sidebar.tsx`)

- Shows lessons and topics for the current subject 📋
- Expandable/collapsible lessons with active states
- Direct topic navigation links
- Auto-expands current lesson on load
- Responsive design with scrollable content

### DocHeader (`src/components/pages/docs/common/DocHeader.tsx`)

- Subject tabs at the top (desktop) or dropdown (mobile) 🏷️
- Grade selector dropdown with all available grades
- Mobile-friendly navigation with collapsible menus
- Active state highlighting for current subject
- Backdrop blur effects for modern UI

### TopicWrapper (`src/components/pages/docs/common/TopicWrapper.tsx`)

- Wraps the actual topic content 📦
- Displays topic title with appropriate icon
- Previous/Next navigation buttons with proper disabled states
- Consistent styling and spacing for all topic content
- Handles navigation between topics within the same lesson

## 🔄 How It All Works Together

The main logic happens in `src/app/docs/[grade]/[subject]/[lesson]/[topic]/page.tsx`:

```typescript
// 1. Extract URL parameters
const params = useParams(); // { grade: "grade-12", subject: "math", lesson: "limits", topic: "zero-over-zero" }

// 2. Find the topic component from curriculum data
const getTopicComponent = (params: Params) => {
  const grade = curriculum.find((g) => g.grade === params.grade);
  const subject = grade?.content.find((s) => s.subject === params.subject);
  const lesson = subject?.lessons.find((l) => l.lesson === params.lesson);
  const topic = lesson?.topics.find((t) => t.englishTitle === params.topic);

  return { topic, lesson, subject, grade };
};

// 3. Calculate navigation (prev/next topics)
const getNavigationTopics = (params: Params) => {
  const { topic, lesson, subject, grade } = getTopicComponent(params);
  
  if (!topic || !lesson || !subject || !grade) return { prev: null, next: null };
  
  const currentIndex = lesson.topics.findIndex(t => t.englishTitle === params.topic);
  
  const prev = currentIndex > 0 ? {
    title: lesson.topics[currentIndex - 1].title,
    link: `/docs/${params.grade}/${params.subject}/${params.lesson}/${lesson.topics[currentIndex - 1].englishTitle}`
  } : null;
  
  const next = currentIndex < lesson.topics.length - 1 ? {
    title: lesson.topics[currentIndex + 1].title,
    link: `/docs/${params.grade}/${params.subject}/${params.lesson}/${lesson.topics[currentIndex + 1].englishTitle}`
  } : null;
  
  return { prev, next };
};

// 4. Render everything
return (
  <div className="flex bg-gray-50 min-h-screen">
    <Sidebar
      currentGrade={params.grade}
      currentSubject={params.subject}
      currentLesson={params.lesson}
      currentTopic={params.topic}
    />
    <DocHeader
      currentGrade={params.grade}
      currentSubject={params.subject}
      currentLesson={params.lesson}
      currentTopic={params.topic}
    />
    <div className="w-full lg:ml-70 lg:mt-30 mt-40 p-5 lg:p-6">
      <TopicWrapper
        title={topic.title}
        prev={navigation.prev}
        next={navigation.next}
      >
        <Component /> {/* The actual topic component! */}
      </TopicWrapper>
    </div>
  </div>
);
```

## 📦 Box Components

All content boxes are located in `src/components/pages/docs/common/box/` and provide extensive flexibility! 🎨

### Traditional Boxes

#### DefinitionBox

- **Purpose**: Clean definitions and conceptual explanations
- **Props**: `title: string | React.ReactNode`, `content: string | string[] | React.ReactNode`
- **Styling**: Minimal, clean design with consistent typography
- **Features**: Automatic bullet list rendering for arrays

#### ExampleBox

- **Purpose**: Step-by-step worked examples with solutions
- **Props**: `question: string | React.ReactNode`, `steps: Step[]`, `answer?: string | React.ReactNode`
- **Styling**: Amber color scheme with structured step display
- **Features**: Optional answer box with green styling, supports mathematical expressions

#### ExerciseBox

- **Purpose**: Interactive multiple-choice exercises with immediate feedback
- **Props**: `questions: ExerciseQuestion[]`
- **Styling**: White background with indigo accents
- **Features**: Multi-question navigation, Khmer letter options (ក, ខ, គ, ឃ), progress indicators

#### TipBox

- **Purpose**: Helpful tips and best practices
- **Props**: `title?: string | React.ReactNode`, `icon?: React.Component`, `content: string | string[] | React.ReactNode`
- **Styling**: Indigo color scheme with left border accent
- **Features**: Customizable icon, supports bullet lists

#### WarningBox

- **Purpose**: Important warnings and cautions
- **Props**: `icon?: React.Component`, `content: string | string[] | React.ReactNode`
- **Styling**: Red color scheme for warnings
- **Features**: Customizable icon, consistent with other boxes

#### HintBox

- **Purpose**: Provides hints and guidance for problem-solving
- **Props**: `content: string | string[] | React.ReactNode`
- **Styling**: Lightbulb icon with indigo theme
- **Features**: Backdrop blur effect

### Specialized Boxes

#### ImageBox

- **Purpose**: Displays images with explanations
- **Props**: `src?: string | React.ReactNode`, `imageAlt: string`, `explanation: string | string[] | React.ReactNode`
- **Layout**: Responsive grid (side-by-side desktop, stacked mobile)
- **Features**: Supports both image URLs and React components, separate explanation section

#### ThreeDBox

- **Purpose**: Interactive 3D model viewer with camera controls
- **Props**: `modelUrl: string`, `scale?: number`, `position?: [number, number, number]`, `rotation?: [number, number, number]`, `title?: React.ReactNode`, `content?: string | string[] | React.ReactNode`
- **Technology**: Three.js + React Three Fiber
- **Features**: Manual camera orbit controls, customizable model properties, title and content sections
- **Interaction**: Drag to rotate camera around the model, responsive design

#### GraphBox

- **Purpose**: Mathematical graphs using Desmos integration
- **Props**: `expressions: Expression[]`, `options?: Partial<CalculatorOptions>`
- **Technology**: Desmos calculator integration
- **Features**: Multiple expression support, customizable calculator options, responsive design
- **Integration**: Seamless with mathematical content

#### CustomBox

- **Purpose**: Highly customizable box for special use cases
- **Props**: Extensive customization options including colors, styling, effects, and interaction
- **Flexibility**: Complete color customization (background, border, text, icon)
- **Features**: Gradient backgrounds, hover effects, backdrop blur, clickable functionality
- **Responsive**: All styling options work across devices

### Content Flexibility

All boxes support multiple content types for maximum flexibility:

```typescript
// String content
content: "Simple text content";

// Array content (auto-converts to bullet list)
content: ["Point 1", "Point 2", "Point 3"];

// ReactNode content (full customization!)
content: <div>
  <CustomComponent />
  <MathExpression />
</div>;
```

This flexibility allows for rich content including mathematical expressions, interactive components, and custom layouts within any box component.

## 🎯 Topic Data Construction

Topic components follow a consistent pattern for maintainability and flexibility! 📝

### TopicContent Type

The `TopicContent` interface in `src/types/topic.ts` defines all possible content sections:

```typescript
interface TopicContent {
  definition?: { title: string; content: string | string[] | React.ReactNode };
  tip?: { title: string; content: string | string[] | React.ReactNode };
  example?: {
    question: string | React.ReactNode;
    steps: Step[];
    answer?: string | React.ReactNode;
  };
  exercise?: { questions: ExerciseQuestion[] };
  hint?: { content: string | string[] | React.ReactNode };
  warning?: { content: string | string[] | React.ReactNode };
  image?: {
    src: string | React.ReactNode;
    imageAlt: string;
    explanation: string | string[] | React.ReactNode;
  };
  threeD?: {
    modelUrl: string;
    title?: string;
    content?: string | string[] | React.ReactNode;
  };
}
```

### Topic Component Pattern

Every topic component follows this consistent pattern:

```typescript
// 1. Import box components
import DefinitionBox from "../../common/box/DefinitionBox";
import ExampleBox from "../../common/box/ExampleBox";
import TipBox from "../../common/box/TipBox";
import ExerciseBox from "../../common/box/ExerciseBox";
// ... more imports

// 2. Define topic content data
const TOPIC_CONTENT: TopicContent = {
  definition: { title: "និយមន័យ", content: "..." },
  tip: { title: "គន្លឹះ", content: ["Point 1", "Point 2", "Point 3"] },
  example: { question: "...", steps: [...], answer: "..." },
  exercise: { questions: [...] },
  hint: { content: "..." },
  warning: { content: "..." },
  image: { src: "...", imageAlt: "...", explanation: "..." },
  threeD: { modelUrl: "...", title: "...", content: "..." }
};

// 3. Render conditionally
export default function MyTopic() {
  return (
    <>
      {TOPIC_CONTENT.definition && (
        <DefinitionBox title={TOPIC_CONTENT.definition.title} content={TOPIC_CONTENT.definition.content} />
      )}
      {TOPIC_CONTENT.tip && (
        <TipBox title={TOPIC_CONTENT.tip.title} content={TOPIC_CONTENT.tip.content} />
      )}
      {TOPIC_CONTENT.example && (
        <ExampleBox question={TOPIC_CONTENT.example.question} steps={TOPIC_CONTENT.example.steps} answer={TOPIC_CONTENT.example.answer} />
      )}
      {/* ... more conditional renders */}
    </>
  );
}
```

### Subtopic Organization 🎯

For complex topics covering multiple related concepts, two main approaches are available:

#### Option 1: Multiple Content Objects

```typescript
const VOLUME_CONTENT = {
  sphere: {
    definition: { title: "អាវុធ", content: "..." },
    example: { question: "រកមាឌអាវុធ", steps: [...] }
  },
  cube: {
    definition: { title: "គូប", content: "..." },
    example: { question: "រកមាឌគូប", steps: [...] }
  },
  cylinder: {
    definition: { title: "ស៊ីលីនដែរ", content: "..." },
    example: { question: "រកមាឌស៊ីលីនដែរ", steps: [...] }
  }
};
```

#### Option 2: Array-Based Approach

```typescript
const VOLUME_SHAPES = [
  { name: "sphere", title: "អាវុធ", formula: "V = 4/3πr³" },
  { name: "cube", title: "គូប", formula: "V = a³" },
  { name: "cylinder", title: "ស៊ីលីនដែរ", formula: "V = πr²h" }
];

// Then map over them for consistent rendering
{VOLUME_SHAPES.map((shape, index) => (
  <div key={shape.name}>
    <h3>{shape.title}</h3>
    <ExampleBox question={`រកមាឌ${shape.title}`} steps={[...]} />
  </div>
))}
```

## 📐 KaTeX Integration

KaTeX provides beautiful mathematical expressions throughout the documentation! ✨

### Basic Syntax

```typescript
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

// Inline math
<InlineMath math="x = 2" />

// Block math
<BlockMath math="\lim_{x \to 2} \frac{x^2 - 4}{x - 2}" />
```

### Common Mathematical Expressions

#### Basic Math

```typescript
// Fractions
<InlineMath math="\frac{a}{b}" />

// Powers and roots
<InlineMath math="x^2 + \sqrt{y}" />

// Sums and products
<InlineMath math="\sum_{i=1}^{n} x_i" />
<InlineMath math="\prod_{i=1}^{n} x_i" />

// Integrals
<InlineMath math="\int_{a}^{b} f(x) dx" />

// Derivatives
<InlineMath math="\frac{d}{dx} f(x)" />
```

#### Calculus

```typescript
// Limits
<InlineMath math="\lim_{x \to \infty} \frac{1}{x}" />

// Partial derivatives
<InlineMath math="\frac{\partial f}{\partial x}" />

// Multiple integrals
<InlineMath math="\iint_D f(x,y) dx dy" />

// Series
<InlineMath math="\sum_{n=1}^{\infty} \frac{1}{n^2}" />
```

#### Linear Algebra

```typescript
// Matrices
<InlineMath math="\begin{pmatrix} a & b \\ c & d \end{pmatrix}" />

// Determinants
<InlineMath math="\begin{vmatrix} a & b \\ c & d \end{vmatrix}" />

// Vectors
<InlineMath math="\vec{v} = \begin{pmatrix} x \\ y \\ z \end{pmatrix}" />

// Systems of equations
<InlineMath math="\begin{cases} x + y = 2 \\ 2x - y = 1 \end{cases}" />
```

#### Physics

```typescript
// Force
<InlineMath math="\vec{F} = m\vec{a}" />

// Energy
<InlineMath math="E = mc^2" />

// Wave function
<InlineMath math="\psi(x,t) = A e^{i(kx - \omega t)}" />

// Electric field
<InlineMath math="\vec{E} = \frac{kq}{r^2}\hat{r}" />
```

#### Chemistry

```typescript
// Chemical equations
<InlineMath math="\ce{2H2 + O2 -> 2H2O}" />

// Equilibrium constant
<InlineMath math="K_c = \frac{[C]^c[D]^d}{[A]^a[B]^b}" />

// pH
<InlineMath math="pH = -\log[H^+]" />

// Gas law
<InlineMath math="PV = nRT" />
```

### Complex Examples

```typescript
// Step-by-step solution with mixed content
<div>
  នៅ <InlineMath math="x = 2" /><br />
  ភាគយក = <InlineMath math="2^2 - 4 = 0" /><br />
  ភាគបែង = <InlineMath math="2 - 2 = 0" /><br />
  ដូច្នេះយើងមានទម្រង់ <InlineMath math="0/0" />
</div>

// Complex mathematical expression
<BlockMath math="\lim_{x \to 0} \frac{\sin(x)}{x} = \lim_{x \to 0} \frac{\cos(x)}{1} = 1" />

// Matrix operations
<BlockMath math="\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} a + 2b \\ 3a + 4b \end{pmatrix}" />
```

---

The system is designed to be flexible, maintainable, and easy to extend. The key is understanding the curriculum structure and how the box components work together to create rich educational content! 📚✨
