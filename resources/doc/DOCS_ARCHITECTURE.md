# DOCS Architecture

## Overview

The documentation system is a comprehensive educational platform built with Next.js that provides structured learning content for Cambodian students. The system follows a hierarchical curriculum structure: **Grade → Subject → Lesson → Topic**, with each level containing progressively more specific educational content.

## Table of Contents

1. [Curriculum Structure](#curriculum-structure)
2. [Routing System](#routing-system)
3. [Component Architecture](#component-architecture)
4. [Data Flow](#data-flow)
5. [Topic Content Structure](#topic-content-structure)
6. [Box Components](#box-components)
7. [Navigation System](#navigation-system)
8. [Responsive Design](#responsive-design)
9. [Type System](#type-system)
10. [Best Practices](#best-practices)

---

## Curriculum Structure

### Hierarchical Organization

The curriculum follows a four-level hierarchy:

```
Grade (ថ្នាក់ទី១២)
├── Subject (គណិតវិទ្យា)
│   ├── Lesson (លីមីត)
│   │   ├── Topic (លីមីត ០/០)
│   │   ├── Topic (លីមីត ∞/∞)
│   │   └── Topic (អាសុីមកូត)
│   └── Lesson (ដេរីវេ)
│       ├── Topic (និយមន័យដេរីវេ)
│       └── Topic (រូបមន្តដេរីវេ)
└── Subject (រូបវិទ្យា)
    └── Lesson (មេកានិច)
        └── Topic (គីណេម៉ាទិច)
```

### Type Definitions

The curriculum structure is defined through TypeScript interfaces in `src/types/curriculum.ts`:

```typescript
// Grade level (e.g., Grade 12)
export interface Grade {
  grade: string; // English identifier (e.g., "grade-12")
  gradeKhmer: string; // Khmer name (e.g., "ថ្នាក់ទី១២")
  content: Content[]; // Subjects within this grade
}

// Subject within a grade (e.g., Mathematics, Physics)
export interface Content {
  subject: string; // English identifier (e.g., "math")
  title: string; // Khmer subject name (e.g., "គណិតវិទ្យា")
  englishTitle: string; // English subject name (e.g., "Mathematics")
  icon: React.ComponentType<{ size?: number; className?: string }>;
  lessons: Lesson[]; // Lessons within this subject
}

// Lesson within a subject (e.g., Limits, Derivatives)
export interface Lesson {
  lesson: string; // English identifier (e.g., "limits")
  title: string; // Khmer lesson name (e.g., "លីមីត")
  englishTitle: string; // English lesson name (e.g., "Limits")
  icon: React.ComponentType<{ size?: number; className?: string }>;
  topics: Topic[]; // Topics within this lesson
}

// Individual topic within a lesson
export interface Topic {
  title: string; // Khmer topic name (e.g., "លីមីត ០/០")
  englishTitle: string; // English identifier (e.g., "zero-over-zero")
  component: React.ComponentType<{ size?: number; className?: string }>;
  subtopics?: Topic[]; // Optional subtopics within this topic
}
```

### Curriculum Data Organization

The curriculum data is organized in the `src/curriculum/` directory:

```
src/curriculum/
├── curriculum.ts          # Main curriculum export
├── grade-12/
│   ├── index.ts          # Grade 12 configuration
│   ├── math.ts           # Mathematics subject
│   ├── physics.ts        # Physics subject
│   ├── chemistry.ts      # Chemistry subject
│   └── biology.ts        # Biology subject
```

Each subject file exports a `Content` object containing lessons and topics:

```typescript
// src/curriculum/grade-12/math.ts
export const math: Content = {
  subject: "math",
  title: "គណិតវិទ្យា",
  englishTitle: "Mathematics",
  icon: Calculator,
  lessons: [
    {
      lesson: "limits",
      title: "លីមីត",
      englishTitle: "Limits",
      icon: Target,
      topics: [
        {
          title: "លីមីត ០/០",
          englishTitle: "zero-over-zero",
          component: LimitZeroOverZero,
        },
        // ... more topics
      ],
    },
    // ... more lessons
  ],
};
```

---

## Routing System

### Dynamic Route Structure

The documentation uses Next.js dynamic routing with the following structure:

```
/docs/[grade]/[subject]/[lesson]/[topic]
```

Example URLs:
- `/docs/grade-12/math/limits/zero-over-zero`
- `/docs/grade-12/physics/mechanics/kinematics`
- `/docs/grade-12/chemistry/atomic/atomic-structure`

### Route Parameters

The routing system extracts four parameters from the URL:

```typescript
type Params = { 
  grade: string; 
  subject: string; 
  lesson: string; 
  topic: string; 
};
```

### Page Component Logic

The main page component (`src/app/docs/[grade]/[subject]/[lesson]/[topic]/page.tsx`) handles:

1. **Parameter Extraction**: Uses `useParams()` to get route parameters
2. **Data Lookup**: Finds the corresponding topic component from curriculum data
3. **Navigation**: Calculates previous/next topic links
4. **Rendering**: Renders the topic component with navigation

```typescript
const getTopicComponent = (params: Params) => {
    const grade = curriculum.find(g => g.grade === params.grade);
    const subject = grade?.content.find(s => s.subject === params.subject);
    const lesson = subject?.lessons.find(l => l.lesson === params.lesson);
    const topic = lesson?.topics.find(t => t.englishTitle === params.topic);

    return { topic, lesson, subject, grade };
}
```

---

## Component Architecture

### Core Layout Components

The documentation system consists of three main layout components:

#### 1. DocHeader (`src/components/pages/docs/common/DocHeader.tsx`)

**Purpose**: Provides subject-level navigation and grade selection.

**Features**:
- **Desktop**: Horizontal subject tabs with grade dropdown
- **Mobile**: Collapsible subject navigation with lesson/topic dropdowns
- **Active State**: Highlights current subject with indigo styling
- **Responsive**: Adapts layout for different screen sizes

**Structure**:
```typescript
interface DocHeaderProps {
    currentGrade?: string;
    currentSubject?: string;
    currentLesson?: string;
    currentTopic?: string;
}
```

**Key Functionality**:
- Renders subject tabs for easy navigation between subjects
- Provides grade selection dropdown
- Handles mobile-responsive navigation
- Uses backdrop blur and glass morphism effects

#### 2. Sidebar (`src/components/pages/docs/common/Sidebar.tsx`)

**Purpose**: Provides lesson and topic navigation within the current subject.

**Features**:
- **Expandable Lessons**: Click to expand/collapse lesson sections
- **Topic Navigation**: Direct links to topics within lessons
- **Active States**: Highlights current lesson and topic
- **Auto-expansion**: Automatically expands current lesson

**Structure**:
```typescript
interface SidebarProps {
    currentGrade?: string;
    currentSubject?: string;
    currentLesson?: string;
    currentTopic?: string;
}
```

**Key Functionality**:
- Manages expanded/collapsed state for lessons
- Provides direct topic navigation
- Handles active state highlighting
- Responsive design with scrollable content

#### 3. TopicWrapper (`src/components/pages/docs/common/TopicWrapper.tsx`)

**Purpose**: Wraps individual topic content with navigation and metadata.

**Features**:
- **Topic Title**: Displays the current topic title with icon
- **Navigation**: Previous/Next topic buttons
- **Content Container**: Provides consistent styling for topic content
- **Responsive**: Adapts to different screen sizes

**Structure**:
```typescript
interface TopicWrapperProps {
    title: string;
    children: React.ReactNode;
    prev?: NavigationItem | null;
    next?: NavigationItem | null;
}
```

**Key Functionality**:
- Renders topic title with appropriate icon
- Handles navigation between topics
- Provides consistent content styling
- Manages disabled states for navigation buttons

### Component Rendering Flow

```
Page Component
├── Sidebar (Lesson/Topic Navigation)
├── DocHeader (Subject/Grade Navigation)
└── TopicWrapper
    └── Topic Component (e.g., LimitZeroOverZero)
        └── Box Components (DefinitionBox, ExampleBox, etc.)
```

---

## Data Flow

### 1. URL Parameters → Component Resolution

```
URL: /docs/grade-12/math/limits/zero-over-zero
↓
Params: { grade: "grade-12", subject: "math", lesson: "limits", topic: "zero-over-zero" }
↓
Curriculum Lookup: Find matching grade → subject → lesson → topic
↓
Component Resolution: LimitZeroOverZero component
```

### 2. Navigation Calculation

The system calculates previous and next topics for navigation:

```typescript
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
}
```

### 3. Active State Management

Components use the current parameters to determine active states:

- **Sidebar**: Highlights current lesson and topic
- **DocHeader**: Highlights current subject
- **Navigation**: Enables/disables prev/next buttons

---

## Topic Content Structure

### Topic Component Pattern

Each topic component follows a consistent pattern:

```typescript
// 1. Import box components
import DefinitionBox from "../../common/box/DefinitionBox";
import ExampleBox from "../../common/box/ExampleBox";
import TipBox from "../../common/box/TipBox";
// ... more imports

// 2. Define topic content data
const TOPIC_CONTENT: TopicContent = {
    definition: {
        title: "លីមីត ០/០ - តើវាជាអ្វី?",
        content: "លីមីត ០/០ គឺជាលីមីតដែល..."
    },
    tip: {
        title: "ច្បាប់សំខាន់ៗសម្រាប់លីមីត ០/០",
        content: [
            "តែងតែព្យាយាមកត្តាលេខភាគជាមុនសិន។",
            "ប្រសិនបើកត្តាលេខភាគមិនដំណើរការ ប្រើច្បាប់ L'Hôpital។",
            // ... more tips
        ]
    },
    example: {
        question: <div>រកលីមីតៈ <BlockMath math="\lim_{x \to 2} \frac{x^2 - 4}{x - 2}" /></div>,
        steps: [
            {
                title: "ពិនិត្យមើលទម្រង់",
                content: <div>នៅ <InlineMath math="x = 2" />...</div>
            },
            // ... more steps
        ],
        answer: "លីមីតគឺ 4"
    },
    exercise: {
        questions: [
            {
                id: "q1",
                question: "រកលីមីតៈ limx→3 (x² - 9)/(x - 3)",
                options: ["៣", "៦", "៩", "មិនកំណត់"],
                correctAnswer: 1
            },
            // ... more questions
        ]
    },
    // ... more content sections
};

// 3. Render topic component
export default function LimitZeroOverZero() {
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

### Content Type Definitions

The topic content structure is defined in `src/types/topic.ts`:

```typescript
export interface TopicContent {
    definition?: {
        title: string;
        content: string | string[] | React.ReactNode;
    };
    tip?: {
        title: string;
        content: string | string[] | React.ReactNode;
    };
    example?: {
        question: string | React.ReactNode;
        steps: Step[];
        answer?: string | React.ReactNode;
    };
    exercise?: {
        questions: ExerciseQuestion[];
    };
    hint?: {
        content: string | string[] | React.ReactNode;
    };
    warning?: {
        content: string | string[] | React.ReactNode;
    };
    image?: {
        src: string | React.ReactNode;
        imageAlt: string;
        explanation: string | string[] | React.ReactNode;
    };
    threeD?: {
        modelUrl: string;
        scale?: number;
        position?: [number, number, number];
        rotation?: [number, number, number];
        title?: string;
        content?: string | string[] | React.ReactNode;
    };
}
```

### Flexible Content Organization

#### Single Topic Structure

For simple topics with one content flow:

```typescript
const TOPIC_CONTENT: TopicContent = {
    definition: { /* ... */ },
    example: { /* ... */ },
    exercise: { /* ... */ }
};
```

#### Multi-Subtopic Structure

For complex topics with multiple subtopics, you can organize content in multiple objects:

```typescript
// Option 1: Multiple content objects
const VOLUME_CONTENT = {
    sphere: {
        definition: { /* sphere definition */ },
        example: { /* sphere example */ }
    },
    cube: {
        definition: { /* cube definition */ },
        example: { /* cube example */ }
    },
    cylinder: {
        definition: { /* cylinder definition */ },
        example: { /* cylinder example */ }
    }
};

// Option 2: Array-based approach for similar structures
const VOLUME_SHAPES = [
    { name: "sphere", title: "អាវុធ", formula: "V = 4/3πr³" },
    { name: "cube", title: "គូប", formula: "V = a³" },
    { name: "cylinder", title: "ស៊ីលីនដែរ", formula: "V = πr²h" }
];

export default function VolumeTopic() {
    return (
        <>
            {/* Common introduction */}
            <DefinitionBox title="មាឌ" content="មាឌគឺជាទំហំដែលវត្ថុគ្របដណ្តប់..." />
            
            {/* Individual shape sections */}
            {VOLUME_SHAPES.map((shape, index) => (
                <div key={shape.name}>
                    <h3>{shape.title}</h3>
                    <ExampleBox 
                        question={`រកមាឌ${shape.title}`}
                        steps={[/* shape-specific steps */]}
                    />
                </div>
            ))}
            
            {/* Combined exercise */}
            <ExerciseBox questions={[/* volume questions */]} />
        </>
    );
}
```

#### Custom Layout Approach

For maximum flexibility, you can create custom layouts:

```typescript
export default function CustomTopic() {
    return (
        <>
            {/* Custom order and layout */}
            <CustomBox 
                title="សេចក្តីផ្តើម"
                backgroundColor="bg-blue-50"
                borderColor="border-blue-600"
                content="ការពន្យល់ផ្តើម..."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DefinitionBox title="និយមន័យ" content="..." />
                <TipBox title="គន្លឹះ" content="..." />
            </div>
            
            <ExampleBox question="..." steps={[...]} />
            
            {/* Custom component */}
            <InteractiveGraph expressions={[...]} />
        </>
    );
}
```

---

## Box Components

The documentation system uses a collection of specialized box components for different types of content. All box components are located in `src/components/pages/docs/common/box/`.

### Core Box Components

#### 1. DefinitionBox

**Purpose**: Displays definitions and conceptual explanations.

**Props**:
```typescript
interface DefinitionBoxProps {
    title: string | React.ReactNode;
    content: string | string[] | React.ReactNode;
}
```

**Features**:
- Clean, minimal styling
- Supports string, array, or ReactNode content
- Automatic bullet list rendering for arrays
- Consistent typography and spacing

**Usage**:
```typescript
<DefinitionBox 
    title="លីមីត ០/០ - តើវាជាអ្វី?"
    content="លីមីត ០/០ គឺជាលីមីតដែលភាគយក និងភាគបែងទាំងពីរខិតទៅរកសូន្យ។"
/>
```

#### 2. ExampleBox

**Purpose**: Displays worked examples with step-by-step solutions.

**Props**:
```typescript
interface ExampleBoxProps {
    question: string | React.ReactNode;
    content?: string | string[] | React.ReactNode;
    steps: Step[];
    answer?: string | React.ReactNode;
}
```

**Features**:
- Amber color scheme for examples
- Step-by-step solution display
- Optional answer box with green styling
- Supports mathematical expressions via KaTeX

**Usage**:
```typescript
<ExampleBox 
    question={<div>រកលីមីតៈ <BlockMath math="\lim_{x \to 2} \frac{x^2 - 4}{x - 2}" /></div>}
    steps={[
        {
            title: "ពិនិត្យមើលទម្រង់",
            content: <div>នៅ <InlineMath math="x = 2" />...</div>
        },
        // ... more steps
    ]}
    answer="លីមីតគឺ 4"
/>
```

#### 3. ExerciseBox

**Purpose**: Interactive multiple-choice exercises with immediate feedback.

**Props**:
```typescript
interface ExerciseBoxProps {
    questions: ExerciseQuestion[];
}
```

**Features**:
- Multi-question navigation
- Immediate feedback on answer selection
- Progress indicators
- Khmer letter options (ក, ខ, គ, ឃ)
- Correct/incorrect visual feedback

**Usage**:
```typescript
<ExerciseBox 
    questions={[
        {
            id: "q1",
            question: "រកលីមីតៈ limx→3 (x² - 9)/(x - 3)",
            options: ["៣", "៦", "៩", "មិនកំណត់"],
            correctAnswer: 1
        },
        // ... more questions
    ]}
/>
```

#### 4. TipBox

**Purpose**: Displays helpful tips and best practices.

**Props**:
```typescript
interface TipBoxProps {
    title?: string | React.ReactNode;
    icon?: React.ComponentType<{ size?: number; className?: string }>;
    content: string | string[] | React.ReactNode;
}
```

**Features**:
- Indigo color scheme
- Left border accent
- Customizable icon
- Supports bullet lists

**Usage**:
```typescript
<TipBox 
    title="ច្បាប់សំខាន់ៗសម្រាប់លីមីត ០/០"
    content={[
        "តែងតែព្យាយាមកត្តាលេខភាគជាមុនសិន។",
        "ប្រសិនបើកត្តាលេខភាគមិនដំណើរការ ប្រើច្បាប់ L'Hôpital។",
        // ... more tips
    ]}
/>
```

#### 5. WarningBox

**Purpose**: Displays important warnings and cautions.

**Props**:
```typescript
interface WarningBoxProps {
    icon?: React.ComponentType<{ size?: number; className?: string }>;
    content: string | string[] | React.ReactNode;
}
```

**Features**:
- Red color scheme for warnings
- Customizable icon
- Consistent with other box components

**Usage**:
```typescript
<WarningBox 
    content="កុំច្រឡំរវាងលីមីត ០/០ ជាមួយនឹងការចែកដោយសូន្យ។"
/>
```

#### 6. HintBox

**Purpose**: Provides hints and guidance for problem-solving.

**Props**:
```typescript
interface HintBoxProps {
    content: string | string[] | React.ReactNode;
}
```

**Features**:
- Lightbulb icon
- Indigo color scheme
- Backdrop blur effect

**Usage**:
```typescript
<HintBox 
    content="ពេលជួបប្រទះលីមីត ០/០ តែងតែចាំថា៖ ១) ព្យាយាមកត្តាលេខភាគជាមុន..."
/>
```

### Specialized Box Components

#### 7. ImageBox

**Purpose**: Displays images with explanations.

**Props**:
```typescript
interface ImageBoxProps {
    src?: string | React.ReactNode;
    imageAlt: string;
    explanation: string | string[] | React.ReactNode;
}
```

**Features**:
- Responsive grid layout
- Image and explanation side-by-side on desktop
- Stacked layout on mobile
- Supports both image URLs and React components

**Usage**:
```typescript
<ImageBox 
    src={<Graph expressions={[...]} />}
    imageAlt="ក្រាបលីមីត ០/០"
    explanation="ក្រាបនេះបង្ហាញពីរបៀបដែលអនុគមន៍ f(x) = (x² - 4)/(x - 2) មានរន្ធ (hole) នៅ x = 2។"
/>
```

#### 8. ThreeDBox

**Purpose**: Displays interactive 3D models with camera controls.

**Props**:
```typescript
interface ThreeDBoxProps {
    modelUrl: string;
    scale?: number;
    position?: [number, number, number];
    rotation?: [number, number, number];
    style?: React.CSSProperties;
    title?: React.ReactNode;
    content?: string | string[] | React.ReactNode;
}
```

**Features**:
- Interactive 3D model viewing
- Manual camera orbit controls
- Customizable model properties
- Title and content sections
- Responsive design

**Usage**:
```typescript
<ThreeDBox 
    modelUrl="/models/sample.glb"
    title="រូបភាព 3D"
    content="ក្រាបនេះបង្ហាញពីរបៀបដែលអនុគមន៍ f(x) = (x² - 4)/(x - 2) មានរន្ធ (hole) នៅ x = 2។"
    style={{ height: '500px', width: '100%' }}
/>
```

#### 9. CustomBox

**Purpose**: Highly customizable box component for special use cases.

**Props**:
```typescript
interface CustomBoxProps {
    // Content
    content: string | string[] | React.ReactNode;
    
    // Title and Icon
    title?: string;
    titleIcon?: React.ComponentType<{ size?: number; className?: string }>;
    
    // Colors
    backgroundColor?: string;
    borderColor?: string;
    titleColor?: string;
    iconColor?: string;
    contentColor?: string;
    
    // Styling
    showTitle?: boolean;
    showIcon?: boolean;
    borderWidth?: '1' | '2' | '4';
    shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    padding?: '2' | '4' | '6' | '8';
    margin?: '2' | '4' | '6' | '8';
    rounded?: 'lg' | 'xl' | '2xl' | '3xl';
    
    // Advanced features
    backdropBlur?: boolean;
    gradient?: boolean;
    gradientFrom?: string;
    gradientTo?: string;
    gradientDirection?: 'to-r' | 'to-l' | 'to-t' | 'to-b' | 'to-tr' | 'to-tl' | 'to-br' | 'to-bl';
    
    // Interactive
    hoverEffect?: boolean;
    clickable?: boolean;
    onClick?: () => void;
}
```

**Features**:
- Complete color customization
- Gradient backgrounds
- Interactive hover effects
- Clickable functionality
- Flexible styling options

**Usage**:
```typescript
<CustomBox 
    title="ការពន្យល់ពិសេស"
    titleIcon={Info}
    backgroundColor="bg-purple-50"
    borderColor="border-purple-600"
    titleColor="text-purple-600"
    gradient={true}
    gradientFrom="from-purple-500"
    gradientTo="to-pink-500"
    hoverEffect={true}
    content="ការពន្យល់ពិសេសអំពីគោលគំនិតនេះ..."
/>
```

### Mathematical Components

#### 10. GraphBox

**Purpose**: Displays mathematical graphs using Desmos integration.

**Props**:
```typescript
interface GraphBoxProps {
    expressions: Expression[];
    options?: Partial<CalculatorOptions>;
}
```

**Features**:
- Desmos calculator integration
- Multiple expression support
- Customizable calculator options
- Responsive design

**Usage**:
```typescript
<GraphBox 
    expressions={[
        { id: '1', latex: 'f(x)=\\frac{x^2 - 4}{x - 2}', color: '#c00' },
        { id: '2', latex: 'y=4', color: '#00c' }
    ]}
    options={{ expressions: false, keypad: false }}
/>
```

---

## Navigation System

### Multi-Level Navigation

The documentation system implements a sophisticated multi-level navigation system:

#### 1. Grade-Level Navigation

- **Location**: DocHeader dropdown
- **Function**: Switch between different grade levels
- **Implementation**: Select dropdown with all available grades

#### 2. Subject-Level Navigation

- **Location**: DocHeader tabs (desktop) / dropdown (mobile)
- **Function**: Navigate between subjects within the current grade
- **Implementation**: 
  - Desktop: Horizontal tabs with active state highlighting
  - Mobile: Collapsible dropdown menu

#### 3. Lesson-Level Navigation

- **Location**: Sidebar (desktop) / DocHeader dropdown (mobile)
- **Function**: Navigate between lessons within the current subject
- **Implementation**:
  - Desktop: Expandable sidebar sections
  - Mobile: Dropdown in mobile header

#### 4. Topic-Level Navigation

- **Location**: Sidebar topics (desktop) / DocHeader tabs (mobile)
- **Function**: Navigate between topics within the current lesson
- **Implementation**:
  - Desktop: Nested list items in sidebar
  - Mobile: Horizontal scrollable tabs

### Navigation State Management

#### Active State Logic

```typescript
// Determine active states based on current parameters
const isActiveSubject = currentSubject === subject.subject;
const isActiveLesson = currentLesson === lessonData.lesson;
const isActiveTopic = currentTopic === topicData.englishTitle && lessonData.lesson === currentLesson;
```

#### Navigation Calculation

```typescript
// Calculate previous/next topic navigation
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
}
```

### Responsive Navigation

#### Desktop Layout

```
┌─────────────────────────────────────────────────────────┐
│ [Grade Dropdown] [Math] [Physics] [Chemistry] [Bio]   │ ← DocHeader
├─────────────────────────────────────────────────────────┤
│ [Limits] ▼                                            │
│   ├─ Definition                                       │ ← Sidebar
│   ├─ Zero over Zero                                   │
│   └─ Infinity over Infinity                           │
│ [Derivatives] ▼                                       │
│   ├─ Definition                                       │
│   └─ Rules                                            │
└─────────────────────────────────────────────────────────┘
```

#### Mobile Layout

```
┌─────────────────────────────────────────────────────────┐
│ [Grade] [Math] [Physics] [Chemistry] [Bio]            │ ← DocHeader (Subjects)
├─────────────────────────────────────────────────────────┤
│ [Limits ▼] [Derivatives ▼] [Integration ▼]            │ ← DocHeader (Lessons)
├─────────────────────────────────────────────────────────┤
│ [Def] [0/0] [∞/∞] [Trig] [Practice]                  │ ← DocHeader (Topics)
└─────────────────────────────────────────────────────────┘
```

---

## Type System

### Core Type Definitions

The documentation system uses a comprehensive type system to ensure type safety and consistency:

#### Curriculum Types

```typescript
// Grade level structure
export interface Grade {
  grade: string;           // English identifier
  gradeKhmer: string;      // Khmer display name
  content: Content[];      // Subjects within grade
}

// Subject within grade
export interface Content {
  subject: string;         // English identifier
  title: string;          // Khmer display name
  englishTitle: string;   // English display name
  icon: React.ComponentType<{ size?: number; className?: string }>;
  lessons: Lesson[];      // Lessons within subject
}

// Lesson within subject
export interface Lesson {
  lesson: string;         // English identifier
  title: string;          // Khmer display name
  englishTitle: string;   // English display name
  icon: React.ComponentType<{ size?: number; className?: string }>;
  topics: Topic[];        // Topics within lesson
}

// Topic within lesson
export interface Topic {
  title: string;          // Khmer display name
  englishTitle: string;   // English identifier
  component: React.ComponentType<{ size?: number; className?: string }>;
  subtopics?: Topic[];    // Optional nested topics
}
```

#### Topic Content Types

```typescript
// Step in example solution
export interface Step {
  title: string;
  content: string | React.ReactNode;
}

// Exercise question
export interface ExerciseQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

// Complete topic content structure
export interface TopicContent {
  definition?: {
    title: string;
    content: string | string[] | React.ReactNode;
  };
  tip?: {
    title: string;
    content: string | string[] | React.ReactNode;
  };
  example?: {
    question: string | React.ReactNode;
    steps: Step[];
    answer?: string | React.ReactNode;
  };
  exercise?: {
    questions: ExerciseQuestion[];
  };
  hint?: {
    content: string | string[] | React.ReactNode;
  };
  warning?: {
    content: string | string[] | React.ReactNode;
  };
  image?: {
    src: string | React.ReactNode;
    imageAlt: string;
    explanation: string | string[] | React.ReactNode;
  };
  threeD?: {
    modelUrl: string;
    scale?: number;
    position?: [number, number, number];
    rotation?: [number, number, number];
    title?: string;
    content?: string | string[] | React.ReactNode;
  };
}
```

#### Box Component Types

```typescript
// Base box component props
export interface BaseBoxProps {
  title?: string | React.ReactNode;
  content: string | string[] | React.ReactNode;
}

// Definition box
export interface DefinitionBoxProps {
  title: string | React.ReactNode;
  content: string | string[] | React.ReactNode;
}

// Example box
export interface ExampleBoxProps {
  question: string | React.ReactNode;
  content?: string | string[] | React.ReactNode;
  steps: Step[];
  answer?: string | React.ReactNode;
}

// Exercise box
export interface ExerciseBoxProps {
  questions: ExerciseQuestion[];
}

// Custom box with full customization
export interface CustomBoxProps {
  // Content
  content: string | string[] | React.ReactNode;
  
  // Title and Icon
  title?: string;
  titleIcon?: React.ComponentType<{ size?: number; className?: string }>;
  
  // Colors
  backgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  iconColor?: string;
  contentColor?: string;
  
  // Styling
  showTitle?: boolean;
  showIcon?: boolean;
  borderWidth?: '1' | '2' | '4';
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  padding?: '2' | '4' | '6' | '8';
  margin?: '2' | '4' | '6' | '8';
  rounded?: 'lg' | 'xl' | '2xl' | '3xl';
  
  // Advanced features
  backdropBlur?: boolean;
  gradient?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  gradientDirection?: 'to-r' | 'to-l' | 'to-t' | 'to-b' | 'to-tr' | 'to-tl' | 'to-br' | 'to-bl';
  
  // Interactive
  hoverEffect?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}
```

### Type Safety Benefits

1. **Compile-time Error Detection**: TypeScript catches errors before runtime
2. **IntelliSense Support**: Better IDE autocomplete and documentation
3. **Refactoring Safety**: Safe refactoring with type checking
4. **API Consistency**: Ensures consistent component interfaces
5. **Documentation**: Types serve as living documentation

---

## Best Practices

### 1. Component Organization

#### File Structure
```
src/
├── components/
│   └── pages/
│       └── docs/
│           ├── common/
│           │   ├── DocHeader.tsx
│           │   ├── Sidebar.tsx
│           │   ├── TopicWrapper.tsx
│           │   └── box/
│           │       ├── DefinitionBox.tsx
│           │       ├── ExampleBox.tsx
│           │       ├── ExerciseBox.tsx
│           │       ├── TipBox.tsx
│           │       ├── WarningBox.tsx
│           │       ├── HintBox.tsx
│           │       ├── ImageBox.tsx
│           │       ├── ThreeDBox.tsx
│           │       ├── CustomBox.tsx
│           │       ├── GraphBox.tsx
│           │       └── Graph.tsx
│           └── grade-12/
│               ├── limit/
│               │   ├── Limit-Zero-Over-Zero.tsx
│               │   ├── Limit-Infinity-Over-Infinity.tsx
│               │   └── ...
│               ├── derivative/
│               │   ├── Definition.tsx
│               │   └── ...
│               └── ...
├── curriculum/
│   ├── curriculum.ts
│   └── grade-12/
│       ├── index.ts
│       ├── math.ts
│       ├── physics.ts
│       ├── chemistry.ts
│       └── biology.ts
└── types/
    ├── curriculum.ts
    └── topic.ts
```

#### Naming Conventions
- **Components**: PascalCase (e.g., `LimitZeroOverZero`)
- **Files**: PascalCase with hyphens for readability (e.g., `Limit-Zero-Over-Zero.tsx`)
- **Types**: PascalCase with descriptive names (e.g., `TopicContent`)
- **Interfaces**: PascalCase with "Props" suffix (e.g., `DefinitionBoxProps`)

### 2. Content Organization

#### Topic Content Structure
```typescript
// Recommended order for topic content
const TOPIC_CONTENT: TopicContent = {
    // 1. Start with definition
    definition: {
        title: "និយមន័យ",
        content: "ការពន្យល់គោលគំនិតមូលដ្ឋាន..."
    },
    
    // 2. Provide helpful tips
    tip: {
        title: "គន្លឹះសំខាន់ៗ",
        content: [
            "ចំណុចសំខាន់ទី១...",
            "ចំណុចសំខាន់ទី២...",
            "ចំណុចសំខាន់ទី៣..."
        ]
    },
    
    // 3. Show worked examples
    example: {
        question: "ឧទាហរណ៍៖ រកលីមីត...",
        steps: [
            {
                title: "ជំហានទី១៖ ពិនិត្យមើលទម្រង់",
                content: "ពិនិត្យមើលថាតើវាជាទម្រង់ ០/០ ឬទេ..."
            },
            {
                title: "ជំហានទី២៖ កត្តាលេខភាគ",
                content: "កត្តាលេខភាគភាគយក និងភាគបែង..."
            },
            {
                title: "ជំហានទី៣៖ វាយតម្លៃលីមីត",
                content: "ជំនួសតម្លៃដែលបានកត្តាលេខភាគ..."
            }
        ],
        answer: "លីមីតគឺ 4"
    },
    
    // 4. Provide interactive exercises
    exercise: {
        questions: [
            {
                id: "q1",
                question: "រកលីមីតៈ limx→3 (x² - 9)/(x - 3)",
                options: ["៣", "៦", "៩", "មិនកំណត់"],
                correctAnswer: 1
            },
            {
                id: "q2",
                question: "រកលីមីតៈ limx→1 (x² - 1)/(x - 1)",
                options: ["០", "១", "២", "មិនកំណត់"],
                correctAnswer: 2
            }
        ]
    },
    
    // 5. Add helpful hints
    hint: {
        content: "ពេលជួបប្រទះលីមីត ០/០ តែងតែចាំថា៖ ១) ព្យាយាមកត្តាលេខភាគជាមុន ២) ស្វែងរកកត្តារួមរវាងភាគយកនិងភាគបែង..."
    },
    
    // 6. Include important warnings
    warning: {
        content: "កុំច្រឡំរវាងលីមីត ០/០ ជាមួយនឹងការចែកដោយសូន្យ។ លីមីត ០/០ គឺជាទម្រង់មិនកំណត់ដែលអាចដោះស្រាយបាន..."
    },
    
    // 7. Visual aids (graphs, images, 3D models)
    image: {
        src: <Graph expressions={[{ id: '1', latex: 'f(x)=\\frac{x^2 - 4}{x - 2}', color: '#c00' }]} />,
        imageAlt: "ក្រាបលីមីត ០/០",
        explanation: "ក្រាបនេះបង្ហាញពីរបៀបដែលអនុគមន៍ f(x) = (x² - 4)/(x - 2) មានរន្ធ (hole) នៅ x = 2។"
    },
    
    threeD: {
        modelUrl: "/models/limit-hole.glb",
        title: "រូបភាព 3D នៃរន្ធ",
        content: "រូបភាព 3D នេះបង្ហាញពីរបៀបដែលអនុគមន៍មានរន្ធ (hole) នៅចំណុចដែលមិនកំណត់។"
    }
};
```

#### Content Flexibility Patterns

**Pattern 1: Single Topic with Multiple Sections**
```typescript
// For topics with one main concept but multiple aspects
const TOPIC_CONTENT: TopicContent = {
    definition: { /* main definition */ },
    tip: { /* general tips */ },
    example: { /* comprehensive example */ },
    exercise: { /* practice questions */ }
};
```

**Pattern 2: Multi-Subtopic Organization**
```typescript
// For topics covering multiple related concepts
const VOLUME_CONTENT = {
    introduction: {
        definition: { title: "មាឌ", content: "មាឌគឺជាទំហំ..." }
    },
    shapes: [
        {
            name: "sphere",
            title: "អាវុធ",
            definition: "អាវុធ គឺជារូបធរណីមាត្រដែលមានចំណុចទាំងអស់..."
        },
        {
            name: "cube", 
            title: "គូប",
            definition: "គូប គឺជារូបធរណីមាត្រដែលមានជ្រុង៦..."
        }
    ],
    combined: {
        exercise: { /* volume questions covering all shapes */ }
    }
};
```

**Pattern 3: Custom Layout Approach**
```typescript
// For maximum flexibility and custom layouts
export default function CustomTopic() {
    return (
        <>
            {/* Custom introduction */}
            <CustomBox 
                title="សេចក្តីផ្តើម"
                backgroundColor="bg-blue-50"
                borderColor="border-blue-600"
                content="ការពន្យល់ផ្តើមអំពីគោលគំនិតនេះ..."
            />
            
            {/* Grid layout for related concepts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DefinitionBox title="និយមន័យ" content="..." />
                <TipBox title="គន្លឹះ" content="..." />
            </div>
            
            {/* Interactive component */}
            <InteractiveGraph expressions={[...]} />
            
            {/* Custom section */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">ការពន្យល់ពិសេស</h3>
                <p>ការពន្យល់ពិសេសអំពីគោលគំនិតនេះ...</p>
            </div>
        </>
    );
}
```

### 3. Mathematical Integration

#### KaTeX Integration

The documentation system integrates KaTeX for mathematical expressions:

```typescript
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

// Inline math
<InlineMath math="x = 2" />

// Block math
<BlockMath math="\lim_{x \to 2} \frac{x^2 - 4}{x - 2}" />

// Complex expressions
<div>
    នៅ <InlineMath math="x = 2" /><br />
    ភាគយក = <InlineMath math="2^2 - 4 = 0" /><br />
    ភាគបែង = <InlineMath math="2 - 2 = 0" /><br />
    ដូច្នេះយើងមានទម្រង់ <InlineMath math="0/0" />
</div>
```

#### Desmos Graph Integration

For interactive mathematical graphs:

```typescript
import Graph, { Expression } from "./Graph";

const expressions: Expression[] = [
    { id: '1', latex: 'f(x)=\\frac{x^2 - 4}{x - 2}', color: '#c00' },
    { id: '2', latex: 'y=4', color: '#00c' }
];

<Graph expressions={expressions} />
```

### 4. Performance Optimization

#### Code Splitting

```typescript
// Lazy load topic components
const LimitZeroOverZero = lazy(() => import('./Limit-Zero-Over-Zero'));
const LimitInfinityOverInfinity = lazy(() => import('./Limit-Infinity-Over-Infinity'));

// Wrap in Suspense
<Suspense fallback={<div>Loading...</div>}>
    <Component />
</Suspense>
```

#### Memoization

```typescript
// Memoize expensive calculations
const navigation = useMemo(() => getNavigationTopics(params), [params]);

// Memoize component props
const topicProps = useMemo(() => ({
    title: topic.title,
    prev: navigation.prev,
    next: navigation.next
}), [topic.title, navigation.prev, navigation.next]);
```

#### Image Optimization

```typescript
// Use Next.js Image component for optimization
import Image from 'next/image';

<Image 
    src="/images/math-graph.png"
    alt="Mathematical graph"
    width={800}
    height={600}
    priority={false}
/>
```

### 5. Accessibility Considerations

#### ARIA Labels and Roles

```typescript
// Navigation with proper ARIA labels
<nav aria-label="Topic navigation">
    <button 
        aria-label="Previous topic"
        onClick={handlePrev}
        disabled={!prev}
    >
        <ArrowLeft className="w-4 h-4" />
        {prev?.title}
    </button>
</nav>
```

#### Keyboard Navigation

```typescript
// Keyboard support for interactive elements
const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick();
    }
};

<button 
    onClick={handleClick}
    onKeyPress={handleKeyPress}
    tabIndex={0}
    role="button"
>
    Click me
</button>
```

#### Screen Reader Support

```typescript
// Proper heading hierarchy
<h1 className="text-3xl font-black text-indigo-500">{title}</h1>
<h2 className="text-xl font-semibold">និយមន័យ</h2>
<h3 className="text-lg font-medium">ឧទាហរណ៍</h3>

// Descriptive alt text
<img 
    src="/images/math-diagram.png"
    alt="ក្រាបបង្ហាញពីរបៀបដែលអនុគមន៍ f(x) = x² កើតឡើង"
/>
```

### 6. Internationalization (i18n)

#### Khmer Language Support

```typescript
// Consistent Khmer typography
const khmerFonts = {
    fontFamily: 'Noto Sans Khmer, system-ui, sans-serif',
    lineHeight: '1.6',
    letterSpacing: '0.025em'
};

// Number formatting
const formatKhmerNumber = (num: number) => {
    const khmerNumerals = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
    return num.toString().split('').map(d => khmerNumerals[parseInt(d)]).join('');
};
```

#### RTL Support (if needed)

```typescript
// Support for RTL languages
const isRTL = locale === 'ar' || locale === 'he';

<div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'text-right' : 'text-left'}>
    {content}
</div>
```

### 7. Error Handling

#### Graceful Degradation

```typescript
// Handle missing curriculum data
const getTopicComponent = (params: Params) => {
    try {
        const grade = curriculum.find(g => g.grade === params.grade);
        if (!grade) throw new Error(`Grade ${params.grade} not found`);
        
        const subject = grade.content.find(s => s.subject === params.subject);
        if (!subject) throw new Error(`Subject ${params.subject} not found`);
        
        const lesson = subject.lessons.find(l => l.lesson === params.lesson);
        if (!lesson) throw new Error(`Lesson ${params.lesson} not found`);
        
        const topic = lesson.topics.find(t => t.englishTitle === params.topic);
        if (!topic) throw new Error(`Topic ${params.topic} not found`);
        
        return { topic, lesson, subject, grade };
    } catch (error) {
        console.error('Error loading topic:', error);
        return { topic: null, lesson: null, subject: null, grade: null };
    }
};
```

#### Fallback Components

```typescript
// Fallback for missing components
const TopicComponent = ({ topic }: { topic: Topic }) => {
    if (!topic?.component) {
        return (
            <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
                <h2 className="text-yellow-800 font-semibold">មានបញ្ហា</h2>
                <p className="text-yellow-700">មិនអាចផ្ទុកមាតិកានេះបានទេ។</p>
            </div>
        );
    }
    
    const Component = topic.component;
    return <Component />;
};
```

### 8. Testing Strategy

#### Unit Tests

```typescript
// Test topic component rendering
describe('LimitZeroOverZero', () => {
    it('renders definition box', () => {
        render(<LimitZeroOverZero />);
        expect(screen.getByText(/លីមីត ០\/០/)).toBeInTheDocument();
    });
    
    it('renders example with steps', () => {
        render(<LimitZeroOverZero />);
        expect(screen.getByText(/ជំហានទី១/)).toBeInTheDocument();
    });
});
```

#### Integration Tests

```typescript
// Test navigation flow
describe('Topic Navigation', () => {
    it('navigates between topics', async () => {
        render(<Page />);
        
        // Navigate to next topic
        const nextButton = screen.getByText(/បន្ទាប់/);
        fireEvent.click(nextButton);
        
        // Verify URL change
        expect(window.location.pathname).toBe('/docs/grade-12/math/limits/infinity-over-infinity');
    });
});
```

#### E2E Tests

```typescript
// Test complete user journey
describe('Complete Topic Flow', () => {
    it('allows user to read topic and complete exercise', async () => {
        await page.goto('/docs/grade-12/math/limits/zero-over-zero');
        
        // Read definition
        await expect(page.locator('text=លីមីត ០/០')).toBeVisible();
        
        // Complete exercise
        await page.click('text=៦');
        await expect(page.locator('.text-green-600')).toBeVisible();
    });
});
```

---

## Future Enhancements

### 1. Advanced Features

#### Interactive 3D Models
- **Enhanced 3D Controls**: More sophisticated camera controls
- **Animation Support**: Animated model transformations
- **Multiple Model Support**: Switching between different 3D models
- **VR/AR Integration**: Virtual and augmented reality support

#### Advanced Mathematical Features
- **Step-by-step Solutions**: Interactive mathematical problem solving
- **Symbolic Computation**: Integration with computer algebra systems
- **Dynamic Graphs**: Real-time graph updates based on user input
- **Mathematical Proofs**: Interactive proof construction

#### Personalization
- **Learning Paths**: Adaptive content based on student progress
- **Difficulty Levels**: Adjustable content complexity
- **Progress Tracking**: Student progress monitoring
- **Customizable Interface**: User preference settings

### 2. Content Management

#### CMS Integration
- **Content Editor**: Visual content creation interface
- **Version Control**: Content versioning and rollback
- **Collaboration**: Multi-author content editing
- **Media Management**: Centralized media asset management

#### Analytics and Insights
- **Usage Analytics**: Track content engagement
- **Learning Analytics**: Student performance metrics
- **Content Performance**: Identify popular/struggling topics
- **A/B Testing**: Content optimization

### 3. Technical Improvements

#### Performance Optimization
- **Virtual Scrolling**: For large topic lists
- **Image Optimization**: Advanced image compression
- **Caching Strategy**: Intelligent content caching
- **CDN Integration**: Global content delivery

#### Mobile Enhancements
- **Offline Support**: PWA capabilities
- **Touch Interactions**: Enhanced mobile gestures
- **Mobile-specific UI**: Optimized mobile layouts
- **Progressive Loading**: Faster mobile loading

#### Accessibility Improvements
- **Screen Reader Optimization**: Enhanced screen reader support
- **Keyboard Navigation**: Complete keyboard accessibility
- **High Contrast Mode**: Accessibility color schemes
- **Voice Control**: Voice navigation support

### 4. Educational Features

#### Assessment System
- **Quiz Generation**: Automated quiz creation
- **Adaptive Testing**: Dynamic difficulty adjustment
- **Progress Assessment**: Comprehensive progress evaluation
- **Certification**: Achievement certificates

#### Collaboration Features
- **Study Groups**: Group learning functionality
- **Discussion Forums**: Topic-based discussions
- **Peer Tutoring**: Student-to-student help
- **Teacher Dashboard**: Educator tools

#### Gamification
- **Achievement System**: Learning milestones
- **Leaderboards**: Competitive learning
- **Badges**: Recognition system
- **Challenges**: Learning challenges

---

## Conclusion

The documentation system represents a comprehensive educational platform that combines modern web technologies with pedagogical best practices. Its modular architecture, responsive design, and extensive customization options make it suitable for a wide range of educational content.

The system's strength lies in its:

1. **Scalability**: Easy to add new grades, subjects, lessons, and topics
2. **Flexibility**: Multiple content organization patterns
3. **Accessibility**: Comprehensive accessibility support
4. **Performance**: Optimized for fast loading and smooth interactions
5. **Maintainability**: Clear code organization and type safety
6. **Extensibility**: Easy to add new features and components

This architecture provides a solid foundation for building comprehensive educational content while maintaining the flexibility to adapt to changing educational needs and technological advancements.

---

## Appendix

### A. Component Checklist

When creating new topic components, ensure:

- [ ] Proper TypeScript types defined
- [ ] Responsive design implemented
- [ ] Accessibility features included
- [ ] Error handling implemented
- [ ] Performance optimizations applied
- [ ] Content properly structured
- [ ] Navigation correctly configured
- [ ] Tests written and passing

### B. Content Guidelines

#### Writing Style
- Use clear, concise Khmer language
- Include both Khmer and English terms where appropriate
- Provide concrete examples
- Use visual aids when helpful
- Include practice exercises

#### Mathematical Content
- Use proper mathematical notation
- Include step-by-step solutions
- Provide multiple solution methods when possible
- Include real-world applications
- Use interactive elements when beneficial

#### Accessibility
- Provide alt text for all images
- Use proper heading hierarchy
- Ensure keyboard navigation
- Include screen reader support
- Test with accessibility tools

### C. Performance Checklist

- [ ] Images optimized and compressed
- [ ] Components lazy loaded where appropriate
- [ ] Bundle size minimized
- [ ] Caching strategy implemented
- [ ] CDN configured for static assets
- [ ] Database queries optimized
- [ ] API responses cached
- [ ] Error boundaries implemented

### D. Security Considerations

- [ ] Input validation implemented
- [ ] XSS protection enabled
- [ ] CSRF protection configured
- [ ] Content Security Policy set
- [ ] HTTPS enforced
- [ ] Regular security audits
- [ ] Dependency updates monitored
- [ ] User data properly protected

---

*This documentation architecture provides a comprehensive guide for understanding, developing, and maintaining the educational documentation system. It serves as both a technical reference and a development guide for future enhancements and improvements.*
           