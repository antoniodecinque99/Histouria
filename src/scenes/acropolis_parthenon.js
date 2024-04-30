function getParthenon() {
    let overlay = {
        sceneId: 1,
        questionMarkId: 0,
        pos: [-1, 3.5, -12],
        rotY: Math.PI / 0.01,
        info: {
          title: "The Parthenon",
          text: `<p>The Parthenon is an ancient temple that was dedicated to the goddess Athena during the fifth century BC. Its decorative sculptures are considered some of the high points of Greek art, an enduring symbol of Ancient Greece, democracy and Western civilization.
          </p>

          <p>The Parthenon was built in thanksgiving for the Hellenic victory over Persian invaders during the Greco-Persian Wars.[10] Like most Greek temples, the Parthenon also served as the city treasury.</p>
          
          <p>The cella of the Parthenon housed the chryselephantine statue of Athena Parthenos sculpted by Phidias and dedicated in 439 or 438 BC. The appearance of this is known from other images. The decorative stonework was originally highly coloured.</p>`,
          image: "img/parthenon_doric.jpg",
          imageCaption: "The Doric order of the Parthenon."
        }
      };
      let questionMark = {
        id: 0,
        sceneId: 1,
        pos: [0, 1.5, -4.5],
        rotY: Math.PI / 2.6,
        rotX: 0.3,
        caption: "The Parthenon",
        captionPos: [0, 2.5, -15],
        captionRotY: Math.PI / 0.01,
        overlay: overlay
      };
      let scene0 = {
        tourId: 4,
        id: 1,
        title: "Parthenon",
        background: "textures/parthenon.jpg",
        questionMarks: [questionMark]
      }

      return scene0;
}

export default getParthenon;