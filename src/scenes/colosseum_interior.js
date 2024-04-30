function getColosseumInteriorScene() {
    let overlay = {
        sceneId: 1,
        questionMarkId: 0,
        pos: [0, 3.5, -12],
        rotY: 0.05,
        info: {
          title: "The Arena",
          text: `<p>Contrary to popular belief, gladiators didn't always fight to the death.
                In fact, estimates suggest that only 1 in 8 gladiator fights ended with a slain combatant.</p>
          <p>    
          Although it was largely populated by slaves and criminals, free men - including some upper-class patricians -
          voluntarily entered gladiator schools. Gladiators fought just a few times a year, and spent the rest of their time training.
          </p>
          <p>When they signed up, would-be gladiators swore a sacred oath (called the sacramentum gladiatorium)
          obliging them to die with honor (or else be beaten, burned, and stabbed).
          </p>
          <p>
          It's believed that the first gladiatorial duels were held in the 3rd century BC,
          as part of the funeral rites of warriors and wealthy nobles.
          </p>
          
          <p>
          The Colosseum was entirely clad in shimmering marble, had three stories of arches, and was as tall as a modern 12-story building.
          </p>
          <p>
          Like modern sports stadiums, the Colosseum had box seats for the wealthy and powerful. The higher levels ("nosebleeds")
          were reserved for the commoners, with the seats closer to the action reserved for those of the upper classes.
          </p>`,
          image: "img/arena_description.jpg",
          imageCaption: "A depiction of a gladiator fight."
        }
      };
      let questionMark = {
        id: 0,
        sceneId: 1,
        pos: [0, 0, -5],
        rotY: -Math.PI/2,
        rotX: 0,
        caption: "The Arena",
        captionPos: [0, -2.5, -18],
        overlay: overlay
      };
      let scene = {
        tourId: 0,
        id: 1,
        title: "Arena",
        background: "textures/colosseum_interior.jpg",
        questionMarks: [questionMark]
      }

      return scene;
}

export default getColosseumInteriorScene;