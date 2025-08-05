import Footer from "@/components/Footer";
import Link from "next/link";
import Header from "@/components/Header";
import { Play, ArrowRight, BookOpen, Bot, MessageSquare, FileText, Video, Code, Target, CheckCircle, Rocket } from "lucide-react";

const GOAL_LIST_ITEMS = [
  "ផ្តល់ជាមេរៀនឥតគិតថ្លៃ និងអាចរៀនដោយខ្លួនឯក",
  "ជួយឱ្យយល់ជ្រៅជាងការចងចាំដោយគ្មានការយល់",
  "ផ្តល់ជាមេរៀនអន្តរកម្ម និងរូបភាពច្បាស់លាស់",
  "បង្កើតសហគមន៍រៀនជាមួយគ្នា",
  "បើកចំហសម្រាប់ការរួមចំណែក និងពង្រីកមេរៀន"
];

const FOUNDERS = [
  {
    avatar: "A",
    name: "អាឡិចសាន់ដឺ សម្ពូល",
    role: "ប្រធានគ្រឹះស្ថាន",
    description: "អ្នកជំនាញវិទ្យាសាស្ត្រកុំព្យូទ័រ និងអ្នកអប់រំដែលមានបទពិសោធន៍ជាង ១០ ឆ្នាំក្នុងការបង្រៀន STEM"
  },
  {
    avatar: "B",
    name: "សុភាព វណ្ណា",
    role: "អ្នកគ្រប់គ្រងផលិតកម្ម",
    description: "អ្នកអភិវឌ្ឍន៍វេបសាយ និងអ្នករចនាប្រព័ន្ធដែលមានចំណាប់អារម្មណ៍ខ្លាំងក្នុងការអប់រំ"
  },
  {
    avatar: "C",
    name: "វណ្ណា សុភាព",
    role: "អ្នកគ្រប់គ្រងគម្រោង",
    description: "អ្នកជំនាញគណិតវិទ្យា និងអ្នកបង្រៀនដែលមានបទពិសោធន៍ក្នុងការបង្កើតមេរៀនអន្តរកម្ម"
  },
  {
    avatar: "D",
    name: "រតនា សុវណ្ណា",
    role: "អ្នកគ្រប់គ្រងអ្នកប្រើប្រាស់",
    description: "អ្នកជំនាញវិទ្យាសាស្ត្រអប់រំ និងអ្នកអភិវឌ្ឍន៍មេរៀនដែលមានចំណាប់អារម្មណ៍ខ្លាំងក្នុងការធ្វើឱ្យការរៀនកាន់តែងាយស្រួល"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="mt-15 pt-20 pb-20 px-5 bg-indigo-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="white" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grain)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5 leading-tight">
            ប្រព័ន្ធរៀន STEM សម្រាប់សិស្សខ្មែរ
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            រៀនគណិតវិទ្យា និងវិទ្យាសាស្ត្រដោយឥតគិតថ្លៃ ជាមួយនឹងមេរៀនអន្តរកម្ម និងអ្នកជំនាញ AI
          </p>
          <div className="flex gap-5 justify-center flex-wrap">
            <Link
              href="#features"
              className="bg-white text-indigo-600 px-8 py-4 rounded-2xl no-underline font-semibold text-base transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Play size={20} />
              ចាប់ផ្តើមរៀន
            </Link>
            <Link
              href="#goals"
              className="bg-transparent text-white px-8 py-4 rounded-2xl no-underline font-semibold text-base transition-all duration-300 border-2 border-white hover:bg-white/10 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <ArrowRight size={20} />
              ស្វែងយល់បន្ថែម
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-15">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">មុខងារសំខាន់ៗ</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ប្រព័ន្ធរៀនដែលមានមុខងារល្អជាមួយនឹងបទពិសោធន៍រៀនដ៏អស្ចារ្យ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-5 text-white">
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">មេរៀនអន្តរកម្ម</h3>
              <p className="text-gray-600 leading-relaxed">
                រៀនគណិតវិទ្យា និងវិទ្យាសាស្ត្រជាមួយនឹងមេរៀនដែលមានការអន្តរកម្ម និងរូបភាពច្បាស់លាស់
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-5 text-white">
                <Bot size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">អ្នកជំនាញ AI</h3>
              <p className="text-gray-600 leading-relaxed">
                អ្នកជំនាញ AI ដែលអាចជួយដោះស្រាយបញ្ហាគណិតវិទ្យា និងផ្តល់ការណែនាំជាក់លាក់
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-5 text-white">
                <MessageSquare size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">វេទិកាពិភាក្សា</h3>
              <p className="text-gray-600 leading-relaxed">
                ចែករំលែកចំណេះដឹង និងសួរសំណួរជាមួយសិស្សដទៃទៀត
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-5 text-white">
                <FileText size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">ប្លុកបទពិសោធន៍</h3>
              <p className="text-gray-600 leading-relaxed">
                អានបទពិសោធន៍ និងគន្លឹះរៀនពីសិស្សដទៃទៀត
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-5 text-white">
                <Video size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">វីដេអូឥតគិតថ្លៃ</h3>
              <p className="text-gray-600 leading-relaxed">
                មើលវីដេអូរៀនឥតគិតថ្លៃ ដែលពន្យល់អំពីគោលគំនិតសំខាន់ៗ
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-5 text-white">
                <Code size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">ប្រភពបើកចំហ</h3>
              <p className="text-gray-600 leading-relaxed">
                ប្រព័ន្ធបើកចំហ ដែលអាចរួមចំណែក និងពង្រីកមេរៀនបាន
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section id="goals" className="py-20 px-5 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-15">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">គោលដៅរបស់យើង</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              យើងចង់ជួយដោះស្រាយបញ្ហានៅក្នុងប្រព័ន្ធអប់រំខ្មែរ
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-15">
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-indigo-500/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-600"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                  <Target size={24} />
                </div>
                ធ្វើឱ្យការរៀន STEM កាន់តែងាយស្រួល
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                កម្ពុជាមានបញ្ហាជាច្រើនក្នុងប្រព័ន្ធអប់រំ ដែលសិស្សជាច្រើនពឹងផ្អែកលើការបង្រៀនឯកជន និងសៀវភៅសង្ខេបដែលត្រូវបង់ប្រាក់ដើម្បីយល់គោលគំនិតមូលដ្ឋាន។
              </p>
              <ul className="space-y-3">
                {GOAL_LIST_ITEMS.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600">
                    <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                      <CheckCircle size={16} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl border border-indigo-500/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-600"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                  <Rocket size={24} />
                </div>
                គោលដៅរបស់យើង
              </h3>
              <p className="text-gray-600 leading-relaxed">
                បង្កើតប្រព័ន្ធរៀន STEM ដែលឥតគិតថ្លៃ និងមានប្រសិទ្ធភាពសម្រាប់សិស្សខ្មែរ ដើម្បីជួយដោះស្រាយបញ្ហានៅក្នុងប្រព័ន្ធអប់រំ និងផ្តល់ជាជម្រើសឥតគិតថ្លៃជាមួយនឹងការរៀនដោយខ្លួនឯកដែលគាំទ្រការយល់ជ្រៅជាងការចងចាំដោយគ្មានការយល់។
              </p>
            </div>
          </div>

          <div className="bg-indigo-600 rounded-3xl p-15 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <pattern id="grain2" width="100" height="100" patternUnits="userSpaceOnUse">
                    <circle cx="50" cy="50" r="1" fill="white" opacity="0.1" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grain2)" />
              </svg>
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-extrabold mb-5">ចូលរួមជាមួយយើង</h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto mb-8 leading-relaxed">
                បង្កើតប្រព័ន្ធរៀន STEM ដែលឥតគិតថ្លៃ និងមានប្រសិទ្ធភាពសម្រាប់សិស្សខ្មែរ ដើម្បីជួយដោះស្រាយបញ្ហានៅក្នុងប្រព័ន្ធអប់រំ និងផ្តល់ជាជម្រើសឥតគិតថ្លៃជាមួយនឹងការរៀនដោយខ្លួនឯកដែលគាំទ្រការយល់ជ្រៅជាងការចងចាំដោយគ្មានការយល់។
              </p>
              <Link
                href="#"
                className="bg-white/20 text-white px-8 py-4 rounded-2xl no-underline font-semibold text-base transition-all duration-300 border-2 border-white/30 hover:bg-white/30 hover:-translate-y-0.5  flex items-center gap-2 mx-auto w-fit"
              >
                <Play size={20} />
                ចាប់ផ្តើមរៀនឥឡូវនេះ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-20 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-15">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">អ្នកបង្កើត</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ស្គាល់អ្នកដែលបង្កើតប្រព័ន្ធរៀន STEM សម្រាប់សិស្សខ្មែរ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FOUNDERS.map((founder, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-indigo-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center">
                <div className="w-30 h-30 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-5 text-4xl text-white font-bold">
                  {founder.avatar}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                <div className="text-indigo-600 font-semibold text-base mb-4">{founder.role}</div>
                <p className="text-gray-600 leading-relaxed">{founder.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
