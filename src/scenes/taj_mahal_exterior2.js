function getTajMahalExterior2() {
    let overlay = {
        sceneId: 1,
        questionMarkId: 0,
        pos: [-1, 3.5, -12],
        rotY: Math.PI / 0.01,
        info: {
          title: "The Tomb",
          text: `<p>The most spectacular feature is the marble dome that surmounts the tomb. The dome is nearly 35 metres (115 ft) high which is close in measurement to the length of the base, and accentuated by the cylindrical "drum" it sits on, which is approximately 7 metres (23 ft) high. Because of its shape, the dome is often called an onion dome or amrud (guava dome). The top is decorated with a lotus design which also serves to accentuate its height. The shape of the dome is emphasised by four smaller domed chattris (kiosks) placed at its corners, which replicate the onion shape of the main dome.</p>

          <p>The dome is slightly asymmetrical.</p>
          
          <p>Their columned bases open through the roof of the tomb and provide light to the interior. Tall decorative spires (guldastas) extend from edges of base walls, and provide visual emphasis to the height of the dome. The lotus motif is repeated on both the chattris and guldastas. The dome and chattris are topped by a gilded finial which mixes traditional Persian and Hindustani decorative elements.</p>
          
          <p>The main finial was originally made of gold but was replaced by a copy made of gilded bronze in the early 19th century. This feature provides a clear example of integration of traditional Persian and Hindu decorative elements. The finial is topped by a moon, a typical Islamic motif whose horns point heavenward.</p>`,
          image: "img/taj_interior.jpg",
          imageCaption: "Sketch of the interior view of the vaulted dome over the tombs of Shah Jahan (left) and Mumtaz Mahal (right)."
        }
      };
      let questionMark = {
        id: 0,
        sceneId: 1,
        pos: [0, 1.5, -4.5],
        rotY: Math.PI / 2.6,
        rotX: 0.3,
        caption: "The Tomb",
        captionPos: [0, 2.5, -15],
        captionRotY: Math.PI / 0.01,
        overlay: overlay
      };
      let scene0 = {
        tourId: 3,
        id: 1,
        title: "The Tomb",
        background: "textures/taj_mahal_close.jpg",
        questionMarks: [questionMark]
      }

      return scene0;
}

export default getTajMahalExterior2;