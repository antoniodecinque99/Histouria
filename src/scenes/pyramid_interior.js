function getPyramidInteriorScene() {
    let overlay = {
        sceneId: 1,
        questionMarkId: 0,
        pos: [0, 3.5, -12],
        rotY: 0.05,
        info: {
          title: "The King's Chamber",
          text: `<p>The King's Chamber is the upmost of the three main chambers of the pyramid. 
          It is faced entirely with granite and measures 20 cubits (10.5 m; 34.4 ft) east-west by 10 cubits (5.2 m; 17.2 ft) north-south. 
          Its flat ceiling is about 11 cubits and 5 digits (5.8 m;19.0 ft) above the floor, formed by nine slabs of stone weighing in total about 400 tons. 
          All the roof beams show cracks due to the chamber having settled 2.5–5 cm (0.98–1.97 in).</p>
          <p>    
          The walls consist of five courses of blocks that are uninscribed, as was the norm for burial chambers of the 4th dynasty.
          The stones are precisely fitted together. 
          The facing surfaces are dressed to varying degrees, with some displaying remains of bosses not entirely cut away.
          The back sides of the blocks were only roughly hewn to shape, as was usual with Egyptian hard-stone facade blocks, presumably to save work.
          </p>`,
          image: "img/sarcophagus.jpg",
          imageCaption: "The Sarcophagus."
        }
      };
      let questionMark = {
        id: 0,
        sceneId: 1,
        pos: [0, 0, -5],
        rotY: -Math.PI/2,
        rotX: 0,
        caption: "The King's Chamber",
        captionPos: [0, -2.5, -18],
        overlay: overlay
      };
      let scene = {
        tourId: 1,
        id: 1,
        title: "King's Chamber",
        background: "textures/kings_chamber.jpg",
        questionMarks: [questionMark]
      }

      return scene;
}

export default getPyramidInteriorScene;