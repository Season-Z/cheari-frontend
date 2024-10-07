import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { FC } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

function STLModel() {
  const geometry = useLoader(STLLoader, '/models/model.stl');
  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function OBJModel() {
  const obj = useLoader(OBJLoader, '/models/model.obj');
  return <primitive object={obj} />;
}

const ThreeRender: FC<{ type: 'obj' | 'stl' }> = ({ type }) => {
  return (
    <Canvas>
      {/* 控制相机 */}
      <OrbitControls />
      {/* 环境光 */}
      <ambientLight intensity={0.5} />
      {/* 点光 */}
      <pointLight position={[10, 10, 10]} />
      {/* STL 模型 */}
      <STLModel />
      {/* OBJ 模型 */}
      <OBJModel />
    </Canvas>
  );
};

export default ThreeRender;
