function getPyramidExteriorScene() {
    let overlay = {
        sceneId: 0,
        questionMarkId: 0,
        pos: [0, 3.5, -12],
        rotY: 0.05,
        info: {
          title: "The Pyramid of Giza",
          text: `<p>The Great Pyramid of Giza is the biggest Egyptian pyramid and the tomb of Fourth Dynasty pharaoh Khufu. 
          Built in the early 26th century BC during a period of around 27 years, the pyramid is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact. 
          As part of the Giza pyramid complex, it borders present-day Giza in Greater Cairo, Egypt. 
          It is at the most Northern end of the line of the 3 Pyramids of Giza. 
          </p>
          <p>Initially standing at 146.6 metres (481 feet), the Great Pyramid was the tallest man-made structure in the world for more than 3,800 years. 
          Over time, most of the smooth white limestone casing was removed, which lowered the pyramid's height to the present 138.5 metres (454.4 ft). 
          What is seen today is the underlying core structure. 
          The base was measured to be about 230.3 metres (755.6 ft) square, giving a volume of roughly 2.6 million cubic metres (92 million cubic feet), which includes an internal hillock.
          </p>`,
          image: "img/khufu.jpg",
          imageCaption: "A Statue of Khufu."
        }
      };
      let questionMark = {
        id: 0,
        sceneId: 0,
        pos: [0, 1.5, -5],
        rotY: -Math.PI/2,
        rotX: Math.PI / 12,
        caption: "The Great Pyramid of Giza",
        captionPos: [0, 3, -18],
        overlay: overlay
      };
      let scene0 = {
        tourId: 1,
        id: 0,
        title: "Exterior",
        background: "textures/pyramid.jpg",
        questionMarks: [questionMark]
      }

      return scene0;
}

export default getPyramidExteriorScene;