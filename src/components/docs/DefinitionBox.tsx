export default function DefinitionBox({ title, content }: { title: string, content: string }) {
    return (
        <div className=" my-6 space-y-4 ">
            <h4 className="text-black font-bold text-2xl">{title}</h4>
            <p className="text-gray-700 leading-relaxed text-base">{content}</p>
        </div>
    )
}