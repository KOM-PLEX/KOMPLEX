import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Stars, Text, Html } from '@react-three/drei'
import { Box } from 'lucide-react'
import { Object3D, Mesh, ColorRepresentation } from 'three'
import BulletList from '../../../../helper/BulletList'

interface ThreeDTextItem {
    content: string
    position?: [number, number, number]
    fontSize?: number
    color?: string
    rotation?: [number, number, number]
}

interface TwoDTextItem {
    content: string
    style?: React.CSSProperties
}

export interface ThreeDBoxProps {
    modelUrl?: string
    scale?: number
    target?: [number, number, number]
    title?: string
    content?: string | string[] | React.ReactNode
    canvasBackground?: React.ReactNode
    canvasBackgroundColor?: ColorRepresentation
    threeDText?: ThreeDTextItem | ThreeDTextItem[]
    twoDText?: TwoDTextItem | TwoDTextItem[]
    height?: number
}

const Model = ({ modelUrl = '/test.glb', scale = 0.1 }: { modelUrl: string; scale: number }) => {
    const { scene } = useGLTF(modelUrl)

    useEffect(() => {
        const findMesh = (obj: Object3D): Mesh | null => {
            if (obj.type === 'Mesh') return obj as Mesh
            for (const child of obj.children) {
                const found = findMesh(child)
                if (found) return found
            }
            return null
        }
        const mesh = findMesh(scene)
        if (mesh) mesh.position.set(0, 0, 0)
    }, [scene])

    return <primitive object={scene} scale={scale} position={[0, 0, 0]} />
}

export default function ThreeDBox({
    modelUrl = '/test.glb',
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
            <div className="w-full rounded-xl overflow-hidden mb-4 border border-indigo-200" style={{ height: `${height}px` }}>
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                    <color attach="background" args={[canvasBackgroundColor || 'white']} />

                    <OrbitControls
                        enablePan
                        enableZoom
                        enableRotate
                        minDistance={1}
                        maxDistance={20}
                        target={target}
                    />

                    <Suspense fallback={null}>
                        <Model modelUrl={modelUrl} scale={scale} />
                    </Suspense>

                    {/* Procedural or custom background */}
                    {canvasBackground}

                    {/* 3D Text */}
                    {threeDText && (
                        Array.isArray(threeDText) ? (
                            threeDText.map((item, index) => (
                                <Text
                                    key={index}
                                    position={item.position || [0, 2, -5]}
                                    fontSize={item.fontSize || 0.5}
                                    color={item.color || "white"}
                                    anchorX="center"
                                    anchorY="middle"
                                    rotation={item.rotation || [0, 0, 0]}
                                >
                                    {item.content}
                                </Text>
                            ))
                        ) : (
                            <Text
                                position={threeDText.position || [0, 2, -5]}
                                fontSize={threeDText.fontSize || 0.5}
                                color={threeDText.color || "white"}
                                anchorX="center"
                                anchorY="middle"
                                rotation={threeDText.rotation || [0, 0, 0]}
                            >
                                {threeDText.content}
                            </Text>
                        )
                    )}

                    {/* 2D Text */}
                    {twoDText && (
                        <Html fullscreen>
                            {Array.isArray(twoDText) ? (
                                twoDText.map((item, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            color: 'white',
                                            fontSize: '1.2rem',
                                            textAlign: 'center',
                                            ...item.style
                                        }}
                                    >
                                        {item.content}
                                    </div>
                                ))
                            ) : (
                                <div
                                    style={{
                                        color: 'white',
                                        fontSize: '1.2rem',
                                        textAlign: 'center',
                                        ...twoDText.style
                                    }}
                                >
                                    {twoDText.content}
                                </div>
                            )}
                        </Html>
                    )}

                    <ambientLight intensity={0.5} />
                    <directionalLight position={[3, 5, 2]} intensity={1} />
                </Canvas>
            </div>

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
