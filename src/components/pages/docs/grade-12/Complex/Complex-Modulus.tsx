import React from 'react'
import { TopicContent } from '@/types/topic'
import DefinitionBox from '../../common/box/DefinitionBox'
import TipBox from '../../common/box/TipBox'
import { BlockMath, InlineMath } from 'react-katex';

const TOPIC_CONTENT: TopicContent = {
  definition :{
    title : "ម៉ូឌុលនៃចំនួនកុំផ្លិច",
    content : <div>
      ម៉ូឌុលនៃចំនួនកុំផ្លិច​  <InlineMath math="z = a + bi" /> គឺ <InlineMath math="|z| = \sqrt{a^2 + b^2}" />
    </div>
  },
  tip :{
    title : "ស្វ័យគុណនៃ i",
    content : <div>
      គ្រប់​ k ជាចំនួនគត់ គេមានស្វ័យគុណនៃ​ i គឺ <br />
      <InlineMath math="i^{4k} = 1" /> <br />
      <InlineMath math="i^{4k+1} = i" /> <br />
      <InlineMath math="i^{4k+2}= -1" /> <br />
      <InlineMath math="i^{4k+3} = -i" />
      </div>
  },

}

const ComplexModulus = () => {
  return (
    <>
    {TOPIC_CONTENT.definition && (
                <DefinitionBox title={TOPIC_CONTENT.definition.title} content={TOPIC_CONTENT.definition.content} />
            )}

            {TOPIC_CONTENT.tip && (
                <TipBox title={TOPIC_CONTENT.tip.title} content={TOPIC_CONTENT.tip.content} />
            )}
    </>
  )
}

export default ComplexModulus
