import { Link } from "react-router-dom";
import arrow from "../assets/Store/white-arrow.png";

import colosseum from "../assets/Store/colosseum.jpeg";
import pyramid from "../assets/Store/pyramid.jpeg";
import accropolis from "../assets/Store/accropolis.jpeg";
import tajmahal from "../assets/Store/tajmahal.jpeg";
import petra from "../assets/Store/petra.jpeg";
import stonehenge from "../assets/Store/stonehenge.jpeg";
import statueOfLiberty from "../assets/Store/statueOfLiberty.jpeg";

import colosseum2 from "../assets/Store/colosseum_2.jpg";
import pyramid2 from "../assets/Store/pyramid_2.webp";
import accropolis2 from "../assets/Store/accropolis_2.jpg";
import tajmahal2 from "../assets/Store/tajmahal_2.jpg";
import petra2 from "../assets/Store/petra2.jpeg";
import stonehenge2 from "../assets/Store/stonehenge2.jpeg";
import statueOfLiberty2 from "../assets/Store/statueOfLiberty2.jpeg";


import VRComponent from "./VRComponent";
import store from "../assets/VRMenu/store.jpeg";
import "../styles/VRMenu.css";
import { Container } from "react-bootstrap";
import TitleBar from "./TitleBar";

function VRMenu({ dl_colosseum, dl_accropolis, dl_pyramid, dl_tajmahal, dl_petra, dl_stonehenge, dl_statueOfLiberty,
    setDL_colosseum, setDL_pyramid, setDL_accropolis, setDL_tajmahal, setDL_petra, setDL_stonehenge, setDL_statueOfLiberty }) {
    return (
        <Container fluid className="main-container">
            <TitleBar title="VR Tours"></TitleBar>
            <div className="search-bar">

            </div>
            <div className="vrMenu-category-title">
                <h2>Downloaded Tours</h2>
            </div>
            <div className="vrMenu-tourList">
                <div className="vrMenu-scrollingList">
                    <VRComponent
                        backPicture={colosseum}
                        picture={colosseum2}
                        name="The Colosseum"
                        subtitle="The iconic Roman amphitheatre."
                        description="The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age."
                        size="15.6 MB"
                        downloaded={dl_colosseum}
                        setDL={setDL_colosseum}
                        tourName="Colosseum"
                        tourId={0}
                        wikiLink="https://en.wikipedia.org/wiki/Acropolis_of_Athens"
                    />
                    <VRComponent
                        backPicture={pyramid}
                        picture={pyramid2}
                        name="Pyramid of Giza"
                        subtitle="The mysterious Egyptian masterpiece."
                        description="The Great Pyramid of Giza is the biggest Egyptian pyramid and the tomb of Fourth Dynasty pharaoh Khufu. Built in the early 26th century BC during a period of around 27 years, the pyramid is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact."
                        size="24.1 MB"
                        downloaded={dl_pyramid}
                        setDL={setDL_pyramid}
                        tourName="Great-Pyramid"
                        tourId={1}
                        wikiLink="https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza"
                    />
                    <VRComponent
                        backPicture={accropolis}
                        picture={accropolis2}
                        name="Acropolis"
                        subtitle="Athens' forgotten temple."
                        description="The Acropolis of Athens is an ancient citadel located on a rocky outcrop above the city of Athens and contains the remains of several ancient buildings of great architectural and historical significance, the most famous being the Parthenon. The word acropolis is from the Greek words ἄκρον and πόλις. The term acropolis is generic and there are many other acropoleis in Greece."
                        size="102.7 MB"
                        downloaded={dl_accropolis}
                        setDL={setDL_accropolis}
                        tourId={4}
                        wikiLink="https://en.wikipedia.org/wiki/Acropolis_of_Athens"
                    />
                    <VRComponent
                        backPicture={tajmahal}
                        picture={tajmahal2}
                        name="Taj Mahal"
                        subtitle="The great temple of the East."
                        description="The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being 'the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage'. It is regarded by many as the best example of Mughal architecture and a symbol of India's rich history."
                        size="64.0 MB"
                        downloaded={dl_tajmahal}
                        setDL={setDL_tajmahal}
                        tourId={3}
                        wikiLink="https://en.wikipedia.org/wiki/Taj_Mahal"
                    />
                    <VRComponent
                        backPicture={petra}
                        picture={petra2}
                        name="Petra"
                        subtitle="The historical city of Petra"
                        description="Petra is an historical and archaeological city in southern Jordan. It is known for its rock-cut architecture and water conduit system. Established possibly as early as 312 BC as the capital city of the Nabataean kingdom, it is a symbol of Jordan, as well as Jordan's most-visited tourist attraction."
                        size="5.5GB"
                        downloaded={dl_petra}
                        setDL={setDL_petra}
                        tourId={2}
                        wikiLink="https://en.wikipedia.org/wiki/Petra"
                    />
                    <VRComponent
                        backPicture={stonehenge}
                        picture={stonehenge2}
                        name="Stonehenge"
                        subtitle="The ancient monument of Stonehenge"
                        description="Stonehenge is a prehistoric monument located in Wiltshire, England. It is made up of a ring of standing stones, each around 13 feet (4 meters) tall, 7 feet (2 meters) wide and weighing around 25 tons. The monument is believed to have been built between 3000 BC and 2000 BC and its purpose is still a mystery."
                        size="4.0GB"
                        downloaded={dl_stonehenge}
                        setDL={setDL_stonehenge}
                        tourId={5}
                        wikiLink="https://en.wikipedia.org/wiki/Stonehenge"
                    />
                    <VRComponent
                        backPicture={statueOfLiberty}
                        picture={statueOfLiberty2}
                        name="Statue of Liberty"
                        subtitle="The iconic symbol of freedom"
                        description="The Statue of Liberty is a colossal statue located on Liberty Island in New York Harbor. It was gifted to the United States by the people of France in 1886 to celebrate the centennial of American Independence. The statue, designed by French sculptor Frédéric Auguste Bartholdi, is of a robed female figure representing Libertas, the Roman goddess of freedom."
                        size="3.8GB"
                        downloaded={dl_statueOfLiberty}
                        setDL={setDL_statueOfLiberty}
                        tourId={6}
                        wikiLink="https://en.wikipedia.org/wiki/Statue_of_Liberty"
                    />
                </div>
            </div>
        </Container>
    )
}

export default VRMenu;