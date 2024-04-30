function getColosseumExteriorScene() {
    let overlay = {
        sceneId: 0,
        questionMarkId: 0,
        pos: [0, 3.5, -12],
        rotY: 0.05,
        info: {
          title: "The Colosseum",
          text: `<p><strong>The Colosseum</strong> is an oval <strong>amphitheatre</strong> in the centre of the city of <strong>Rome, Italy</strong>, just east of the Roman Forum.</p>
          <p>    
              It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age.
          </p>
          <p>Construction began under the <strong>emperor Vespasian</strong> in 72 AD and was completed in 80 AD under his successor and heir, <strong>Titus. </strong>
          Further modifications were made during the reign of <strong>Domitian.</strong>
          </p>
          <p>These three emperors are known as the <strong>Flavian</strong> dynasty, and the amphitheatre was named the <strong>Flavian
              Amphitheatre</strong> by archaeologists.
          </p>`,
          image: "img/vespasian.jpg",
          imageCaption: "A bust of Vespasian."
        }
      };
      let questionMark = {
        id: 0,
        sceneId: 0,
        pos: [0, 1.5, -5],
        rotY: -Math.PI/2,
        rotX: Math.PI / 12,
        caption: "The Colosseum",
        captionPos: [0, 3, -18],
        overlay: overlay
      };
      let scene0 = {
        tourId: 0,
        id: 0,
        title: "Exterior",
        background: "textures/colosseum.jpg",
        questionMarks: [questionMark]
      }

      return scene0;
}

export default getColosseumExteriorScene;