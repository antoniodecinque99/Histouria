function getPetraExteriorScene() {
    let overlay = {
        sceneId: 0,
        questionMarkId: 0,
        pos: [-12, 3.5, -7],
        rotY: Math.PI / 2.7,
        info: {
          title: "Ad-Deir",
          text: `<p>Arguably one of the most iconic monuments in the Petra Archaeological Park, Ad-Deir (the Monastery) is located high in the hills northwest of the Petra city center. It is the second most commonly visited monument in Petra, after the Khazneh or "Treasury".

          </p><p>The rock-cut façade of the Monastery is 47 m (154 ft) high and 48 m (157 ft) wide.</p>
          <p>The monastery is a spectacular example of Nabataean architecture. Its blending of architectural styles is a hallmark of the dynamic and hybridised nature of Petra as a whole.</p>`,
          image: "img/petra_map.jpg",
          imageCaption: "A map of Petra."
        }
      };
      let questionMark = {
        id: 0,
        sceneId: 0,
        pos: [-4.1, 1.5, -2.5],
        rotY: Math.PI / 2.6,
        rotX: Math.PI / 0.1,
        caption: "Ad-Deir",
        captionPos: [-15, 3, -9],
        overlay: overlay
      };
      let scene0 = {
        tourId: 2,
        id: 0,
        title: "Ad-Deir",
        background: "textures/petra.jpg",
        questionMarks: [questionMark]
      }

      return scene0;
}

export default getPetraExteriorScene;