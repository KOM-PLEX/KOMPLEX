import React from 'react'
import ThreeDBox from '../../../common/box/3DBox'
import { BoxGeometry } from 'three'
import { Box, Stars } from '@react-three/drei'
import { ThreeDExplanationBox } from '../../../common/box/explanation-box/3DExplanationBox'

const KineticTheory = () => {
  return (
    <div>
      <ThreeDExplanationBox 
      explanation="រូបភាព 3D"
      canvasBackground={<Stars radius={100} depth={50} count={5000} factor={4} fade />}
      canvasBackgroundColor="black"
      threeDText={[
        { content: "រូបភាព 3D", position: [0, 1, -1], fontSize: 0.8, color: "white" },
      ]}
      target={[0, 0, 0]}
      src={<Box args={[5, 5, 5]} position={[0, 0, 0]}>
        <meshStandardMaterial color="black" wireframe />
      </Box>}
      twoDText={[
        { content: "រូបភាព 3D", style: { color: "white" } },
      ]}
      height={500}
      />
    </div>
  )
}

export default KineticTheory
