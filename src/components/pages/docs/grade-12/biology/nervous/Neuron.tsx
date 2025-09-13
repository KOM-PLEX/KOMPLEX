import { Lightbulb } from "lucide-react"
import ThreeDBox from "../../../common/box/3DBox"
import { ThreeDExplanationBox } from "../../../common/box/explanation-box/3DExplanationBox"
import { div } from "framer-motion/client"

export default function Neuron() {
    return(
        <>
            <div className="space-y-4 sm:space-y-6 p-3 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Lightbulb className="text-yellow-500" size={32} />
                        <h2 className="text-2xl font-bold text-gray-800">ណឺរ៉ូន</h2>
                        <Lightbulb className="text-yellow-500" size={32} />
                    </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-6 sm:space-y-8">
                    {/* Section 4.1 - What is Neuron */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-blue-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">៤.ណឺរ៉ូន</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-3">
                            <p className="pl-2 border-l-2 border-gray-200">
                                <span className="text-blue-600 mr-2">•</span>
                                ណឺរ៉ូន គឺជាកោសិកាមូលដ្ឋាននៃប្រព័ន្ធប្រសាទ ដែលមានសមត្ថភាពទទួល និងបញ្ជូនព័ត៌មានពីកន្លែងមួយទៅកន្លែងមួយទៀត។
                            </p>
                            <p className="pl-2 border-l-2 border-gray-200">
                                <span className="text-blue-600 mr-2">•</span>
                                កោសិកាប្រសាទ គឺជាកោសិកាមានការឯកទេសខ្ពស់ ដែលមានសមត្ថភាពបញ្ជូនអាំងភ្លុចប្រសាទ។
                            </p>
                        </div>
                    </div>

                    {/* Section 4.2 - Structure of Neuron */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-green-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">៤.១ រចនាសម្ព័ន្ធណឺរ៉ូន</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                       <ThreeDExplanationBox 
                       title="រចនាសម្ព័ន្ធណឺរ៉ូន"
                       scale={2}
                       target={[0,0,0]}
                       src="/docs/grade-12/biology/gymnosperms/neuron.glb"
                       explanation = {
                        <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-blue-800 mb-3">ផ្នែកសំខាន់ៗរបស់ណឺរ៉ូន:</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-blue-600 mt-1">🔹</span>
                                        <div>
                                            <strong>តួកោសិកា (Cell Body/Soma):</strong>
                                            <p className="text-sm mt-1">មានរាងមូល ផ្ទុកនៅក្នុងនូវណ្យូគ្លេអុស និងសារធាតុផ្សេងៗដទៃទៀត។</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-green-600 mt-1">🔹</span>
                                        <div>
                                            <strong>ដេនដ្រាយ (Dendrites):</strong>
                                            <p className="text-sm mt-1">ជាផ្នែកខ្លីៗ និងមានការបំបែកច្រើន ដែលចេញពីតួកោសិកា។ មុខងារទទួលអាំងភ្លុចប្រសាទ។</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-purple-600 mt-1">🔹</span>
                                        <div>
                                            <strong>អាក់សុន (Axon):</strong>
                                            <p className="text-sm mt-1">ជាផ្នែកវែង ដែលចេញពីតួកោសិកា។ មុខងារបញ្ជូនអាំងភ្លុចប្រសាទ។</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-orange-600 mt-1">🔹</span>
                                        <div>
                                            <strong>ស្រទាប់ម៉ាយេលីន (Myelin Sheath):</strong>
                                            <p className="text-sm mt-1">ជាស្រទាប់ខ្លាញ់ ដែលរុំព័ទ្ធអាក់សុន។ ជួយបង្កើនល្បឿននៃការបញ្ជូនអាំងភ្លុច។</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                       }
                       />
                        </div>
                    </div>

                    {/* Section 4.3 - Types of Neurons */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-purple-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">៤.២ ប្រភេទនៃណឺរ៉ូន</h2>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">បើផ្អែកលើភាពពន្លយស៊ីតូប្លាសណឺរ៉ូនមាន 3​ ប្រភេទ</p>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="grid grid-cols-1 gap-4">
                                <div><ThreeDExplanationBox 
                                title="ណឺរ៉ូនចលករ"
                                scale={0.2}
                                target={[0,0,0]}
                                src="/docs/grade-12/biology/gymnosperms/ekpol.glb"
                                explanation = {<div>
                                    <h3 className="font-semibold text-blue-800 mb-3">ផ្នែកសំខាន់ៗរបស់ណឺរ៉ូន:</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-blue-600 mt-1">🔹</span>
                                        <div>
                                            <strong>តួកោសិកា (Cell Body/Soma):</strong>
                                            <p className="text-sm mt-1">មានរាងមូល ផ្ទុកនៅក្នុងនូវណ្យូគ្លេអុស និងសារធាតុផ្សេងៗដទៃទៀត។</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-green-600 mt-1">🔹</span>
                                        <div>
                                            <strong>ដេនដ្រាយ (Dendrites):</strong>
                                            <p className="text-sm mt-1">ជាផ្នែកខ្លីៗ និងមានការបំបែកច្រើន ដែលចេញពីតួកោសិកា។ មុខងារទទួលអាំងភ្លុចប្រសាទ។</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-purple-600 mt-1">🔹</span>
                                        <div>
                                            <strong>អាក់សុន (Axon):</strong>
                                            <p className="text-sm mt-1">ជាផ្នែកវែង ដែលចេញពីតួកោសិកា។ មុខងារបញ្ជូនអាំងភ្លុចប្រសាទ។</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-orange-600 mt-1">🔹</span>
                                        <div>
                                            <strong>ស្រទាប់ម៉ាយេលីន (Myelin Sheath):</strong>
                                            <p className="text-sm mt-1">ជាស្រទាប់ខ្លាញ់ ដែលរុំព័ទ្ធអាក់សុន។ ជួយបង្កើនល្បឿននៃការបញ្ជូនអាំងភ្លុច។</p>
                                        </div>
                                    </div>
                                </div>
                                </div>}
                                />
                                </div>
                                <div><ThreeDExplanationBox 
                                title="ណឺរ៉ូនចលករ"
                                scale={0.2}
                                target={[0,0,0]}
                                src="/docs/grade-12/biology/gymnosperms/tvepol.glb"
                                explanation = {     
                                    <div>
                                        <h3 className="font-semibold text-blue-800 mb-3">ផ្នែកសំខាន់ៗរបស់ណឺរ៉ូន:</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-blue-600 mt-1">🔹</span>
                                        <div>
                                            <strong>តួកោសិកា (Cell Body/Soma):</strong>
                                            <p className="text-sm mt-1">មានរាងមូល ផ្ទុកនៅក្នុងនូវណ្យូគ្លេអុស និងសារធាតុផ្សេងៗដទៃទៀត។</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-green-600 mt-1">🔹</span>
                                        <div>
                                            <strong>ដេនដ្រាយ (Dendrites):</strong>
                                            <p className="text-sm mt-1">ជាផ្នែកខ្លីៗ និងមានការបំបែកច្រើន ដែលចេញពីតួកោសិកា។ មុខងារទទួលអាំងភ្លុចប្រសាទ។</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-purple-600 mt-1">🔹</span>
                                        <div>
                                            <strong>អាក់សុន (Axon):</strong>
                                            <p className="text-sm mt-1">ជាផ្នែកវែង ដែលចេញពីតួកោសិកា។ មុខងារបញ្ជូនអាំងភ្លុចប្រសាទ។</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-orange-600 mt-1">🔹</span>
                                        <div>
                                            <strong>ស្រទាប់ម៉ាយេលីន (Myelin Sheath):</strong>
                                            <p className="text-sm mt-1">ជាស្រទាប់ខ្លាញ់ ដែលរុំព័ទ្ធអាក់សុន។ ជួយបង្កើនល្បឿននៃការបញ្ជូនអាំងភ្លុច។</p>
                                        </div>
                                    </div>
                                </div>
                                    </div>}
                                />
                                </div>
                                <div><ThreeDExplanationBox 
                                title="ណឺរ៉ូនចលករ"
                                scale={0.2}
                                target={[0,0,0]}
                                src="/docs/grade-12/biology/gymnosperms/multi.glb"
                                explanation = {     
                                    <div>
                                        <h3 className="font-semibold text-blue-800 mb-3">ផ្នែកសំខាន់ៗរបស់ណឺរ៉ូន:</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-blue-600 mt-1">🔹</span>
                                        <div>
                                            <strong>តួកោសិកា (Cell Body/Soma):</strong>
                                            <p className="text-sm mt-1">មានរាងមូល ផ្ទុកនៅក្នុងនូវណ្យូគ្លេអុស និងសារធាតុផ្សេងៗដទៃទៀត។</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-green-600 mt-1">🔹</span>
                                        <div>
                                            <strong>ដេនដ្រាយ (Dendrites):</strong>
                                            <p className="text-sm mt-1">ជាផ្នែកខ្លីៗ និងមានការបំបែកច្រើន ដែលចេញពីតួកោសិកា។ មុខងារទទួលអាំងភ្លុចប្រសាទ។</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-purple-600 mt-1">🔹</span>
                                        <div>
                                            <strong>អាក់សុន (Axon):</strong>
                                            <p className="text-sm mt-1">ជាផ្នែកវែង ដែលចេញពីតួកោសិកា។ មុខងារបញ្ជូនអាំងភ្លុចប្រសាទ។</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-orange-600 mt-1">🔹</span>
                                        <div>
                                            <strong>ស្រទាប់ម៉ាយេលីន (Myelin Sheath):</strong>
                                            <p className="text-sm mt-1">ជាស្រទាប់ខ្លាញ់ ដែលរុំព័ទ្ធអាក់សុន។ ជួយបង្កើនល្បឿននៃការបញ្ជូនអាំងភ្លុច។</p>
                                        </div>
                                    </div>
                                </div>
                                    </div>
                                }
                                />
                                </div>
                           
                            </div>
                        </div>
                    </div>

                    {/* Section 4.4 - How Neurons Work */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-orange-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">ពាក់ព័ន្ធនឹងនាទី</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-orange-800 mb-3">ដោយផ្អែកលើនាទីណឺរ៉ូនក៌មាន 3ដែរ:</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-4 p-3 bg-white rounded-lg border">
                                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">១</div>
                                        <div>
                                            <h4 className="font-semibold text-blue-800">ណឺរ៉ូនវិញ្ញាណនាំ</h4>
                                            <p className="text-sm text-gray-600">មាននាទីដឹកនាំព័ត៌មានពីឆ្នួលវិញ្ញាណទៅកាន់មជ្ឈមណ្ឌលប្រសាទ។ តួកោសិកាស្ថិតនៅតាម
                                            បណ្តោយសរសៃប្រសាទ បង្កើតបានជាកំពកហៅថាកង់ខ្លីយ៉ុង។</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-center">
                                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-gray-400"></div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-4 p-3 bg-white rounded-lg border">
                                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">២</div>
                                        <div>
                                            <h4 className="font-semibold text-green-800">ណឺរ៉ូនចលករ</h4>
                                            <p className="text-sm text-gray-600">មាននាទីដឹកនាំព័ត៌មានពីមជ្ឈមណ្ឌលប្រសាទទៅកាន់សរីរាង្គប្រតិកម្ម (សាច់ដុំ ឬក្រពេញ)។ តួ
                                            កោសិកាប្រសាទស្ថិតនៅខាងចុងម្ខាងនៃណឺរ៉ូន ដែលកប់នៅក្នុងខួរក្បាល ឬខួរឆ្អឹងខ្នង។</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-center">
                                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-gray-400"></div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-4 p-3 bg-white rounded-lg border">
                                        <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">៣</div>
                                        <div>
                                            <h4 className="font-semibold text-purple-800">អន្តរណឺរ៉ូន ឬ ណឺរ៉ូនភ្ជាប់</h4>
                                            <p className="text-sm text-gray-600"> មាននាទីបញ្ចូនបន្តនូវព័ត៌មានពីលឺរ៉ូនមួយទៅណឺរ៉ូនមួយទៀត។</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-indigo-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">៤.៥ អាំងភ្លុចប្រសាទ
                        </h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-indigo-50 p-4 rounded-lg">
                                <div className="flex flex-row items-center">
                                <h3 className="font-semibold text-indigo-800 mb-3">មកដឹងពីនិយមន័យនឹងលក្ខណ:ខ្លះៗរបស់អាំងភ្លុចប្រសាទ​</h3>
                                <Lightbulb className="text-yellow-500 mb-2" size={20} />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-indigo-300">
                                        <h4 className="font-semibold text-indigo-700">តើអាំងភ្លុចប្រសាទជាអ្វី?</h4>
                                        <p className="text-sm text-gray-600">វាជាព័ត៌មានប្រសាទដែលណឺរ៉ូនដឹកនាំ</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-indigo-300">
                                        <h4 className="font-semibold text-indigo-700">តើណឺរ៉ូនបញ្ជូនព័ត៌មានមានទិសដៅយ៉ាងណា?</h4>
                                        <p className="text-sm text-gray-600">អាំងភ្លុចប្រសាទមានទិសដៅ ពីដង់ឌ្រីតមួយន
                                        អឺរ៉ូ ចូលទៅក្នុងតួកោសិកា ហើយចុះតាម
                                        អាក់សូនរហូតដល់ស្មាញអាក់សូន។</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-indigo-300">
                                        <h4 className="font-semibold text-indigo-700">តើវាមានរូបរាងទេ?</h4>
                                        <p className="text-sm text-gray-600">អាំងភ្លុចប្រសាទធ្វើដំណើរតាមបណ្ដោយអឺរ៉ូន
                                            ក្រោមរូបរាងជាសញ្ញាអគ្គិសនីនិងគីមី</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-indigo-300">
                                        <h4 className="font-semibold text-indigo-700">ចុះវាលៀនយ៉ាងណាទើបយើងពីការឈឺចាប់យើងភ្លាមៗយ៉ាងនេះ</h4>
                                        <p className="text-sm text-gray-600">វាធ្វើដំណើរក្នុងល្បឿន120m/s</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                </div>
                    {/* Section 4.5 - Synapse */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-red-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">៤.៤ ស៊ីណាប (Synapse)</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-red-50 p-4 rounded-lg">
                                <p className="mb-3">
                                    <span className="text-red-600 mr-2">•</span>
                                    <strong>ស៊ីណាប់ជាអ្វី? នៅកន្លែងណា?</strong> ។
                                </p>
                                <div className="grid grid-cols-1 gap-4 mt-4">
                                    <div className="bg-white p-3 rounded-lg border">
                                        <h4 className="font-semibold text-red-800 mb-2">ស៊ីណាប់ជាអ្វី?</h4>
                                        <p className="text-sm text-gray-600">ជាលំហចន្លោះពីដង់ឌ្រីតនៃណឺរ៉ូនមួយទៅនឹងអាក់សូននៃណឺរ៉ូនបន្ទាប់។</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border">
                                        <h4 className="font-semibold text-red-800 mb-2">តើអាំងភ្លុចប្រសាទឆ្លងកាត់ស៊ីណាប់យ៉ាងដូចម្ដេច ?</h4>
                                        <p className="text-sm text-gray-600">ប្រើសារធាតុគីមី (នឺរ៉ូត្រាន្សមីតទ័រ) ក្នុងការបញ្ជូន</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-indigo-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">៤.៥ អាំងភ្លុចប្រសាទ
                        </h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <p className="pl-2 border-l-2 border-gray-200">
                                <span className="text-indigo-600 mr-2">•</span>
                                នឺរ៉ូត្រាន្សមីតទ័រ គឺជាសារធាតុគីមីដែលបញ្ជូនសេចក្តីពីណឺរ៉ូនមួយទៅណឺរ៉ូនមួយទៀតនៅស៊ីណាប។
                            </p>
                            <div className="bg-indigo-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-indigo-800 mb-3">នឺរ៉ូត្រាន្សមីតទ័រសំខាន់ៗ:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-indigo-300">
                                        <h4 className="font-semibold text-indigo-700">អាសេទីលកូលីន</h4>
                                        <p className="text-sm text-gray-600">ត្រួតពិនិត្យសាច់ដុំ និងការចាំ</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-indigo-300">
                                        <h4 className="font-semibold text-indigo-700">ដូប៉ាមីន</h4>
                                        <p className="text-sm text-gray-600">ទាក់ទងនឹងភាពរីករាយ និងចលនា</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-indigo-300">
                                        <h4 className="font-semibold text-indigo-700">សេរ៉ូតូនីន</h4>
                                        <p className="text-sm text-gray-600">ត្រួតពិនិត្យអារម្មណ៍ និងការគេង</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-indigo-300">
                                        <h4 className="font-semibold text-indigo-700">GABA</h4>
                                        <p className="text-sm text-gray-600">បន្ថយសកម្មភាពណឺរ៉ូន</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 4.6 - Neurotransmitters */}

                    {/* Summary Section */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-blue-200">
                        <h3 className="text-lg font-semibold text-blue-800 mb-4">សេចក្តីសង្ខេបអំពីណឺរ៉ូន</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <span className="text-blue-600 mt-1">🧠</span>
                                <p className="text-gray-700">ណឺរ៉ូនជាកោសិកាមូលដ្ឋាននៃប្រព័ន្ធប្រសាទ</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="text-green-600 mt-1">⚡</span>
                                <p className="text-gray-700">មានសមត្ថភាពទទួល បញ្ជូន និងបកស្រាយព័ត៌មាន</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="text-purple-600 mt-1">🔄</span>
                                <p className="text-gray-700">ធ្វើការរួមគ្នាក្នុងបណ្តាញដ៏ស្មុគស្មាញ</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="text-orange-600 mt-1">💊</span>
                                <p className="text-gray-700">ប្រើនឺរ៉ូត្រាន្សមីតទ័រក្នុងការទំនាក់ទំនង</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}