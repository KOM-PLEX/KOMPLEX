import DefinitionBox from "../../common/box/DefinitionBox"
import TipBox from "../../common/box/TipBox"
import HintBox from "../../common/box/HintBox"
import { TopicContent } from "@/types/topic"
import { BlockMath, InlineMath } from "react-katex"
import GraphBox from "../../common/box/GraphBox"
import ThreeDBox from "../../common/box/3DBox"
import Graph from "../../common/box/Graph"
import 'katex/dist/katex.min.css'
import { ImageBox } from "../../common/box/ImageBox"
import WarningBox from "../../common/box/WarningBox"
import ExerciseBox from "../../common/box/ExerciseBox"
import ExampleBox from "../../common/box/ExampleBox"
import { div } from "three/tsl"




const FirstTopicContent: TopicContent = {
    definition: {
        title: "សមីការអូម៉ូសែន",
        content: "សមីការឌីផែរ៉ង់ស្សែលលីនេអែអូម៉ូសែនលំដាប់ទី1មានមេគុណថេរគឺគ្រប់សមីការដែលមានទម្រង់ y' - ay = 0 ,a ជាចំនួនថេរ​។"
    },
    tip: {
      title: "ជាទូទៅ",
      content: (
          <>
            <p>
              សមីការឌីផែរ៉ង់ស្សែល <InlineMath math="y' - ay = 0" /> មានចម្លើយទូទៅដូចខាងក្រោម៖
            </p>
            <BlockMath math="y = Ke^{ax}" />
            <p>ដែល <InlineMath math="K \in \mathbb{R}" /> ហើយ <InlineMath math="a" /> ជាចំនួនថេរ។</p>
          </>
      ),
      
    },
    example: {
        question:
          <>
            <div className="flex flex-col items-start gap-3">
              <div className="flex flex-col gap-3">
                  <p>ដោះស្រាយសមីការឌីផែរ៉ង់ស្សែល</p>
                  <div className="flex items-center gap-5 flex-wrap">
                        <div className="flex items-center gap-2">
                            1. <BlockMath math="y' - 6y = 0" />
                        </div>
                        <div className="flex items-center gap-2">
                            2. <BlockMath math="\sqrt{5}y' - 4y = 0" />
                        </div>
                  </div>
              </div>
            </div>
          </>,
        steps: [
            {
                title: "ដោះស្រាយសមីការទី១",
                content: <div>
                    <BlockMath math="y' - 6y = 0" /><br />
                    <p>យើងអាចសរសេរឡើងវិញដោយ</p>
                    <BlockMath math="y' = 6y" /><br />
                    <p>ដោះស្រាយសមីការនេះយើងទទួលបាន</p>
                    <BlockMath math="y = Ke^{6x}" />
                </div>
            },
            {
                title: "ដោះស្រាយសមីការទី២",
                content: <div>
                    <BlockMath math="\sqrt{5}y' - 4y = 0" /><br />
                    <p>យើងអាចសរសេរឡើងវិញដោយ</p>
                    <BlockMath math="y' = \frac{4}{\sqrt{5}}y" /><br />
                    <p>ដោះស្រាយសមីការនេះយើងទទួលបាន</p>
                    <BlockMath math="y = Ke^{\frac{4}{\sqrt{5}}x}" />
                </div>
            },
        ],
        answer: (
          <div>
                <div className="justify-center items-center flex flex-col">
                  <p><InlineMath math="y = Ke^{6x}" /></p>
                  <p><InlineMath math="y = Ke^{\frac{4}{\sqrt{5}}x}" /></p>
                </div>
                  <p>ដែល​ k ជាចំនួនថេរ។</p>
          </div>
                
        )
    },
    exercise: {
      questions: [
        {
          id: "q1",
          question: (
              <>
                <div className="flex flex-col gap-3">
                    <p>ដោះស្រាយសមីការ</p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                       <InlineMath math={"y' - 3y = 0"} />
                    </div>
                </div>  
              </>
          ),
          options: [
            <InlineMath math={"y = 3Ke^{-x}"} />,
            <InlineMath math={"y = Ke^{3x}"} />,
            <InlineMath math={"y = Ke^{-3x}"} />,
            <InlineMath math={"y = 3Ke^{x}"} />
          ],
          correctAnswer: 1
        },
        {
          id: "q2",
          question: (
              <>
                <div className="flex flex-col gap-3">
                    <p>ដោះស្រាយសមីការ</p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                       <InlineMath math={"y' + 5y = 0"} />
                    </div>
                </div>  
              </>
          ),
          options: [
            <InlineMath math={"y = Ke^{-5x}"} />,
            <InlineMath math={"y = Ke^{5x}"} />,
            <InlineMath math={"y = 5Ke^{x}"} />,
            <InlineMath math={"y = 5Ke^{-x}"} />
        ],
          correctAnswer: 2
        },
        {
          id: "q3",
          question: (
              <>
                <div className="flex flex-col gap-3">
                    <p>ដោះស្រាយសមីការ</p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                       <InlineMath math={"\\sqrt{2}y' - 2y = 0"} />
                    </div>
                </div>  
              </>
          ),
          options: [
            <InlineMath math={"y = \\frac{2}{\\sqrt{2}}Ke^{-x}"} />,
            <InlineMath math={"y = Ke^{-\\frac{2}{\\sqrt{2}}x}"} />,
            <InlineMath math={"y = Ke^{\\frac{2}{\\sqrt{2}}x}"} />,
            <InlineMath math={"y = \\frac{2}{\\sqrt{2}}Ke^{x}"} />
          ],
          correctAnswer: 2
        },
        {
          id: "q4",
          question: (
              <>
                <div className="flex flex-col gap-3">
                    <p>ដោះស្រាយសមីការ</p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                       <InlineMath math={"y' - 5y = 0"} />
                    </div>
                </div>  
              </>
          ),
          options: [
            <InlineMath math={"y = Ke^{-5x}"} />,
            <InlineMath math={"y = Ke^{5x}"} />,
            <InlineMath math={"y = 5Ke^{x}"} />,
            <InlineMath math={"y = 5Ke^{-x}"} />
          ],
          correctAnswer: 1
        }
      ]
    },

    hint: {
        content: 
        <>
          <p>
            ចូរចំណាំថា សមីការទាំងអស់មានទម្រង់ <InlineMath math={"y' - ay = 0"} /> ហើយអាចសរសេរឡើងវិញជា <InlineMath math={"y' = ay"} /> ដើម្បីដោះស្រាយ។
          </p>
          <p>
            ចម្លើយទូទៅមានទម្រង់ <InlineMath math={"y = Ke^{ax}"} /> ដែល <InlineMath math={"K"} /> ជាចំនួនថេរ។
          </p>
        </>,
    },
    warning: {
        content: 
        <>
          <p>
            សូមប្រុងប្រយ័ត្ន ចំពោះសញ្ញា <InlineMath math={"a"} /> ត្រូវតែត្រឹមត្រូវ ដូចជាសមីការ <InlineMath math={"y' + 5y = 0"} /> គឺ <InlineMath math={"a = -5"} />, មិនមែន 5 ទេ។
          </p>
          <p>
            កុំភ្លេចបញ្ចូលចំនួនថេរ <InlineMath math={"K"} /> នៅក្នុងចម្លើយទូទៅផងដែរ។
          </p>
        </>
    },
}



const SecondTopicContent: TopicContent = {
    definition: {
        title: "សមីការមិនអូម៉ូសែន",
        content: (
          <>
            សមីការឌីផែរ៉ង់ស្សែលលីនេអែមិនអូម៉ូសែនលំដាប់ទី១មានមេគុណថេរគឺគ្រប់សមីការដែលមានទម្រង់ 
            <InlineMath math={"y' + ay = P(x) \\quad (E)"} />, 
            ដែល P(x) ​ខុសពី 0
          </>
        )
    },
    tip: {
        title: "របៀបដោះស្រាយ",
        content: (
          <div className="flex flex-col gap-5 mt-4">

            <ul className="list-disc pl-3">
              <h3 className="font-bold flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                    របៀបទីមួយ
                </h3>
              <li>
                រកអនុគមន៍ចម្លើយទូទៅនៃសមីការ <InlineMath math={"y' + ay = 0"} /> ដែលតាងដោយអនុគមន៍ <InlineMath math={"y_c"} />
              </li>
              <li>
                រកអនុគមន៍ចម្លើយពិសេសនៃសមីការ <InlineMath math={"y' + ay = P(x)"} /> តាងដោយអនុគមន៍ <InlineMath math={"y_p"} />
              </li>
              <li>
                ចម្លើយទូទៅនៃសមីការ <InlineMath math={"y' + ay = P(x)"} /> គឺអនុគមន៍ដែល <InlineMath math={"y = y_c + y_p"} />
              </li>
            </ul>

            <ul className="list-disc pl-3">
              <h3 className="font-bold flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                    របៀបទីពីរ: (បម្រែបម្រួលចំនួនថេរ)
                </h3>
              <li>
                  ត្រូវរកចម្លើយទូទៅនៃសមីការ <InlineMath math={"y' - ay = 0"} /> ដែលតាងដោយ <InlineMath math={"y_c = Ke^{ax}"} />។
              </li>
              <li>
                ក្នុងចម្លើយទូទៅខាងលើនេះ យក K ជាអនុគមន៍នៃ x នោះចម្លើយនៃសមីការ <InlineMath math={"y' - ay = P(x)"} /> គឺ <InlineMath math={"y_c = K(x)e^{ax}"} />។
              </li>
              <li>
                គណនា <InlineMath math={"y'"} /> រួចយក <InlineMath math={"y"} /> និង <InlineMath math={"y'"} /> ទៅជំនួសក្នុងសមីការដើម ហើយទាញរក <InlineMath math={"K(x)"} />។
              </li>
            </ul>
            
          </div>
        )
    },      

    example: {
        question:
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-col  w-full">
                <p>ដោះស្រាយសមីការឌីផែរ៉ង់ស្សែលតាមរបៀបទីមួយ</p>
                <div className="flex items-center gap-10  justify-center w-full">
                    <BlockMath math="y' - 3y = 6" />
                </div>
            </div>
          </div>,
        steps: [
            {
                title: "រកចម្លើយទូទៅនៃសមីការអូម៉ូសែន y' - 3y = 0",
                content: 
                <div>
                  <div className="flex flex-col">
                      <BlockMath math="y' - 3y = ០" />
                      <BlockMath math="\Rightarrow y_c = Ke^{3x}" />
                  </div>
                    
                    <div className="flex items-center gap-3">
                        <p>គេបាន: ចម្លើយទូទៅនៃសមីការគឺ</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <BlockMath math="y_c = Ke^{3x}" />
                        <p>, k ជាចំនួនថេរ។</p>
                    </div>

                </div>
            },
            {
                title: "រកចម្លើយពិសេសនៃសមីការ (E)",
                content: <div>
                    
                    <div className="flex items-start sm:items-center gap-1 sm:gap-5 flex-col sm:flex-row ">
                      <p>តាង :</p>
                      <div className="flex items-center gap-5">
                          <BlockMath math="y_p = a" />
                          <p>ជាចម្លេីយពិសេសនៃសមីការ (E)</p>
                      </div>
                      
                    </div>
                    <div className="flex items-center gap-5">
                      <p>នាំឲ្យ</p>
                      <BlockMath math=" y_p' = 0" />
                    </div>
                    <div className="flex items-start sm:items-center gap-1 sm:gap-5 flex-col sm:flex-row">
                      <p>គេបាន : </p>
                      <div className="flex items-center gap-3">
                          <BlockMath math=" y_p' - 3y_p = 6" />
                          <BlockMath math="\Leftrightarrow" />
                          <BlockMath math="0 - 3a = 6" />
                      </div>
                      
                    </div>
                    <div className="flex items-center gap-5">
                      <p>នាំឲ្យ : </p>
                      <BlockMath math="a = -2" />
                    </div>
                    <div className="flex items-start sm:items-center gap-1 sm:gap-5 flex-col sm:flex-row">
                      <p>គេបាន : ចម្លេីយពិសេសនៃសមីការ (E) គឺ </p>
                      <div className="flex items-center">
                          <BlockMath math="y_p = -2" />
                      </div>
                    </div>
                </div>
            },
          ],
        answer: (
                <div>
                  <div className="flex items-start  gap-1 sm:gap-5 flex-col">
                      <p>ចម្លើយទូទៅនៃសមីការ (E) គឺ</p>
                      <div className="flex flex-col w-full ">
                        <BlockMath math="y = y_c + y_p" />
                        <BlockMath math="\Rightarrow y = Ke^{3x} - 2" />
                      </div>
                      <p>ដែល​ k ជាចំនួនថេរ។</p>
                  </div>
                  
                </div>
        ),
    },
    example2: {
        question:
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-col  w-full">
                <p>ដោះស្រាយសមីការឌីផែរ៉ង់ស្សែលតាមរបៀបទីពីរ</p>
                <div className="flex items-center gap-10  justify-center w-full">
                    <BlockMath math="y' - 3y = 6" />
                </div>
            </div>
          </div>,
        steps: [
            {
                title: "រកចម្លើយទូទៅនៃសមីការអូម៉ូសែន y' - 3y = 0",
                content: <div>
                    <BlockMath math="y' - 3y = ០" /><br />
                    <BlockMath math="\Rightarrow y_c = Ke^{3x}" />
                    <div className="flex items-start sm:items-center gap-1 sm:gap-5 flex-col sm:flex-row">
                        <p>គេបាន:</p>
                        <div className="flex justify-center w-full items-center gap-3">
                            <BlockMath math="y_c = Ke^{3x}" />
                            <p>, k ជាចំនួនថេរ។</p>
                        </div>
                        
                    </div>
                </div>
            },
            {
                title: "",
                content: <div>
                    <div className="flex items-start sm:items-center gap-1 sm:gap-5 flex-col sm:flex-row">
                      <p>តាង :</p>
                      <div className="flex items-center gap-2">
                          <BlockMath math="y = K(x)e^{3x}" />
                          <p>, K ជាចម្លេីយទូទៅនៃ (E)</p>
                      </div>
                      
                    </div>
                    <div className="flex items-start sm:items-center gap-1 sm:gap-5 flex-col sm:flex-row">
                      <p>គេបាន</p>
                      <div className="flex w-full justify-center items-center ">
                          <BlockMath math=" y' = K'(x)e^{3x} + 3K(x)e^{3x}" />
                      </div>
                    </div>
                    <div className="flex items-start sm:items-center gap-1 sm:gap-5 flex-col sm:flex-row">
                      <p>យក : </p>
                      <div className="flex items-center gap-3">
                          <BlockMath math="y , y'" />
                          <p>ជំនួសក្នុងសមីការ</p>
                          <BlockMath math="y' - 3y = 6 " />
                      </div>                      
                      <p>គេបាន :</p>
                    </div>
                    <div className="flex items-start flex-wrap justify-center ">
                      <BlockMath math="[ K'(x)e^{3x} + 3K(x)e^{3x} ]" />
                      <BlockMath math="- 3K(x)e^{3x} = 6" />
                    </div>
                    <div className="flex items-center gap-5">
                      <BlockMath math="K'(x)e^{3x} = 6 " />
                      <BlockMath math="\Leftrightarrow K'(x) = 6e^{-3x}" />
                    </div>
                    <div className="flex items-center gap-5 justify-center">
                      <BlockMath math="\Rightarrow K(x) = \int 6e^{-3x} dx" />
                    </div>
                    <div className="flex items-center gap-5 justify-center">
                      <BlockMath math="\Rightarrow K(x)=  -2e^{-3x} + C" />
                    </div>
                    <div className="flex items-start sm:items-center sm:gap-3 flex-col sm:flex-row">
                      <p>គេបាន : ចម្លេីយនៃសមីការ</p>
                      <div className="flex items-center gap-2">
                          <BlockMath math="y' - 3y = 6 " />
                          <p>គឺ : </p>
                      </div>
                    </div>
                    <div className="flex items-start sm:items-center sm:gap-3 flex-col sm:flex-row">
                      <BlockMath math="y = ( -2e^{-3x} + C )e^{3x} = Ce^{3x} - 2" />
                      <div className="flex items-center gap-2 sm:flex-row flex-col">
                          <BlockMath math="\Rightarrow y = Ke^{3x} -2" />
                          <div className="flex items-center">
                              <BlockMath math=", C = K" />
                              <p>ជាចំនួនថេរ។</p>
                          </div>
                      </div>
                      
                    </div>


                </div>
            },
          ],
        answer: (
                <div>
                  <div className="flex items-start  gap-1 sm:gap-5 flex-col">
                      <p>ចម្លើយទូទៅនៃសមីការ (E) គឺ</p>
                      <div className=" w-full">
                          <BlockMath math="y = y_c + y_p" />
                          <BlockMath math="y = Ke^{3x} - 2" />
                      </div>                   
                  </div>
                  <p>ដែល​ k ជាចំនួនថេរ។</p>
                  
                </div>
        ),
    },
    exercise: {
        questions: [
          {
            id: "q1",
            question: (
              <>
                <div className="flex flex-col gap-3">
                    <p>ដោះស្រាយសមីការ</p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                       <InlineMath math={"y' - 3y = 6"} />
                    </div>
                </div>  
              </>
            ),
            options: [
              <InlineMath math={"y = Ce^{3x} + 2"} />,
              <InlineMath math={"y = Ce^{-3x} - 2"} />,
              <InlineMath math={"y = Ce^{3x} - 2"} />,
              <InlineMath math={"y = Ce^{-3x} + 2"} />,
            ],
            correctAnswer: 2,
          },
          {
            id: "q2",
            question: (
              <>
                <div className="flex flex-col gap-3">
                    <p>ដោះស្រាយសមីការ</p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                       <InlineMath math={"y' + 4y = 8"} />
                    </div>
                </div>  
              </>
            ),
            options: [
              <InlineMath math={"y = Ce^{-4x} + 2"} />,
              <InlineMath math={"y = Ce^{4x} - 2"} />,
              <InlineMath math={"y = Ce^{-4x} - 2"} />,
              <InlineMath math={"y = Ce^{4x} + 2"} />,
            ],
            correctAnswer: 0,
          },
          {
            id: "q3",
            question: (
              <>
                <div className="flex flex-col gap-3">
                    <p>ដោះស្រាយសមីការ</p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                       <InlineMath math={"y' - 2y = 10"} />
                    </div>
                </div>  
              </>
            ),
            options: [
              <InlineMath math={"y_p = -5"} />,
              <InlineMath math={"y_p = 5"} />,
              <InlineMath math={"y_p = 10"} />,
              <InlineMath math={"y_p = -10"} />,
            ],
            correctAnswer: 1,
          }
        ]
    },

    hint: {
      content: (
        <>
          <p>
            ចូរចងចាំថា សមីការមិនអូម៉ូសែនមានទម្រង់ <InlineMath math={"y' + ay = P(x)"} /> ដែល <InlineMath math={"P(x) \\neq 0"} />។
          </p>
          <p>
            ដើម្បីដោះស្រាយ អ្នកត្រូវរកចម្លើយទូទៅនៃសមីការអូម៉ូសែន <InlineMath math={"y_c"} /> និងចម្លើយពិសេស <InlineMath math={"y_p"} /> រួចបូកគ្នា។
          </p>
        </>
      ),
    },

    warning: {
      content: (
        <>
          <p>
            សូមយកចិត្តទុកដាក់ក្នុងការបញ្ចូលចំនួនថេរ <InlineMath math={"C"} /> ឬ <InlineMath math={"K"} /> ក្នុងចម្លើយទូទៅ។
          </p>
        </>
      ),
    },

}






const LDE1 = () => {
  return (
    <>
    <div>
          {FirstTopicContent.definition && (
              <DefinitionBox title={FirstTopicContent.definition.title} content={FirstTopicContent.definition.content} />
              )}
          {FirstTopicContent.tip && (
              <TipBox title={FirstTopicContent.tip.title} content={FirstTopicContent.tip.content} />
          )}

          {FirstTopicContent.example && (
              <ExampleBox question={FirstTopicContent.example.question} steps={FirstTopicContent.example.steps} answer={FirstTopicContent.example.answer} />
          )}
          {FirstTopicContent.exercise && (
            <ExerciseBox questions={FirstTopicContent.exercise.questions} />
          )}
          {FirstTopicContent.hint && (
              <HintBox content={FirstTopicContent.hint.content} />
          )}
          {FirstTopicContent.warning && (
              <WarningBox content={FirstTopicContent.warning.content} />
          )}
    </div>

    <div>
          {SecondTopicContent.definition && (
              <DefinitionBox title={SecondTopicContent.definition.title} content={SecondTopicContent.definition.content} />
          )}
          {SecondTopicContent.tip && (
              <TipBox title={SecondTopicContent.tip.title} content={SecondTopicContent.tip.content} />
          )}

          {SecondTopicContent.example && (
              <ExampleBox question={SecondTopicContent.example.question} steps={SecondTopicContent.example.steps} answer={SecondTopicContent.example.answer} />
          )}
          {SecondTopicContent.example2 && (
              <ExampleBox question={SecondTopicContent.example2.question} steps={SecondTopicContent.example2.steps} answer={SecondTopicContent.example2.answer} />
          )}
          {SecondTopicContent.exercise && (
            <ExerciseBox questions={SecondTopicContent.exercise.questions} />
          )}
          {SecondTopicContent.hint && (
              <HintBox content={SecondTopicContent.hint.content} />
          )}
          {SecondTopicContent.warning && (
              <WarningBox content={SecondTopicContent.warning.content} />
          )}
    </div>

    </>
  )
}

export default LDE1
