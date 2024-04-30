import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { Billboard, Html} from '@react-three/drei'
import { useRef, useState } from "react";
import InfoOverlay from "./InfoOverlay";




function PanoramicViewer({ scene, sceneIndex }) {
    function onClickFunction(questionMarkId) {
      document.querySelector('#info-overlay-' + sceneIndex + "-" + questionMarkId).classList.remove('displayNone');
    }
    // state variables
    // hover effect
    const [hover, setHover] = useState(false);
    const questionMarkRef = useRef();
    useFrame(() => {
      if (hover) {
        questionMarkRef.current.rotation.y += 0.05;
        questionMarkRef.current.rotation.y = questionMarkRef.current.rotation.y % (2*Math.PI);
       } else {
        questionMarkRef.current.rotation.y = -Math.PI / 2;
      }
    });

    // load textures
    const texture_background = useLoader(TextureLoader, scene.background);
    texture_background.encoding = THREE.sRGBEncoding;

    const texture_question = useLoader(TextureLoader, 'textures/question.png');
    texture_question.encoding = THREE.sRGBEncoding;

    const texture_question_hover = useLoader(TextureLoader, 'textures/question-hover.png');
    texture_question_hover.encoding = THREE.sRGBEncoding;

    // map question marks to elements
    const questionMarks = scene.questionMarks.map((mark) => 
      <>
      <group ref={questionMarkRef} position={mark.pos}
      rotation-y={mark.rotY}
      rotation-x={mark.rotX}
      key={mark.id + "-group"}>
        <mesh 
          onClick={() => {onClickFunction(mark.id)}}
          onPointerOver={() => {
            setHover(true);
          }}
          onPointerOut={() => {
           setHover(false);
          }}>
          <sphereGeometry args={[0.5, 24, 24]}/>
          <meshStandardMaterial 
            attach="material"
            map={hover ? texture_question_hover : texture_question}
          />
        </mesh>
      </group>
      {/* Floating caption */}
      <Html center transform position={mark.captionPos} rotation-y={typeof mark.captionRotY !== "undefined" ? mark.captionRotY : mark.rotY} key={mark.id + "-caption"}>
        <div className="floating-text">
          <span>
            {mark.caption}
          </span>
        </div>
      </Html>
      {/* Info Overlay */}
      <Billboard
        follow={false}
        lockX={false}
        lockY={false}
        lockZ={false} // Lock the rotation on the z axis (default=false)
      >
        <Html center transform position={mark.overlay.pos} rotation-y={mark.overlay.rotY}>
        <InfoOverlay key={mark.id + "-" + mark.sceneId} info={mark.overlay.info} sceneId={mark.overlay.sceneId} questionMarkId={mark.overlay.questionMarkId}/>
        </Html>
      </Billboard>
      </>
    );
    return (
      <>
      {/* Background panoramic picture */}
      <mesh rotation-y={Math.PI / 2.3}>
        <sphereGeometry attach="geometry" args={[5, 24, 24]} />
        <meshBasicMaterial map={texture_background} side={THREE.BackSide} fog={false} attach="material" />
      </mesh>

      {/* Question mark objects */}
      {questionMarks}
      </>
    )
}

export default PanoramicViewer;
