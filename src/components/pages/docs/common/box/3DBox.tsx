import React from 'react'
import { Box } from 'lucide-react'
import BulletList from '../../../../helper/BulletList'
import { ThreeD } from '@/components/helper/ThreeD'
import { ThreeDTextItem, TwoDTextItem } from '@/types/docs/threeD'

export interface ThreeDBoxProps {
    src?: string | React.ReactNode
    scale?: number
    target?: [number, number, number]
    title?: string
    content?: string | string[] | React.ReactNode
    canvasBackground?: React.ReactNode
    canvasBackgroundColor?: string
    threeDText?: ThreeDTextItem | ThreeDTextItem[]
    twoDText?: TwoDTextItem | TwoDTextItem[]
    height?: number
}

export default function ThreeDBox({
    src = '/test.glb',
    scale = 0.1,
    target = [0, 0, 0],
    title = 'រូបភាព 3D',
    content,
    canvasBackground,
    canvasBackgroundColor,
    threeDText,
    twoDText,
    height = 500
}: ThreeDBoxProps) {
    return (
        <div className="bg-indigo-500/10 border my-6 border-indigo-600 rounded-xl p-4 shadow-lg">
            {/* Title */}
            <div className="flex items-center gap-3 mb-3">
                <Box size={20} className="text-indigo-500" />
                <h4 className="text-black font-semibold text-lg">{title}</h4>
            </div>

            {/* 3D Canvas */}
            <ThreeD
                src={src}
                scale={scale}
                target={target}
                canvasBackground={canvasBackground}
                canvasBackgroundColor={canvasBackgroundColor}
                threeDText={threeDText}
                twoDText={twoDText}
                height={height}
            />

            {/* Content Section */}
            {typeof content === 'string' ? (
                <div className="leading-relaxed text-base">{content}</div>
            ) : Array.isArray(content) ? (
                <BulletList content={content} />
            ) : (
                <div className="leading-relaxed text-base">{content}</div>
            )}
        </div>
    )
}
