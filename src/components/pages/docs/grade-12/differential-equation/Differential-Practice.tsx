import { BlockMath } from "react-katex"
import 'katex/dist/katex.min.css'

const DifferentialPractice = () => {
  const exercises = [
    {
      id: 1,
      title: "លំហាត់ទី ១",
      description: "ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែលខាងក្រោម៖",
      problems: [
        "y'' + 4y -5y =0",
        "y'' - 2y' + y =0",
        "y'' + 9y =0",
        "y'' + 4y' + 4y = 0",
      ]
    },
    {
      id: 2,
      title: "លំហាត់ទី ២",
      description: "ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែលខាងក្រោម៖",
      problems: [
        "y' + y =1",
        "y' - 2y = 3\\cos2x",
        "y' + y = x+ 2e^x",
        "y' + y = \sinx - \\ 2cosx ",
        "y' + y = \\frac{1}{1+ e^{2x}}",
      ]
    },
    {
      id: 3,
      title: "លំហាត់ទី ៣",
      description: "ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែលខាងក្រោម៖",
      problems: [
        "y'' + 9y' - 10y = 8 + 72x - 40x^2",
        "y'' - 2y = x + 2e^x",
        "y'' + 2y' + y = xe^{-x}",
        "y'' - 2y' - 3y = 2sinx",
        "y' + y' - 2y = 3cos2x",
        "y' + y' - 2y = 3cos2x",
      ]
    },
    {
      id: 4,
      title: "លំហាត់ទី ៤",
      description: "ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែលខាងក្រោម៖",
      problems: [
        "y'' + 2y' - 3y =0,  បេី y(0)=0 និង y'(0)= 1",
        "y'' + 4y= 0, បេី y(0)=1 និង y'(0)= 2",
        "y'' -2y' + 5y= 0, បេី y(0)=1 និង y'(0)= -1",
        "y'' + 2y' + 5y= 0, បេី y(0)= 0 និង y'(0)= 1",
      ]
    },
    {
      id: 4,
      title: "លំហាត់ទី ៤",
      description: "ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែលខាងក្រោម៖",
      problems: [
        "",
        "",
        "",
        "",
      ]
    }
  ]

  return (
    <div className="p-3 space-y-8 bg-neutral-50 min-h-screen">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center text-gray-800">
        លំហាត់អនុវត្ត សមីការឌីផេរ៉ង់ស្យែល
      </h1>

      {/* Intro */}
      <div className="bg-white p-4 rounded-lg border border-neutral-200">
        <p className="text-gray-700 leading-relaxed text-sm">
          ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល ដោយប្រើវិធីសាស្រ្តដែលអ្នកបានរៀន។ 
          សូមពិនិត្យការគណនារបស់អ្នក ដើម្បីធានាថាចម្លើយត្រឹមត្រូវ។
        </p>
      </div>

      {/* Exercises */}
      {exercises.map(ex => (
        <div 
          key={ex.id} 
          className="bg-white p-5 rounded-lg border border-neutral-200 space-y-4"
        >
          <h2 className="text-lg font-semibold text-gray-900">{ex.title}</h2>
          <p className="text-gray-600 text-sm">{ex.description}</p>
          <div className="space-y-3">
            {ex.problems.map((prob, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-neutral-100 rounded-md px-3 py-2"
              >
                <span className="text-gray-500 text-sm">{i + 1}.</span>
                <BlockMath math={prob} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default DifferentialPractice
