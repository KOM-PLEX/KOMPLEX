'use client'

import DefinitionBox from "../../components/pages/docs/common/box/DefinitionBox";
import ExampleBox from "../../components/pages/docs/common/box/ExampleBox";
import TipBox from "../../components/pages/docs/common/box/TipBox";
import ExerciseBox from "../../components/pages/docs/common/box/ExerciseBox";
import HintBox from "../../components/pages/docs/common/box/HintBox";
import WarningBox from "../../components/pages/docs/common/box/WarningBox";
import CustomBox from "../../components/pages/docs/common/box/CustomBox";
import { ImageBox } from "../../components/pages/docs/common/box/explanation-box/ImageExplanationBox";
import { VideoBox } from "../../components/pages/docs/common/box/explanation-box/VideoExplanationBox";
import { GraphExplanationBox } from "../../components/pages/docs/common/box/explanation-box/GraphExplanationBox";
import { ThreeDExplanationBox } from "../../components/pages/docs/common/box/explanation-box/3DExplanationBox";

import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import ThreeDBox from "../../components/pages/docs/common/box/3DBox";
import GraphBox from "../../components/pages/docs/common/box/GraphBox";
import { Stars, Box as ThreeBox } from "@react-three/drei";
import { Box, BookOpen, Code, Palette, Image, Video, BarChart3 } from "lucide-react";
import ExamQuestionBox from "@components/pages/docs/common/box/ExamQuestionBox";

// ===== COMPONENT DOCUMENTATION =====

export default function BoxesDocumentation() {
    return (
        <div className="mt-20 p-5 max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">📦 Box Components Documentation</h1>
                <p className="text-xl text-gray-600">Complete guide to all educational box components used in the curriculum</p>
            </div>

            {/* Basic Boxes Section */}
            <section className="mb-16 bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-8">
                    <BookOpen className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Basic Content Boxes</h2>
                </div>
                <p className="text-gray-600 mb-8">These are the fundamental content boxes used for presenting educational material in a structured way.</p>

                {/* Definition Box */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">DefinitionBox</h3>
                    <p className="text-gray-600 mb-4">Used to define and explain core mathematical concepts with clear, concise language.</p>
                    <DefinitionBox
                        title="លីមីត (Limit) - និយមន័យ"
                        content="លីមីតគឺជាតម្លៃដែលអនុគមន៍ខិតទៅរក នៅពេលដែលអថេរឯករាជ្យខិតទៅរកតម្លៃជាក់លាក់មួយ។ និយាយឱ្យសាមញ្ញ វាគឺជាតម្លៃដែលអនុគមន៍ 'ព្យាយាម' ឈានទៅដល់។"
                    />
                </div>

                {/* Tip Box */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">TipBox</h3>
                    <p className="text-gray-600 mb-4">Provides helpful tips, strategies, and best practices for solving problems.</p>
                    <TipBox
                        title="គន្លឹះសំខាន់ៗសម្រាប់ការគណនាលីមីត"
                        content={[
                            "តែងតែពិនិត្យមើលទម្រង់មុនពេលវាយតម្លៃ។",
                            "ប្រើកត្តាលេខភាគជាមុនសិន ប្រសិនបើអាចធ្វើបាន។",
                            "ចាំថាលីមីតមិនតែងតែស្មើនឹងតម្លៃនៃអនុគមន៍នោះទេ។",
                            "ប្រើក្រាបដើម្បីយល់ដឹងពីឥរិយាបថអនុគមន៍។"
                        ]}
                    />
                </div>

                {/* Example Box */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">ExampleBox</h3>
                    <p className="text-gray-600 mb-4">Shows step-by-step worked examples with mathematical notation using KaTeX.</p>
                    <ExampleBox
                        question={
                            <div className="flex items-center gap-4">
                                <p>រកលីមីតៈ</p>
                                <BlockMath math="\lim_{x \to 2} \frac{x^2 - 4}{x - 2}" />
                            </div>
                        }
                        steps={[
                            {
                                title: "ពិនិត្យមើលទម្រង់",
                                content: <div>
                                    នៅ <InlineMath math="x = 2" /><br />
                                    ភាគយក = <InlineMath math="2^2 - 4 = 0" /><br />
                                    ភាគបែង = <InlineMath math="2 - 2 = 0" /><br />
                                    ដូច្នេះយើងមានទម្រង់ <InlineMath math="0/0" />
                                </div>
                            },
                            {
                                title: "កត្តាលេខភាគ",
                                content: <div>
                                    <InlineMath math="x^2 - 4 = (x + 2)(x - 2)" /><br /><br />
                                    ដូច្នេះ <InlineMath math="\frac{x^2 - 4}{x - 2} = \frac{(x + 2)(x - 2)}{x - 2} = x + 2" />
                                </div>
                            },
                            {
                                title: "វាយតម្លៃលីមីត",
                                content: <div>
                                    <InlineMath math="\lim_{x \to 2} (x + 2) = 2 + 2 = 4" /><br /><br />
                                    ដូច្នេះ <InlineMath math="\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4" />
                                </div>
                            }
                        ]}
                        answer="លីមីតគឺ 4"
                    />
                </div>

                {/* Exercise Box */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">ExerciseBox</h3>
                    <p className="text-gray-600 mb-4">Interactive practice questions with multiple choice answers for student engagement.</p>
                    <ExerciseBox
                        questions={[
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
                        ]}
                    />
                </div>

                {/* Hint Box */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">HintBox</h3>
                    <p className="text-gray-600 mb-4">Provides additional guidance and hints to help students understand concepts better.</p>
                    <HintBox
                        content="💡 ពេលជួបប្រទះលីមីត ០/០ តែងតែចាំថា៖ ១) ព្យាយាមកត្តាលេខភាគជាមុន ២) ស្វែងរកកត្តារួមរវាងភាគយកនិងភាគបែង ៣) ប្រើអត្តសញ្ញាណិកដើម្បីធ្វើឱ្យសាមញ្ញ ៤) ប្រសិនបើអស់វិធី ប្រើច្បាប់ L'Hôpital។"
                    />
                </div>

                {/* Warning Box */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">WarningBox</h3>
                    <p className="text-gray-600 mb-4">Highlights common mistakes and important cautions that students should be aware of.</p>
                    <WarningBox
                        content="⚠️ កុំច្រឡំរវាងលីមីត ០/០ ជាមួយនឹងការចែកដោយសូន្យ។ លីមីត ០/០ គឺជាទម្រង់មិនកំណត់ដែលអាចដោះស្រាយបាន ខណៈពេលដែលការចែកដោយសូន្យគឺជាប្រតិបត្តិការដែលមិនកំណត់។ កុំព្យាយាមជំនួសតម្លៃដោយផ្ទាល់ក្នុងលីមីត ០/០។"
                    />
                </div>

                {/* Custom Box */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">CustomBox</h3>
                    <p className="text-gray-600 mb-4">Highly customizable box with custom colors, icons, and styling for special content.</p>
                    <CustomBox
                        title="ការបង្ហាញ CustomBox"
                        content="នេះគឺជាការបង្ហាញនៃ CustomBox ដែលអាចប្រើសម្រាប់អត្ថបទផ្សេងៗ។ អ្នកអាចកំណត់ពណ៌ រូបភាព និងអត្ថបទផ្សេងៗបាន។ ឧទាហរណ៍នេះប្រើពណ៌ស្វាលី និងរូបភាព Box icon។"
                        titleIcon={Box}
                        backgroundColor="bg-purple-50"
                        borderColor="border-purple-600"
                        titleColor="text-purple-800"
                        iconColor="text-purple-600"
                        contentColor="text-purple-700"
                    />
                </div>
            </section>

            {/* Wrapper Boxes Section */}
            <section className="mb-16 bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-8">
                    <Code className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Wrapper Content Boxes</h2>
                </div>
                <p className="text-gray-600 mb-8">These boxes wrap specific types of content (3D, graphs) with additional context and explanations.</p>

                {/* 3D Box */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">ThreeDBox</h3>
                    <p className="text-gray-600 mb-4">Displays 3D content (GLB models or custom React Three Fiber components) with a title and description.</p>
                    <ThreeDBox
                        src="/test.glb"
                        title="រូបភាព 3D ជាមួយ Model URL"
                        content="ក្រាបនេះបង្ហាញពីរបៀបដែលអនុគមន៍ f(x) = (x² - 4)/(x - 2) មានរន្ធ (hole) នៅ x = 2។ ទោះបីអនុគមន៍មិនកំណត់នៅ x = 2 ក៏ដោយ លីមីតរបស់វាមានតម្លៃ 4។"
                        scale={1}
                        target={[6, 0, 0]}
                        canvasBackground={<Stars radius={100} depth={50} count={5000} factor={4} fade />}
                        canvasBackgroundColor="black"
                        threeDText={[
                            { content: "driver", position: [13.3, 3, 3], rotation: [0, 0, 0] },
                            { content: "passenger", position: [10.3, 3, 3], rotation: [0, 0, 0] },
                        ]}
                    />
                </div>

                {/* Graph Box */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">GraphBox</h3>
                    <p className="text-gray-600 mb-4">Renders mathematical graphs using Desmos calculator with LaTeX expressions.</p>
                    <GraphBox
                        expressions={[
                            { id: '1', latex: 'f(x)=\\frac{x^2 - 4}{x - 2}', color: '#c00' },
                            { id: '2', latex: 'g(x)=x+2', color: '#00c' },
                        ]}
                    />
                </div>
            </section>

            {/* Explanation Boxes Section */}
            <section className="mb-16 bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-8">
                    <Palette className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Explanation Boxes</h2>
                </div>
                <p className="text-gray-600 mb-8">These boxes have a two-column layout: content on the left and explanation on the right. They are responsive and collapse to single column on mobile.</p>

                {/* Image Explanation Box */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">ImageExplanationBox</h3>
                    <p className="text-gray-600 mb-4">Displays an image with detailed explanation text. Perfect for visual learning and concept illustration.</p>
                    <ImageBox
                        src="/angkor.jpg"
                        imageAlt="ក្រាបលីមីត ០/០"
                        explanation="ក្រាបនេះបង្ហាញពីរបៀបដែលអនុគមន៍ f(x) = (x² - 4)/(x - 2) មានរន្ធ (hole) នៅ x = 2។ ទោះបីអនុគមន៍មិនកំណត់នៅ x = 2 ក៏ដោយ លីមីតរបស់វាមានតម្លៃ 4។ រូបភាពនេះជួយឱ្យយើងយល់ពីគោលគំនិតនៃលីមីតដែលមានរន្ធ។"
                    />
                </div>

                {/* Video Explanation Box */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">VideoExplanationBox</h3>
                    <p className="text-gray-600 mb-4">Shows a video with custom controls and detailed explanation. Uses our custom VideoPlayer component.</p>
                    <VideoBox
                        src="/test.mp4"
                        videoTitle="វីដេអូពន្យល់លីមីត ០/០"
                        explanation="វីដេអូនេះពន្យល់ពីរបៀបដោះស្រាយលីមីត ០/០ ដោយប្រើកត្តាលេខភាគ និងច្បាប់ L'Hôpital។ វីដេអូបង្ហាញពីវិធីសាស្ត្រជាក់លាក់ និងឧទាហរណ៍ជាច្រើនដើម្បីជួយឱ្យអ្នកយល់គោលគំនិតនេះបានល្អជាង។"
                    />
                </div>

                {/* Graph Explanation Box */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">GraphExplanationBox</h3>
                    <p className="text-gray-600 mb-4">Combines interactive Desmos graphs with detailed mathematical explanations.</p>
                    <GraphExplanationBox
                        expressions={[
                            { id: '1', latex: 'f(x)=\\frac{x^2 - 4}{x - 2}', color: '#3B82F6' },
                            { id: '2', latex: 'g(x)=x+2', color: '#EF4444' },
                            { id: '3', latex: 'x=2', color: '#10B981' }
                        ]}
                        explanation="ក្រាបនេះបង្ហាញពីអនុគមន៍ f(x) = (x² - 4)/(x - 2) និង g(x) = x + 2។ អ្នកអាចឃើញថាទោះបី f(x) មានរន្ធនៅ x = 2 ក៏ដោយ លីមីតរបស់វាស្មើនឹងតម្លៃនៃ g(x) នៅ x = 2 ដែលគឺ 4។ បន្ទាត់បញ្ឈរ x = 2 បង្ហាញពីចំណុចដែលអនុគមន៍មិនកំណត់។"
                    />
                </div>

                {/* 3D Explanation Box */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">ThreeDExplanationBox</h3>
                    <p className="text-gray-600 mb-4">Shows 3D content with detailed explanation. Can display GLB models or custom React Three Fiber components.</p>
                    <ThreeDExplanationBox
                        src={(
                            <>
                                <ThreeBox args={[2, 2, 2]} position={[-2, 0, 0]}>
                                    <meshStandardMaterial color="#3B82F6" />
                                </ThreeBox>
                                <ThreeBox args={[2, 2, 2]} position={[2, 0, 0]}>
                                    <meshStandardMaterial color="#EF4444" />
                                </ThreeBox>
                                <ThreeBox args={[2, 2, 2]} position={[0, 2, 0]}>
                                    <meshStandardMaterial color="#10B981" />
                                </ThreeBox>
                                <ThreeBox args={[2, 2, 2]} position={[0, -2, 0]}>
                                    <meshStandardMaterial color="#F59E0B" />
                                </ThreeBox>
                            </>
                        )}
                        explanation="រូបភាព 3D នេះបង្ហាញពីគោលគំនិតនៃលីមីត ០/០ តាមរយៈរូបភាពធរណីមាត្រ។ គូបទាំងបួនតំណាងឱ្យចំណុចផ្សេងៗនៅក្នុងលំហ ដែលជួបគ្នានៅចំណុចកណ្តាល។ នេះជួយឱ្យយើងយល់ពីរបៀបដែលអនុគមន៍ខិតទៅរកតម្លៃជាក់លាក់មួយ។"
                    />
                </div>
            </section>

            {/* Content Flexibility Section */}
            <section className="mb-16 bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-8">
                    <Code className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Content Flexibility</h2>
                </div>

                <div className="bg-gray-50 rounded-xl p-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Multiple Content Types Support</h3>
                    <p className="text-gray-600 mb-6">All box components support multiple content types for maximum flexibility:</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg border">
                            <h4 className="text-lg font-semibold text-gray-700 mb-3">📝 String Content</h4>
                            <code className="bg-gray-100 p-2 rounded block text-sm">
                                content: &quot;Simple text content&quot;;
                            </code>
                        </div>

                        <div className="bg-white p-4 rounded-lg border">
                            <h4 className="text-lg font-semibold text-gray-700 mb-3">📋 Array Content</h4>
                            <code className="bg-gray-100 p-2 rounded block text-sm">
                                content: [&quot;Point 1&quot;, &quot;Point 2&quot;, &quot;Point 3&quot;];
                            </code>
                            <p className="text-xs text-gray-500 mt-2">Auto-converts to bullet list</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg border">
                            <h4 className="text-lg font-semibold text-gray-700 mb-3">⚛️ ReactNode Content</h4>
                            <code className="bg-gray-100 p-2 rounded block text-sm">
                                content: &lt;CustomComponent /&gt;
                            </code>
                            <p className="text-xs text-gray-500 mt-2">Full customization!</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* KaTeX Integration Section */}
            <section className="mb-16 bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-8">
                    <BarChart3 className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-3xl font-bold text-gray-900">KaTeX Mathematical Expressions</h2>
                </div>

                <div className="bg-gray-50 rounded-xl p-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Beautiful Mathematical Notation</h3>
                    <p className="text-gray-600 mb-6">All components support KaTeX for rendering mathematical expressions with proper syntax highlighting.</p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-700 mb-4">📐 Basic Math</h4>
                            <div className="space-y-3">
                                <div className="bg-white p-3 rounded border">
                                    <p className="text-sm text-gray-600 mb-1">Fractions:</p>
                                    <p className="text-xs text-gray-500 mb-1">{`Syntax: \\frac{a}{b}`}</p>
                                    <InlineMath math="\frac{a}{b}" />
                                </div>
                                <div className="bg-white p-3 rounded border">
                                    <p className="text-sm text-gray-600 mb-1">Powers & Roots:</p>
                                    <p className="text-xs text-gray-500 mb-1">{`Syntax: x^2 + \\sqrt{y}`}</p>
                                    <InlineMath math="x^2 + \sqrt{y}" />
                                </div>
                                <div className="bg-white p-3 rounded border">
                                    <p className="text-sm text-gray-600 mb-1">Limits:</p>
                                    <p className="text-xs text-gray-500 mb-1">{`Syntax: \\lim_{x \\to 2} \\frac{x ^ 2 - 4}{x - 2}`}</p>
                                    <InlineMath math="\lim_{x \to 2} \frac{x^2 - 4}{x - 2}" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-700 mb-4">🧮 Advanced Math</h4>
                            <div className="space-y-3">
                                <div className="bg-white p-3 rounded border">
                                    <p className="text-sm text-gray-600 mb-1">Integrals:</p>
                                    <p className="text-xs text-gray-500 mb-1">{`Syntax: \\int_{a}^{b} f(x) dx`}</p>
                                    <InlineMath math="\int_{a}^{b} f(x) dx" />
                                </div>
                                <div className="bg-white p-3 rounded border">
                                    <p className="text-sm text-gray-600 mb-1">Matrices:</p>
                                    <p className="text-xs text-gray-500 mb-1">{`Syntax: \\begin{pmatrix} a & b \\ c & d \\end{pmatrix}`}</p>
                                    <InlineMath math="\begin{pmatrix} a & b \\ c & d \end{pmatrix}" />
                                </div>
                                <div className="bg-white p-3 rounded border">
                                    <p className="text-sm text-gray-600 mb-1">Systems:</p>
                                    <p className="text-xs text-gray-500 mb-1">{`Syntax: \\begin{cases} x + y = 2 \\ 2x - y = 1 \\end{cases}`}</p>
                                    <InlineMath math="\begin{cases} x + y = 2 \\ 2x - y = 1 \end{cases}" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic Component Pattern Section */}
            <section className="mb-16 bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-8">
                    <BookOpen className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Topic Component Pattern</h2>
                </div>

                <div className="bg-gray-50 rounded-xl p-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Consistent Development Pattern</h3>
                    <p className="text-gray-600 mb-6">Every topic component follows this consistent pattern for maintainability and flexibility:</p>

                    <div className="bg-white p-6 rounded-lg border">
                        <h4 className="text-lg font-semibold text-gray-700 mb-4">📋 TopicContent Interface</h4>
                        <div className="bg-gray-100 p-4 rounded block text-sm overflow-x-auto">
                            <p>interface TopicContent</p>
                            <div className="ml-4">

                                <p>  definition?: DefinitionBoxProps;</p>
                                <p>  tip?: TipBoxProps;</p>
                                <p>  example?: ExampleBoxProps;</p>
                                <p>  exercise?: ExerciseBoxProps;</p>
                                <p>  hint?: HintBoxProps;</p>
                                <p>  warning?: WarningBoxProps;</p>
                                <p>  custom?: CustomBoxProps;</p>
                                <p>  threeD?: ThreeDBoxProps;</p>
                                <p>  graph?: GraphBoxProps;</p>
                                <p>  imageExplanation?: ImageBoxProps;</p>
                                <p>  videoExplanation?: VideoBoxProps;</p>
                                <p>  graphExplanation?: GraphExplanationBoxProps;</p>
                                <p>  threeDExplanation?: ThreeDExplanationBoxProps;</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-white p-6 rounded-lg border">
                        <h4 className="text-lg font-semibold text-gray-700 mb-4">🎯 Conditional Rendering Pattern</h4>
                        <pre className="bg-gray-100 p-4 rounded block text-sm overflow-x-auto">
                            {`export default function MyTopic() {
  return (
    <>
      {TOPIC_CONTENT.definition && (
        <DefinitionBox 
          title={TOPIC_CONTENT.definition.title} 
          content={TOPIC_CONTENT.definition.content} 
        />
      )}
      {TOPIC_CONTENT.example && (
        <ExampleBox 
          question={TOPIC_CONTENT.example.question} 
          steps={TOPIC_CONTENT.example.steps} 
          answer={TOPIC_CONTENT.example.answer} 
        />
      )}
      {/* ... more conditional renders */}
    </>
  );
}`}
                        </pre>
                    </div>
                </div>
            </section>

            {/* Usage Guidelines */}
            <section className="mb-16 bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-8">
                    <Code className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Usage Guidelines</h2>
                </div>

                <div className="bg-gray-50 rounded-xl p-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">When to Use Each Component</h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-700 mb-3">📝 Content Structure</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Use <code className="bg-gray-200 px-2 py-1 rounded">DefinitionBox</code> for core concepts</li>
                                <li>• Use <code className="bg-gray-200 px-2 py-1 rounded">ExampleBox</code> for step-by-step solutions</li>
                                <li>• Use <code className="bg-gray-200 px-2 py-1 rounded">ExerciseBox</code> for interactive practice</li>
                                <li>• Use <code className="bg-gray-200 px-2 py-1 rounded">TipBox</code> for helpful strategies</li>
                                <li>• Use <code className="bg-gray-200 px-2 py-1 rounded">WarningBox</code> for common mistakes</li>
                                <li>• Use <code className="bg-gray-200 px-2 py-1 rounded">HintBox</code> for additional guidance</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-700 mb-3">🎨 Visual Content</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Use <code className="bg-gray-200 px-2 py-1 rounded">ImageBox</code> for static images</li>
                                <li>• Use <code className="bg-gray-200 px-2 py-1 rounded">VideoBox</code> for video content</li>
                                <li>• Use <code className="bg-gray-200 px-2 py-1 rounded">GraphBox</code> for mathematical graphs</li>
                                <li>• Use <code className="bg-gray-200 px-2 py-1 rounded">ThreeDBox</code> for 3D models</li>
                                <li>• Use <code className="bg-gray-200 px-2 py-1 rounded">CustomBox</code> for special styling</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <h4 className="text-lg font-semibold text-blue-800 mb-2">💡 Pro Tips</h4>
                        <ul className="text-blue-700 space-y-1">
                            <li>• All components support Khmer text and mathematical notation</li>
                            <li>• Use KaTeX for mathematical expressions: <InlineMath math="\frac{x^2 - 4}{x - 2}" /></li>
                            <li>• Explanation boxes are responsive and work on all devices</li>
                            <li>• 3D components support both GLB files and custom React Three Fiber content</li>
                            <li>• All components are fully typed with TypeScript interfaces</li>
                            <li>• Use conditional rendering to show only relevant content sections</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Technical Architecture */}
            <section className="mb-16 bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-8">
                    <Code className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Technical Architecture</h2>
                </div>

                <div className="bg-gray-50 rounded-xl p-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">System Overview</h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-700 mb-4">🏗️ File Structure</h4>
                            <div className="bg-white p-4 rounded-lg border">
                                <ul className="space-y-2 text-sm">
                                    <li><code className="bg-gray-100 px-2 py-1 rounded">src/components/pages/docs/common/box/</code> - All box components</li>
                                    <li><code className="bg-gray-100 px-2 py-1 rounded">src/types/topic.ts</code> - TypeScript interfaces</li>
                                    <li><code className="bg-gray-100 px-2 py-1 rounded">src/types/threeD.ts</code> - 3D component types</li>
                                    <li><code className="bg-gray-100 px-2 py-1 rounded">src/curriculum/</code> - Curriculum data structure</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-700 mb-4">🔧 Technologies Used</h4>
                            <div className="bg-white p-4 rounded-lg border">
                                <ul className="space-y-2 text-sm">
                                    <li><strong>React Three Fiber</strong> - 3D rendering</li>
                                    <li><strong>Desmos</strong> - Mathematical graphs</li>
                                    <li><strong>KaTeX</strong> - Mathematical notation</li>
                                    <li><strong>TypeScript</strong> - Type safety</li>
                                    <li><strong>Tailwind CSS</strong> - Styling</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-white p-6 rounded-lg border">
                        <h4 className="text-lg font-semibold text-gray-700 mb-4">📚 Curriculum Hierarchy</h4>
                        <p className="text-gray-600 mb-4">The system follows a hierarchical structure: <strong>Grade → Subject → Lesson → Topic</strong></p>
                        <p >interface Grade </p >
                        <p className="ml-4 bg-gray-100">grade: string; // &quot;grade-12&quot;</p>
                        <p className="ml-4 bg-gray-100">gradeKhmer: string; // &quot;ថ្នាក់ទី១២&quot;</p>
                        <p className="ml-4 bg-gray-100">content: Content[]; // Subjects</p>
                        <p>interface Content </p>
                        <p className="ml-4 bg-gray-100">subject: string; // &quot;math&quot;</p>
                        <p className="ml-4 bg-gray-100">title: string; // &quot;គណិតវិទ្យា&quot;</p>
                        <p className="ml-4 bg-gray-100">lessons: Lesson[]; // Lessons</p>
                        <p>interface Lesson </p>
                        <p className="ml-4 bg-gray-100">lesson: string; // &quot;limits&quot;</p>
                        <p className="ml-4 bg-gray-100">title: string; // &quot;លីមីត&quot;</p>
                        <p className="ml-4 bg-gray-100">topics: Topic[]; // Topics</p>
                        <p>interface Topic </p>
                        <p className="ml-4 bg-gray-100">title: string; // &quot;លីមីត ០/០&quot;</p>
                        <p className="ml-4 bg-gray-100">component: React.Component; // The actual topic component!</p>
                    </div>
                </div>
            </section >
        </div >
    );
}