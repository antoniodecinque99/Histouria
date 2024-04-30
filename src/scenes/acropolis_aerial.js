function getAcropolisAerial() {
    let overlay = {
        sceneId: 0,
        questionMarkId: 0,
        pos: [-1, 3.5, -12],
        rotY: Math.PI / 0.01,
        info: {
          title: "The Athenian Acropolis",
          text: `<p>The Acropolis of Athens is an ancient citadel located on a rocky outcrop above the city of Athens and contains the remains of several ancient buildings of great architectural and historical significance, the most famous being the Parthenon.</p>

          <p>The term acropolis is generic and there are many other acropoleis in Greece. During ancient times the Acropolis of Athens was known also more properly as Cecropia, after the legendary serpent-man, Cecrops, the supposed first Athenian king.</p>
          
          <p>While there is evidence that the hill was inhabited as far back as the fourth millennium BC, it was Pericles (c. 495–429 BC) in the fifth century BC who coordinated the construction of the buildings whose present remains are the site's most important ones, including the Parthenon, the Propylaea, the Erechtheion and the Temple of Athena Nike. The Parthenon and the other buildings were seriously damaged during the 1687 siege by the Venetians during the Morean War when gunpowder being stored by the then Turkish rulers in the Parthenon was hit by a Venetian bombardment and exploded.</p>`,
          image: "img/acropolis_destruction.jpg",
          imageCaption: "The destruction of the Acropolis by the Persians."
        }
      };
      let questionMark = {
        id: 0,
        sceneId: 0,
        pos: [0, 1.5, -4.5],
        rotY: Math.PI / 2.6,
        rotX: 0.3,
        caption: "The Acropolis of Athens",
        captionPos: [0, 2.5, -15],
        captionRotY: Math.PI / 0.01,
        overlay: overlay
      };
      let scene0 = {
        tourId: 4,
        id: 0,
        title: "Acropolis",
        background: "textures/acropolis_aerial.jpg",
        questionMarks: [questionMark]
      }

      return scene0;
}

export default getAcropolisAerial;