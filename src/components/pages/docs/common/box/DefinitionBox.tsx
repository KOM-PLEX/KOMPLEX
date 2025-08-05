import BulletList from '@/components/helper/BulletList';
import { toKhmerNumbering } from '@/utils/khmerNumber';

export interface DefinitionBoxProps {
    title: string;
    content: string | string[];
}

export default function DefinitionBox({ title, content }: DefinitionBoxProps) {
    return (
        <div className=" my-6 space-y-4 ">
            <h4 className="text-black font-bold text-2xl">{title}</h4>
            {typeof content === 'string' ? (
                <p className="text-gray-700 leading-relaxed text-base">{content}</p>
            ) : (
                <BulletList content={content} />
            )}
        </div>
    )
}