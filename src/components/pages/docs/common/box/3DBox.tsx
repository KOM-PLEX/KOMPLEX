// ModelViewer.tsx (TSX because you're using types)
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Box } from 'lucide-react'
import { Object3D, PerspectiveCamera } from 'three'

interface ModelProps {
    url: string
    scale?: number
    position?: [number, number, number]
    rotation?: [number, number, number]
}

export interface ThreeDBoxProps {
    modelUrl: string
    scale?: number
    position?: [number, number, number]
    rotation?: [number, number, number]
    style?: React.CSSProperties
    title?: React.ReactNode
    content?: string | string[] | React.ReactNode
}

const Model = ({ url, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: ModelProps) => {
    const { scene } = useGLTF(url)
    return (
        <primitive
            object={scene}
            scale={scale}
            position={[0, 0, 0]}
            rotation={rotation}
        />
    )
}

function CameraController({ theta, phi, radius }: { theta: number; phi: number; radius: number }) {
    const cameraRef = useRef<PerspectiveCamera>(null)
    useFrame(({ camera }) => {
        // Spherical to Cartesian
        const x = radius * Math.sin(phi) * Math.cos(theta)
        const y = radius * Math.cos(phi)
        const z = radius * Math.sin(phi) * Math.sin(theta)
        camera.position.set(x, y, z)
        camera.lookAt(0, 0, 0)
    })
    return null
}

export default function ThreeDBox({
    modelUrl,
    scale,
    position,
    rotation,
    style = { height: '1000px', width: '100%' },
    title = 'រូបភាព 3D',
    content,
}: ThreeDBoxProps) {
    // Camera spherical coordinates
    const [theta, setTheta] = useState(Math.PI / 2) // azimuthal
    const [phi, setPhi] = useState(Math.PI / 2) // polar
    const radius = 5
    const [isDragging, setIsDragging] = useState(false)
    const [lastPos, setLastPos] = useState<[number, number] | null>(null)

    const handlePointerDown = (e: React.PointerEvent) => {
        setIsDragging(true)
        setLastPos([e.clientX, e.clientY])
    }

    const handlePointerMove = (e: React.PointerEvent) => {
        if (isDragging && lastPos) {
            const deltaX = e.clientX - lastPos[0]
            const deltaY = e.clientY - lastPos[1]
            // Sensitivity factors
            setTheta((prev) => prev - deltaX * 0.01)
            setPhi((prev) => {
                let next = prev - deltaY * 0.01
                // Clamp phi to avoid flipping
                next = Math.max(0.1, Math.min(Math.PI - 0.1, next))
                return next
            })
            setLastPos([e.clientX, e.clientY])
        }
    }

    const handlePointerUp = () => {
        setIsDragging(false)
        setLastPos(null)
    }

    return (
        <div className="bg-indigo-500/10 border my-6 border-indigo-600 rounded-xl p-4 shadow-lg">
            {/* Title */}
            <div className="flex items-center gap-3 mb-3">
                <Box size={20} className="text-indigo-500" />
                <h4 className="text-black font-semibold text-lg">{title}</h4>
            </div>

            {/* 3D Canvas */}
            <div
                className="w-full h-[500px] rounded-xl overflow-hidden mb-4 border border-indigo-200 bg-white cursor-grab active:cursor-grabbing"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
            >
                <Canvas style={style} camera={{ position: [0, 0, radius], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[3, 5, 2]} intensity={1} />
                    <Suspense fallback={null}>
                        <Model
                            url={modelUrl}
                            scale={scale}
                            position={[0, 0, 0]}
                            rotation={rotation}
                        />
                    </Suspense>
                    <CameraController theta={theta} phi={phi} radius={radius} />
                </Canvas>
            </div>

            {/* Content */}
            {content && (
                typeof content === 'string' ? (
                    <p className="leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }} />
                ) : Array.isArray(content) ? (
                    <ul className="list-disc pl-6 text-base">
                        {content.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <div className="leading-relaxed text-base">{content}</div>
                )
            )}
        </div>
    )
}
