import { Link } from "react-router-dom";
import arrow from "../assets/Store/white-arrow.png";
import colosseum from "../assets/Store/colosseum.jpeg";
import pyramid from "../assets/Store/pyramid.jpeg";
import accropolis from "../assets/Store/accropolis.jpeg";
import tajmahal from "../assets/Store/tajmahal.jpeg";
import colosseum2 from "../assets/Store/colosseum_2.jpg";
import pyramid2 from "../assets/Store/pyramid_2.webp";
import accropolis2 from "../assets/Store/accropolis_2.jpg";
import tajmahal2 from "../assets/Store/tajmahal_2.jpg";
import VRComponent from "./VRComponent";
import store from "../assets/VRMenu/store.jpeg";
import "../styles/VRMenu.css";

function VRMenu({ dl_colosseum, dl_accropolis, dl_pyramid, dl_tajmahal, setDL_colosseum, setDL_pyramid, setDL_accropolis, setDL_tajmahal }) {
    return (
        <div className="vrmenu">
            <Link to="/home">
                <button className="vrmenu-back"><img className="back-img" src={arrow} alt="back arrow"/> Back</button>
            </Link>
            
            <h1>Histouria</h1>
            <h2>Virtual Reality Tour:</h2>
            <div className="vrMenu-tourList">
                <div className="vrMenu-scrollingList">
                    <VRComponent 
                        backPicture={colosseum}
                        picture={colosseum2}
                        name="The Colosseum"
                        description="The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age."
                        size="3.2GB"
                        downloaded={dl_colosseum}
                        setDL={setDL_colosseum}
                        wikiLink="https://en.wikipedia.org/wiki/Acropolis_of_Athens"
                    />
                    <VRComponent 
                        backPicture={pyramid}
                        picture={pyramid2}
                        name="The Great Pyramid of Giza"
                        description="The Great Pyramid of Giza is the biggest Egyptian pyramid and the tomb of Fourth Dynasty pharaoh Khufu. Built in the early 26th century BC during a period of around 27 years, the pyramid is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact."
                        size="3.6GB"
                        downloaded={dl_pyramid}
                        setDL={setDL_pyramid}
                        wikiLink="https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza"
                    />
                    <VRComponent 
                        backPicture={accropolis}
                        picture={accropolis2}
                        name="The Acropolis of Athens"
                        description="The Acropolis of Athens is an ancient citadel located on a rocky outcrop above the city of Athens and contains the remains of several ancient buildings of great architectural and historical significance, the most famous being the Parthenon. The word acropolis is from the Greek words ἄκρον and πόλις. The term acropolis is generic and there are many other acropoleis in Greece."
                        size="4.1GB"
                        downloaded={dl_accropolis}
                        setDL={setDL_accropolis}
                        wikiLink="https://en.wikipedia.org/wiki/Acropolis_of_Athens"
                    />
                    <VRComponent 
                        backPicture={tajmahal}
                        picture={tajmahal2}
                        name="The Taj Mahal"
                        description="The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being 'the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage'. It is regarded by many as the best example of Mughal architecture and a symbol of India's rich history."
                        size="2.9GB"
                        downloaded={dl_tajmahal}
                        setDL={setDL_tajmahal}
                        wikiLink="https://en.wikipedia.org/wiki/Taj_Mahal"
                    />
                    <Link to="/store">
                        <div className="vrMenuComponent">
                            <div className="vrMenuComponent-item">
                                <img className="item-img" src={store} alt="store"/>
                                <h3>Go to the Store to add new Tours</h3>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default VRMenu;