function getPetraExteriorScene2() {
    let overlay = {
        sceneId: 1,
        questionMarkId: 0,
        pos: [-1, 3.5, -12],
        rotY: Math.PI / 0.01,
        info: {
          title: "The Treasury",
          text: `<p>The structure is believed to have been the mausoleum of the Nabatean King Aretas IV in the 1st century AD. It is one of the most popular tourist attractions in both Jordan and the region. It became known as "Al-Khazneh", or The Treasury, in the early 19th century by the area's Bedouins as they had believed it contained treasures.

          </p><p>One legend is that the Egyptian Pharaoh and some of his armies escaped the closing of the Red Sea, created the Khazneh by magic as a safe place for his treasury, and continued in his pursuit of Moses.</p>
          `,
          image: "img/petra_night.jpg",
          imageCaption: "The Treasury at night."
        }
      };
      let questionMark = {
        id: 0,
        sceneId: 1,
        pos: [0, 1.5, -4.5],
        rotY: Math.PI / 2.6,
        rotX: 0.3,
        caption: "The Treasury",
        captionPos: [0, 2.5, -15],
        captionRotY: Math.PI / 0.01,
        overlay: overlay
      };
      let scene0 = {
        tourId: 2,
        id: 1,
        title: "Treasury",
        background: "textures/petra_treasury.jpg",
        questionMarks: [questionMark]
      }

      return scene0;
}

export default getPetraExteriorScene2;