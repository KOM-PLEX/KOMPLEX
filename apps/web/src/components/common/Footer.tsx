import Link from "next/link"

const FEATURES_LINKS = [
    { href: "/docs", text: "មេរៀនអន្តរកម្ម" },
    { href: "/forums", text: "វេទិកាពិភាក្សា" },
    { href: "/blogs", text: "ប្លុកបទពិសោធន៍" },
    { href: "/exercises", text: "អនុវត្តន៍" },
    { href: "/ai", text: "តារា AI" }
]

const ABOUT_LINKS = [
    { href: "#features", text: "មុខងារ" },
    { href: "#founders", text: "ស្ថាបនិក" },
    // { href: "#", text: "រួមចំណែក" },
    // { href: "#", text: "ទាក់ទង" }
]

export default function Footer() {
    return (
        <footer className="bg-white py-15 px-5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2  lg:grid-cols-4 gap-10">
                    <div>
                        <h3 className="text-xl font-bold mb-5 text-indigo-600 flex items-center gap-2"><img src="/logo.png" alt="KOMPLEX" className="w-6 h-6" />KOMPLEX</h3>
                        <p className="text-gray-900 leading-relaxed">
                            ប្រព័ន្ធសិក្សា សម្រាប់សិស្សខ្មែរ បង្កើតឡើងដោយសិស្សកម្ពុជា
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
                            {ABOUT_LINKS.map((link, index) => (
                                <Link
                                    key={index}
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
                        <a href="https://github.com/KOMPLEX-KH" className="text-indigo-600 hover:text-indigo-700 transition-colors">Github Repository</a>
                    </div>
                </div>

                <div className="text-center pt-8 mt-10 border-t border-gray-200 text-gray-900">
                    <p>&copy; 2025 KOMPLEX. បង្កើតឡើងសម្រាប់សិស្សខ្មែរ។</p>
                </div>
            </div>
        </footer>
    )
}