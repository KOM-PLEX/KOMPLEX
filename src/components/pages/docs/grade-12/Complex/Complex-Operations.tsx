import React from 'react'
import { TopicContent } from '@/types/topic'
import DefinitionBox from '../../common/box/DefinitionBox'
import TipBox from '../../common/box/TipBox'
import { BlockMath, InlineMath } from 'react-katex';
import ExampleBox from '../../common/box/ExampleBox'
import ExerciseBox from '../../common/box/ExerciseBox';

const TOPIC_CONTENT: TopicContent = {
  definition :{
    title : "ប្រមាណវិធីបូក និង ដកចំនួនកុំផ្លិច",
    content : 
      "​ការបូក​ ដក ចំនួនកុំផ្លិចគឺត្រូវធ្វើប្រមាណវិធី​តាមផ្នែកពិតជាមួយផ្នែកពិត​ ផ្នែកនិមិត្តជាមួយផ្នែកនិមិត្ត " 
  },
  tip :{
    title:<div> បើ <InlineMath math="z_1 = a + bi" />  និង  <InlineMath math="z_2 = c + di" /> នោះគេបាន</div>,
    content : <div>
      
<div className='flex justify-start items-center gap-3'>
<BlockMath math="z_1 + z_2 = (a + c) + (b + d)i" />
<BlockMath math="z_1 - z_2 = (a - c) + (b - d)i" />
ដែល a, b, c, d ជាចំនួនពិត
</div>
    </div>
  },
  example: {
    question:
            <div className="flex items-center gap-4">
                <p>គេមាន</p>
                <BlockMath math="z_1 = 3 + 4i" /> និង <BlockMath math="z_2 = 2 - 3i" /> 
                <p>គណនា</p>
                <BlockMath math="z_1 + z_2 ," />
                <BlockMath math="z_1 - z_2" />
            </div>,
  
  steps: [
    {
        title: "ពិនិត្យមើលទម្រង់",
        content: <div>
          ចំពោះ <InlineMath math="z_1 = 3 + 4i" /><br />
          ផ្នែកពិត​ : គឺ​  3<br />
          ផ្នែកនិមិត្ត​ :គឺ 4i<br /><br />
          ចំពោះ <InlineMath math="z_2 = 2 - 3i" /><br />
          ផ្នែកពិត​ : គឺ​  2<br />
          ផ្នែកនិមិត្ត​ :គឺ -3i<br />
        </div>
    },
    {
        title: "រៀបផ្នែកពិតជាមួយផ្នែកពិត និងផ្នែកនិមិត្តជាមួយផ្នែកនិមិត្ត",
        content: <div>
            <InlineMath math="z_1 + z_2 = (3 + 2) + (4 - 3)i" /><br /><br />
            <InlineMath math="z_1 - z_2 = (3 - 2) + [4 -(-3)]i " /><br />
            <InlineMath math="        = (3 - 2) + (4 +3)i " /><br />
        </div>
    },
    {
        title: "គណនាផ្នែកពិតជាមួយផ្នែកពិត ហើយផ្នែកនិមិត្តជាមួយផ្នែកនិមិត្ត",
        content: <div>
              <InlineMath math="z_1 + z_2 = (3 + 2) + (4 - 3)i = 5 + i" /><br /><br />
              <InlineMath math="z_1 - z_2 = (3 - 2) + (4 + 3)i = 1 + 7i" /><br /><br />
        </div>
    }
],
answer: <div>ដូច្នេះ <InlineMath math="z_1 + z_2 = 5 + i" /> និង <InlineMath math="z_1 - z_2 = 1 + 7i" /></div>
  },
  exercise: {
    questions: [
        {
            id: "q1",
            question: "រកកុំផ្លិចឆ្នាស់នៃ z = 2-7i",
            options: ["-2-7i", "2+7i", "-2+7i","មិនមាន"],
            correctAnswer: 1
        },
        {
            id: "q2",
            question: "រកកុំផ្លិចឆ្នាស់នៃ z = -4+2i",
            options: ["-4-2i", "4+2i", "4-2i","មិនមាន"],
            correctAnswer: 0
        },
        {
            id: "q3",
            question:
            <div className='flex items-center gap-4'>
            <p>គេមាន</p>
            <BlockMath math="z_1 = 9 -7i" /> និង <BlockMath math="z_2 = - 3 + 2i" /> 
            <p>គណនា</p>
            <BlockMath math="z_1 + z_2" />
            <BlockMath math="z_1 - z_2" />
        </div>,
            options: ["(6+5i),(12-9i)", "(6-5i),(12+9i)", "(6+5i),(12+9i)", "(6-5i),(12-9i)"],
            correctAnswer: 2
        },
        {
            id: "q4",
            question:  <div className='flex items-center gap-4'>
            <p>គេមាន</p>
            <BlockMath math="z_1 = 4 + 2i" /> និង <BlockMath math="z_2 = 3 - 2i" /> 
            <p>គណនា</p>
            <BlockMath math="z_1 + z_2" />
            <BlockMath math="z_1 - z_2" />
        </div>,
            options: ["(7+0i),(1+4i)", "(7+0i),(1-4i)", "(7),(1-4i)","មិនមាន"],
            correctAnswer: 0
        }
    ]
}
}

const ComplexOperations = () => {
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
            {TOPIC_CONTENT.exercise && (
                <ExerciseBox questions={TOPIC_CONTENT.exercise.questions} />
            )}
    </>
  )
}

export default ComplexOperations
