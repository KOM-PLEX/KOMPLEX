import React from 'react';
import DefinitionBox from '../../common/box/DefinitionBox';
import TipBox from '../../common/box/TipBox';
import ExampleBox from '../../common/box/ExampleBox';
import { BlockMath, InlineMath } from 'react-katex';
import { ImageBox } from '../../common/box/explanation-box/ImageExplanationBox';
import WarningBox from '../../common/box/WarningBox';
import HintBox from '../../common/box/HintBox';
import ExerciseBox from '../../common/box/ExerciseBox';
import { math } from '@/curriculum/grade-12/math';
import { Content } from 'next/font/google';
import { title } from 'process';

const TOPIC_CONTENT = {
  definition: {
    title: "មាឌចតុមុខ(តេត្រាអែត)",
    content: (
      <>
        <ImageBox
          src="/images/2d-vector/2d-vector-1.png"
          imageAlt="2D Vector"
          explanation={
            <>
              <b>មាឌចតុមុខ(តេត្រាអែត) ABCD កំណត់ដោយ៖</b>
                <BlockMath math="V = \frac{1}{6} |\overrightarrow{AB} \times \overrightarrow{AC} \cdot \overrightarrow{AD}|" />
                (V: មាឌ, ខ្នាតគិត​ជា <InlineMath math="cm^3" />)<br />
              <b>ឬគេ​អាចរកតាម:</b>
              <BlockMath math={String.raw`V = \frac{1}{3} S_{BCD} \cdot h`} />
                (S<sub>BCD</sub>: ផ្ទៃបាត, h: កំពស់តេត្រាអែត)
              <br />
              <b>ចំណាំ:</b> មាឌអាចគណនាដោយប្រើវ៉ិចទ័របានផងដែរ។
            </>
          }
        />
      </>
    ),
  },
}

const TOPIC_CONTENT_PARALLELEPIPED = {
  definition: {
    title: "មាឌប្រលេពីប៉ែតកែង",
    content: (
      <>
        <ImageBox
          src="/images/2d-vector/2d-vector-1.png"
          imageAlt="3D Parallelepiped"
          explanation={
            <>
              <b>មាឌប្រលេពីប៉ែតកែង​ កំណត់ដោយ៖​</b>
              <BlockMath math={String.raw`V = |\overrightarrow{AB} \cdot (\overrightarrow{AD} \times \overrightarrow{AE})|`} />
                (V: មាឌ, ខ្នាតគិត​ជា <InlineMath math="cm^3" />)
            </>
          }
        />
      </>
    ),
  },
}

const Volume = () => {
  return (
    <div>
      <DefinitionBox title={TOPIC_CONTENT.definition?.title} content={TOPIC_CONTENT.definition?.content} />
      <DefinitionBox title={TOPIC_CONTENT_PARALLELEPIPED.definition?.title} content={TOPIC_CONTENT_PARALLELEPIPED.definition?.content} />
    </div>
  )
}

export default Volume
