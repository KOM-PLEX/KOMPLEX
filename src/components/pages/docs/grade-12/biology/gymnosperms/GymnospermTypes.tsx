import { TopicContent } from "@/types/docs/topic";
import ComingSoon from "../../../common/ComingSoon";
import DefinitionBox from "../../../common/box/DefinitionBox";
import TipBox from "../../../common/box/TipBox";
import ExampleBox from "../../../common/box/ExampleBox";
import WarningBox from "../../../common/box/WarningBox";
import { ImageBox, ImageBoxProps } from "../../../common/box/explanation-box/ImageExplanationBox";
import { ThreeDExplanationBox, ThreeDExplanationBoxProps } from "../../../common/box/explanation-box/3DExplanationBox";

export const TOPIC_CONTENT: TopicContent = {
    definition: {
        title: "តើស៊ីមណូស្តែមជាអ្វី?",
        content: "ស៊ីមណូស្តែម មកពីពាក្យក្រិច ស៊ីមណូស(ននល) ស្ពៃម៉ា(គ្រាប់)។ ស៊ីមណូស្តែម ជារុក្ខជាតិមានគ្រាប់ តែគ្មានសំបកការពារពីខាងក្រៅទេ វាមានគ្រាប់ននល។ "
    },
    tip: {
        title: "លក្ខណៈសំខាន់ៗ",
        content: [
            "ស៊ីមណូស្តែម មានកំណើតនៅលើផែនដីតាំងពីកាលសម័យស៊ីលុយរាង និងដេរ៉ូញាង នៃពាក់កណ្តាលស័កទី១។",
            "ស៊ីមណូស្ពៃមលូតលាស់ខ្លាំង នៅពាក់កណ្តាលស័កទី២ មានរហូតដល់២០០០០ប្រភេទ។",
            "សព្វថ្ងៃនេះមានស៊ីមណូស្ពៃមតែ៤ប្រភេទប៉ុណ្ណោះគឺ ប្រង់ កូនីកែ គីងកូ និងស៊ីណេតូភីត។",
            "ស៊ីមណូស្ពៃមច្រើនដុះនៅតំបន់ត្រូពិច តំបន់ក្បែរត្រូពិច តំបន់ត្រជាក់ លើភ្នំ តំបន់វាលខ្សាច់មានអាកាសធាតុក្តៅ និងតំបន់ព្រៃត្រូពិចមានភ្លៀង។",
        ]
    },
    threeDExplanation: [
        {
            title: "ប្រង់",
            src: "/docs/grade-12/biology/gymnosperms/test.glb",
            target: [0, 0.5, 0],
            scale: 3,
            canvasBackgroundColor: "white",
            explanation: [
                "ប្រង់មានតាំងពីប្រហែល១៧៥លានឆ្នាំមុន។",
                "ច្រើនមាននៅតំបន់ត្រូពិច និងក្បែរត្រូពិច ដែលជាប្រភេទមួយមានច្រើនជាងគេ។",
                "ប្រង់មានទម្រង់ និងលក្ខណះដូចដើមត្នោត ហើយមានស្លឹកផ្តុំនៅខាងចុង។"
            ],
        },
        {
            title: "កូនីតែ",
            src: "/docs/grade-12/biology/gymnosperms/pine-tree.glb",
            target: [0, 6, 0],
            scale: 0.04,
            canvasBackgroundColor: "white",
            explanation: [
                "មានក្រុមច្រើនជាងគេ ដែលភាគច្រើនមានស្លឹករាងដូចម្ជុល។",
                "កូនីតែមានស្លឹកពណ៌បៃតងពេញមួយឆ្នាំ ហើយអាចរស់នៅបានពី២ទៅ១៤ឆ្នាំ។",
                "គ្រាប់របស់កូនីតែ ជាអាហាររបស់បក្សី និងសត្វកកេរ។"
            ],
        },


    ],
    imageExplanation: [
        {
            title: "គីងកូ",
            src: "/docs/grade-12/biology/gymnosperms/ginkgo.png",
            imageAlt: "គីងកូ",
            explanation: [
                "មានកំណើតតាំងពីរាប់រយលានឆ្នាំមុនម៉្លេះ សព្វថ្ងៃនេះនៅសល់តែមួយប្រភេទប៉ុណ្ណោះ។",
                "មាននៅប្រទេសចិន ជប៉ុន និងកូរ៉េ។ វាជាប្រភេទរុក្ខជាតិដែលធន់និងបរិយាកាសកខ្វក់។"
            ],
        },
        {
            title: "ស៊ីណេតូភីត",
            src: "/docs/grade-12/biology/gymnosperms/gnetophytes.png",
            imageAlt: "ស៊ីណេតូភីត",
            explanation: [
                "រុក្ខជាតិដែលដុះនៅតំបន់វាលខ្សាច់មានអាកាសធាតុក្តៅ និងតំបន់ព្រៃត្រូពិចមានភ្លៀង។",
                "វាអាចជាដើមឈើជាវល្លិ ជាចុល្លព្រឹក្សសម្រាប់លំអ។ ស៊ីណេតូភីតមានអាយុរាប់ពាន់ឆ្នាំ។"
            ],
        },
    ]

};


function GymnospermTypes() {
    return (
        <> {
            TOPIC_CONTENT.definition &&
            <DefinitionBox title={TOPIC_CONTENT.definition.title} content={TOPIC_CONTENT.definition.content} />}
            {TOPIC_CONTENT.tip &&
                <TipBox title={TOPIC_CONTENT.tip.title} content={TOPIC_CONTENT.tip.content} />}
            {TOPIC_CONTENT.threeDExplanation &&
                Array.isArray(TOPIC_CONTENT.threeDExplanation) &&
                TOPIC_CONTENT.threeDExplanation.map((threeD: ThreeDExplanationBoxProps, index: number) => (
                    <ThreeDExplanationBox
                        key={index}
                        title={threeD.title}
                        src={threeD.src}
                        explanation={threeD.explanation}
                        canvasBackgroundColor="white"
                        scale={threeD.scale}
                        target={threeD.target}
                    />
                ))}
            {TOPIC_CONTENT.imageExplanation &&
                Array.isArray(TOPIC_CONTENT.imageExplanation) &&
                TOPIC_CONTENT.imageExplanation.map((image: ImageBoxProps, index: number) => (
                    <ImageBox key={index} title={image.title} src={image.src} imageAlt={image.imageAlt} explanation={image.explanation} />
                ))}
        </>
    )
}

export default GymnospermTypes;