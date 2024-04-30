import { Html, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import PanoramicViewer from './panoramicViewer'
import { Suspense, useEffect, useState } from 'react'
import NextButton from './NextButton'
import MyCloseButton from './MyCloseButton.js'
import VRTutorial from './VRTutorial'
import LoadingScreen from './LoadingScreen'
import PreviousButton from './PreviousButton'
import CloseConfirmation from './CloseConfirmation'
import GuideButton from './GuideButton'
import MyUploadButton from './MyUploadButton'
import { useSearchParams } from 'react-router-dom'
import getColosseumExteriorScene from '../scenes/colosseum_exterior'
import getColosseumInteriorScene from '../scenes/colosseum_interior'
import getPyramidExteriorScene from '../scenes/pyramid_exterior'
import getPyramidInteriorScene from '../scenes/pyramid_interior'
import getPetraExteriorScene from '../scenes/petra_exterior'
import getPetraExteriorScene2 from '../scenes/petra_exterior2'
import getTajMahalExterior from '../scenes/taj_mahal_exterior'
import getTajMahalExterior2 from '../scenes/taj_mahal_exterior2'
import getAcropolisAerial from '../scenes/acropolis_aerial'
import getParthenon from '../scenes/acropolis_parthenon'
import getStonehenge from '../scenes/stonehenge'
import getStatueOfLiberty1 from '../scenes/statue_of_liberty_1'


function loadingScreen() {
  return(
  <Html center transform position={[0, 0, 0]}>
        <div>Loading...</div>
  </Html>
  );
}
function Tour() {

  const [searchParams] = useSearchParams();
  const [sceneIndex, setSceneIndex] = useState(0);
  const [isCloseConfirmationDisplayed, setCloseConfirmationDisplayed] = useState(false);
  const [isVRTutorialDisplayed, setVRTutorialDisplayed] = useState(true);
  const [isUploadDisplayed, setUploadDisplayed] = useState(false);

  // data declaration: this will be imported from database
  let scenes = [];
  let tourTitle;
  if (parseInt(searchParams.get("tourId")) === 0) {
    // load colosseum
    let scene0 = getColosseumExteriorScene();
    let scene1 = getColosseumInteriorScene();
    tourTitle = "The Colosseum"
    scenes = [scene0, scene1]
  } else if (parseInt(searchParams.get("tourId")) === 1) {
    // load pyramid
    let scene0 = getPyramidExteriorScene();
    let scene1 = getPyramidInteriorScene();
    tourTitle = "The Great Pyramid"
    scenes = [scene0, scene1]
  } else if (parseInt(searchParams.get("tourId")) === 2) {
    // load petra
    let scene0 = getPetraExteriorScene();
    let scene1 = getPetraExteriorScene2();
    tourTitle = "Petra"
    scenes = [scene0, scene1]
  } else if (parseInt(searchParams.get("tourId")) === 3) {
    // load taj
    let scene0 = getTajMahalExterior();
    let scene1 = getTajMahalExterior2();
    tourTitle = "Taj Mahal"
    scenes = [scene0, scene1]
  } else if (parseInt(searchParams.get("tourId")) === 4) {
    // load acropolis
    let scene0 = getAcropolisAerial();
    let scene1 = getParthenon();
    tourTitle = "The Acropolis"
    scenes = [scene0, scene1]
  } else if (parseInt(searchParams.get("tourId")) === 5) {
    // load stonehenge
    let scene0 = getStonehenge();
    tourTitle = "Stonehenge"
    scenes = [scene0]
  } else if (parseInt(searchParams.get("tourId")) === 6) {
    // load statue of liberty
    let scene0 = getStatueOfLiberty1();
    tourTitle = "Statue of Liberty"
    scenes = [scene0]
  } else {
    return <p style={{color: "red"}}>Invalid tour ID.</p>
  }

  let viewers = scenes.map((scene, i) => {
    return (
      <PanoramicViewer scene={scene} key={scene.id} sceneIndex={i}/>
    );
  })

  // load textures for the scenes
  return (
    <>
    <div id="canvas-container">
      <Canvas> 
        <ambientLight />
        <OrbitControls enablePan={false} minDistance={0.001} maxDistance={0.001}/>
        <Suspense fallback={loadingScreen()}>
        {viewers[sceneIndex]}
        </Suspense>
      </Canvas>
    </div>

    <NextButton sceneIndex={sceneIndex} setSceneIndex={setSceneIndex} scenesLength={scenes.length}/>
    <PreviousButton sceneIndex={sceneIndex} setSceneIndex={setSceneIndex} scenesLength={scenes.length}/>
    <MyCloseButton setDisplayed={setCloseConfirmationDisplayed} />
    <GuideButton setDisplayed={setVRTutorialDisplayed} />
    <div className="tour-title">
      <div className="tour-title-exploring">
        Now exploring:
      </div>
      <div className="tour-title-main">
        {tourTitle}
      </div>
    </div>

    <div className='scene-counter'>
      <div className='scene-counter-current'>
          Current scene: 
        </div>
        <div className='scene-counter-name'>
          {scenes[sceneIndex].title}
        </div>
      <div className="scene-counter-number">
        {sceneIndex + 1} of {scenes.length}
      </div>
    </div>

    

    <LoadingScreen />
    <VRTutorial isDisplayed={isVRTutorialDisplayed} setDisplayed={setVRTutorialDisplayed}/>
    <CloseConfirmation isDisplayed={isCloseConfirmationDisplayed} setDisplayed={setCloseConfirmationDisplayed} />
    </>
  );
}

export default Tour;