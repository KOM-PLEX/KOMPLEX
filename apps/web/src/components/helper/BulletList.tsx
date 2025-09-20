import { toKhmerNumbering } from '@core-utils/khmerNumber';

export default function BulletList({ content }: { content: string[] }) {
    return (
        <ul className="text-gray-700 leading-relaxed text-base list-none list-inside space-y-1 ml-2">
            {content.map((item, index) => (
                <li key={index}><span className='font-bold text-lg'>{toKhmerNumbering(index + 1)}</span> {item}</li>
            ))}
        </ul>
    )
}