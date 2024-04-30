function getStatueOfLiberty1() {
    let overlay = {
        sceneId: 0,
        questionMarkId: 0,
        pos: [-1, 3.5, -12],
        rotY: Math.PI / 0.01,
        info: {
          title: "The Statue of Liberty",
          text: `<p>The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States. The copper statue, a gift from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel. The statue was dedicated on October 28, 1886.</p>

          <p>The statue is a figure of Libertas, a robed Roman liberty goddess. She holds a torch above her head with her right hand, and in her left hand carries a tabula ansata inscribed JULY IV MDCCLXXVI (July 4, 1776 in Roman numerals), the date of the U.S. Declaration of Independence. A broken shackle and chain lie at her feet as she walks forward, commemorating the recent national abolition of slavery. After its dedication, the statue became an icon of freedom and of the United States, seen as a symbol of welcome to immigrants arriving by sea.</p>`,
          image: "img/statue_head.jpg",
          imageCaption: "The statue's head at the Paris Expo (1878)."
        }
      };
      let questionMark = {
        id: 0,
        sceneId: 0,
        pos: [0, 1.5, -4.5],
        rotY: Math.PI / 2.6,
        rotX: 0.3,
        caption: "The Statue of Liberty",
        captionPos: [0, 2.5, -15],
        captionRotY: Math.PI / 0.01,
        overlay: overlay
      };
      let scene0 = {
        tourId: 6,
        id: 0,
        title: "Statue of Liberty",
        background: "textures/statue_liberty.jpg",
        questionMarks: [questionMark]
      }

      return scene0;
}

export default getStatueOfLiberty1;