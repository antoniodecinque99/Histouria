function getStonehenge() {
    let overlay = {
        sceneId: 0,
        questionMarkId: 0,
        pos: [-1, 3.5, -12],
        rotY: Math.PI / 0.01,
        info: {
          title: "Stonehenge",
          text: `<p>Stonehenge is a prehistoric monument on Salisbury Plain in Wiltshire, England, two miles (3 km) west of Amesbury. It consists of an outer ring of vertical sarsen standing stones, each around 13 feet (4.0 m) high, seven feet (2.1 m) wide, and weighing around 25 tons, topped by connecting horizontal lintel stones.

          </p><p>Inside is a ring of smaller bluestones. Inside these are free-standing trilithons, two bulkier vertical sarsens joined by one lintel. The whole monument, now ruinous, is aligned towards the sunrise on the summer solstice. The stones are set within earthworks in the middle of the densest complex of Neolithic and Bronze Age monuments in England, including several hundred tumuli (burial mounds)</p>`,
          image: "img/stonehenge_painting.jpg",
          imageCaption: "Earliest known painting of Stonehenge (1573-5)."
        }
      };
      let questionMark = {
        id: 0,
        sceneId: 0,
        pos: [0, 1.5, -4.5],
        rotY: Math.PI / 2.6,
        rotX: 0.3,
        caption: "Stonehenge",
        captionPos: [0, 2.5, -15],
        captionRotY: Math.PI / 0.01,
        overlay: overlay
      };
      let scene0 = {
        tourId: 5,
        id: 0,
        title: "Stonehenge",
        background: "textures/stonehenge1.jpg",
        questionMarks: [questionMark]
      }

      return scene0;
}

export default getStonehenge;