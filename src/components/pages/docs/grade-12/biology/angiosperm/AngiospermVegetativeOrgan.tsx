import { TopicContent } from "@/types/topic";
import DefinitionBox from "../../../common/box/DefinitionBox";
import TipBox from "../../../common/box/TipBox";
import ExampleBox from "../../../common/box/ExampleBox";
import WarningBox from "../../../common/box/WarningBox";
import { ImageBox, ImageBoxProps } from "../../../common/box/explanation-box/ImageExplanationBox";
import { ThreeDExplanationBox, ThreeDExplanationBoxProps } from "../../../common/box/explanation-box/3DExplanationBox";



export default function AngiospermVegetativeOrgan() {
    return (
        <>
            <div className="space-y-6">
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6">មេរៀនទី២ អង់ស្យូស្ពៃម</h2>
                
            

                {/* Vegetative Organs Section */}
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">១.១.សរីរាង្គលូតលាស់ (Vegetative Organs)</h3>
                    
                    {/* Root Section */}
                    <div className="bg-white p-4 rounded-lg mb-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">ក. ឬស (Root)</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h5 className="font-semibold text-gray-700 mb-2">មុខងារ:</h5>
                                <ul className="space-y-1 text-gray-600 text-sm">
                                    <li>• ជួរភ្ជាប់រុក្ខជាតិទៅនឹងដី</li>
                                    <li>• ផ្ទុកអាហារ</li>
                                    <li>• ស្រូបទឹក និងអំបិលខនិជសម្រាប់ដើម និងស្លឹក</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-32 h-24 bg-amber-200 rounded-lg mx-auto mb-2 relative">
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-amber-600 rounded-full"></div>
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-amber-400 rounded-full"></div>
                                </div>
                                <p className="text-sm text-gray-600">រូបភាពឬស</p>
                            </div>
                        </div>
                    </div>

                    {/* Stem Section */}
                    <div className="bg-white p-4 rounded-lg mb-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">ខ. ដើម (Stem)</h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="font-semibold text-gray-700 mb-2">មុខងារ:</h5>
                                <ul className="space-y-1 text-gray-600 text-sm">
                                    <li>• ជួរគាំទ្រផ្នែកខាងលើ</li>
                                    <li>• ដឹកនាំទឹក និងអំបិលខនិជពីឫសទៅស្លឹក</li>
                                    <li>• ផ្ទុកអាហារ (ឧទាហរណ៍: ដំឡូង, ខ្ញី)</li>
                                </ul>
                            </div>
                            
                            <div className="bg-blue-50 p-3 rounded">
                                <h5 className="font-semibold text-blue-800 mb-2">សរសៃដឹកនាំ (Vascular Bundles)</h5>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <h6 className="font-semibold text-blue-700 mb-1">ស៊ីឡែម (Xylem)</h6>
                                        <p className="text-gray-600 text-sm">ដឹកនាំទឹក និងអំបិលខនិជពីឫសទៅស្លឹក</p>
                                    </div>
                                    <div>
                                        <h6 className="font-semibold text-blue-700 mb-1">ផ្លូអែម (Phloem)</h6>
                                        <p className="text-gray-600 text-sm">ដឹកនាំអាហារទៅកោសិកាដែលមិនធ្វើរូបថតសំយោគ</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm mt-2">ស៊ីឡែម និងផ្លូអែម ត្រូវបានផលិតពីស្រទាប់មេ (Cambium)។</p>
                            </div>
                        </div>
                    </div>

                    {/* Leaf Section */}
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">គ. ស្លឹក (Leaf)</h4>
                        <div className="space-y-4">
                            <p className="text-gray-700">ការកាត់ឆ្លាក់ស្លឹកអង់ស្យូស្ពៃមបង្ហាញស្រទាប់៣:</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <div className="bg-green-50 p-3 rounded">
                                        <h5 className="font-semibold text-green-800 mb-1">ស្រទាប់អេពីឌែមលើ-ក្រោម</h5>
                                        <p className="text-gray-600 text-sm">ការពារស្លឹក និងមានសូមាតសម្រាប់ផ្លាស់ប្តូរឧស្ម័ន</p>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded">
                                        <h5 className="font-semibold text-blue-800 mb-1">ស្រទាប់ប៉ាលីសាត</h5>
                                        <p className="text-gray-600 text-sm">មានក្លរ៉ូផ្លាស្តជាមួយក្លរ៉ូហ្វីល សំខាន់សម្រាប់រូបថតសំយោគ</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="w-40 h-24 bg-gradient-to-b from-green-200 to-green-300 rounded-lg mx-auto mb-2 relative">
                                        <div className="absolute top-1 left-2 right-2 h-1 bg-green-600 rounded"></div>
                                        <div className="absolute top-3 left-2 right-2 h-2 bg-green-500 rounded"></div>
                                        <div className="absolute top-6 left-2 right-2 h-1 bg-green-400 rounded"></div>
                                        <div className="absolute top-8 left-2 right-2 h-1 bg-green-500 rounded"></div>
                                        <div className="absolute bottom-1 left-2 right-2 h-1 bg-green-600 rounded"></div>
                                    </div>
                                    <p className="text-sm text-gray-600">រូបភាពកាត់ឆ្លាក់ស្លឹក</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tree Trunk Cross-Section */}
                <div className="bg-amber-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-amber-800 mb-4">រូបភាពកាត់ឆ្លាក់ដើមឈើ</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-center">
                            <div className="w-48 h-48 bg-gradient-to-b from-amber-200 to-amber-400 rounded-full mx-auto mb-4 relative">
                                <div className="absolute inset-4 bg-amber-100 rounded-full"></div>
                                <div className="absolute inset-8 bg-amber-200 rounded-full"></div>
                                <div className="absolute inset-12 bg-amber-300 rounded-full"></div>
                                <div className="absolute inset-16 bg-amber-400 rounded-full"></div>
                                <div className="absolute inset-20 bg-amber-500 rounded-full"></div>
                            </div>
                            <p className="text-sm text-gray-600">រូបភាពកាត់ឆ្លាក់ដើមឈើ</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <div className="w-4 h-4 bg-amber-600 rounded"></div>
                                <span className="text-gray-700">សាច់ឈើ (Wood)</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-4 h-4 bg-blue-600 rounded"></div>
                                <span className="text-gray-700">ស៊ីឡែម (Xylem)</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-4 h-4 bg-green-600 rounded"></div>
                                <span className="text-gray-700">ស្រទាប់មេ (Cambium)</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-4 h-4 bg-red-600 rounded"></div>
                                <span className="text-gray-700">ផ្លូអែម (Phloem)</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-4 h-4 bg-gray-600 rounded"></div>
                                <span className="text-gray-700">សំបកឈើ (Bark)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Leaf Cross-Section */}
                <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">រូបភាពកាត់ឆ្លាក់ស្លឹក</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-center">
                            <div className="w-48 h-32 bg-gradient-to-b from-green-200 to-green-400 rounded-lg mx-auto mb-4 relative">
                                <div className="absolute top-1 left-2 right-2 h-1 bg-green-600 rounded"></div>
                                <div className="absolute top-3 left-2 right-2 h-2 bg-green-500 rounded"></div>
                                <div className="absolute top-6 left-2 right-2 h-1 bg-green-400 rounded"></div>
                                <div className="absolute top-8 left-2 right-2 h-1 bg-green-500 rounded"></div>
                                <div className="absolute bottom-1 left-2 right-2 h-1 bg-green-600 rounded"></div>
                            </div>
                            <p className="text-sm bg-amber-50">រូបភាពកាត់ឆ្លាក់ស្លឹក</p>
                            <ThreeDExplanationBox
                                title="ម៉ូដែល 3D នៃស្លឹក"
                                scale={7}
                                target={[0, 0, 0]}
                                src="/docs/grade-12/biology/gymnosperms/skin.glb"
                                explanation="ម៉ូដែល 3D នៃស្លឹក"
                            />plant_anatomy.glb
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <div className="w-4 h-4 bg-green-600 rounded"></div>
                                <span className="text-gray-700">អេពីឌែមលើ (Upper epidermis)</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-4 h-4 bg-green-500 rounded"></div>
                                <span className="text-gray-700">ស្រទាប់ប៉ាលីសាត (Palisade layer)</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-4 h-4 bg-blue-600 rounded"></div>
                                <span className="text-gray-700">កោសិកាល្បាត (Guard cell)</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-4 h-4 bg-green-400 rounded"></div>
                                <span className="text-gray-700">ស្រទាប់ស្លោត (Spongy layer)</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-4 h-4 bg-green-600 rounded"></div>
                                <span className="text-gray-700">អេពីឌែមក្រោម (Lower epidermis)</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-4 h-4 bg-red-600 rounded"></div>
                                <span className="text-gray-700">សូមាត (Stomata)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}