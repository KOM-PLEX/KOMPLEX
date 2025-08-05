import Link from "next/link"

const FEATURES_LINKS = [
    { href: "#features", text: "មេរៀនអន្តរកម្ម" },
    { href: "/forum", text: "វេទិកាពិភាក្សា" },
    { href: "/blog", text: "ប្លុកបទពិសោធន៍" },
    { href: "#", text: "អ្នកជំនាញ AI" }
]

const ABOUT_LINKS = [
    { href: "#goals", text: "គោលដៅ" },
    { href: "#founders", text: "អ្នកបង្កើត" },
    { href: "#", text: "រួមចំណែក" },
    { href: "#", text: "ទាក់ទង" }
]

export default function Footer() {
    return (
        <footer className="bg-gray-50 py-15 px-5">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div>
                        <h3 className="text-xl font-bold mb-5 text-indigo-600">KOMPLEX</h3>
                        <p className="text-gray-900 leading-relaxed">
                            ប្រព័ន្ធរៀន STEM សម្រាប់សិស្សខ្មែរ ដែលផ្តល់ជាមេរៀនឥតគិតថ្លៃ និងមានប្រសិទ្ធភាព។
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-5 text-indigo-600">មុខងារ</h3>
                        <div className="space-y-2">
                            {FEATURES_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block text-gray-900 hover:text-indigo-600 transition-colors"
                                >
                                    {link.text}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-5 text-indigo-600">អំពីយើង</h3>
                        <div className="space-y-2">
                            {ABOUT_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block text-gray-900 hover:text-indigo-600 transition-colors"
                                >
                                    {link.text}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-5 text-indigo-600">Open Source</h3>
                        <p className="text-gray-900 leading-relaxed">
                            KOMPLEX គឺជាប្រភពបើកចំហ ដែលអាចរួមចំណែក និងពង្រីកមេរៀនបាន។ យើងជឿថាការអប់រំគួរតែឥតគិតថ្លៃ និងអាចចូលដំណើរការបានសម្រាប់គ្រប់គ្នា។
                        </p>
                        <a href="https://github.com/RaksaOC/KOMPLEX.git" className="text-indigo-600 hover:text-indigo-700 transition-colors">Github Repository</a>
                    </div>
                </div>

                <div className="text-center pt-8 mt-10 border-t border-gray-200 text-gray-900">
                    <p>&copy; 2024 KOMPLEX. បង្កើតឡើងសម្រាប់សិស្សខ្មែរ។</p>
                </div>
            </div>
        </footer>
    )
}