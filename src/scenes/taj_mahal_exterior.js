function getTajMahalExterior() {
    let overlay = {
        sceneId: 0,
        questionMarkId: 0,
        pos: [-1, 3.5, -12],
        rotY: Math.PI / 0.01,
        info: {
          title: "The Taj Mahal",
          text: `<p>The structure was commissioned in 1631 by the Mughal emperor Shah Jahan (r. 1628–1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex.

          </p><p>The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being "the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage".</p>
          `,
          image: "img/mumtaz_mahal.jpg",
          imageCaption: "Artistic depiction of Mumtaz Mahal."
        }
      };
      let questionMark = {
        id: 0,
        sceneId: 0,
        pos: [0, 1.5, -4.5],
        rotY: Math.PI / 2.6,
        rotX: 0.3,
        caption: "The Taj Mahal",
        captionPos: [0, 2.5, -15],
        captionRotY: Math.PI / 0.01,
        overlay: overlay
      };
      let scene0 = {
        tourId: 3,
        id: 0,
        title: "Taj Mahal",
        background: "textures/taj_mahal.jpg",
        questionMarks: [questionMark]
      }

      return scene0;
}

export default getTajMahalExterior;