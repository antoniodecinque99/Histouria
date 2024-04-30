import "../styles/Store.css";
import StoreComponent from "./StoreComponent";

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

import romanForum from "../assets/Store/romanForum.jpeg"
import appianWay from "../assets/Store/appianWay.jpeg"
import sphinx from "../assets/Store/sphinx.jpeg"
import valleyOfKings from "../assets/Store/valleyOfKings.jpeg"
import delphi from "../assets/Store/delphi.jpeg"
import olympia from "../assets/Store/olympia.jpeg"
import knossos from "../assets/Store/knossos.jpeg"
import persianPersepolis from "../assets/Store/persianPersepolis.jpeg"
import mesopotamiaUr from "../assets/Store/mesopotamiaUr.jpeg"
import independenceHall from "../assets/Store/independenceHall.jpeg"
import mountRushmore from "../assets/Store/mountRushmore.jpeg"
import towerOfLondon from "../assets/Store/towerOfLondon.jpeg"
import notreDame from "../assets/Store/notreDame.jpeg"
import pompeii from "../assets/Store/pompeii.jpeg"
import pragueCastle from "../assets/Store/pragueCastle.jpeg"


import arrow from "../assets/Store/white-arrow.png";
import newTour from "../assets/Store/newTour.jpeg"
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import TitleBar from "./TitleBar";
import { useState } from "react";
import Row from "react-bootstrap/Row";

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Separator from "./Separator";

function Store({ dl_colosseum, dl_accropolis, dl_pyramid, dl_tajmahal, dl_petra, dl_stonehenge, dl_statueOfLiberty,
    setDL_colosseum, setDL_pyramid, setDL_accropolis, setDL_tajmahal, setDL_petra, setDL_stonehenge, setDL_statueOfLiberty }) {

    const [radioValue, setRadioValue] = useState(1);

    return (
        <Container fluid className="main-container main-container-store">
            <TitleBar title="Store" resizable={true}></TitleBar>

            <div style={{position: "absolute", top: "40px", left: "50%", zIndex: "1001", transform: "translate(-50%, -50%)" }}>
                <ButtonGroup>
                    <ToggleButton
                        key="1"
                        id={`radio-1`}
                        type="checkbox"
                        variant="outline-secondary"
                        name="radio"
                        value="Tours"
                        checked={radioValue === 1}
                        onChange={(e) => setRadioValue(1)}
                        style={{ borderRadius: "10px 0 0 10px", marginRight: "0px", fontWeight: "bold"}}
                        className="custom-button"
                    >
                        Tours
                    </ToggleButton>

                    <ToggleButton
                        key="2"
                        id={`radio-2`}
                        type="checkbox"
                        variant="outline-secondary"
                        name="radio"
                        value="Quizzes"
                        checked={radioValue === 2}
                        onChange={(e) => setRadioValue(2)}
                        style={{ borderRadius: "0 10px 10px 0", fontWeight: "bold"}}
                        className="custom-button"
                    >
                        Quizzes
                    </ToggleButton>

                </ButtonGroup>
            </div>


            {radioValue == 1 ?
                <>
                    <div className="vrMenu-category-title">
                        <h2>Roman History</h2>
                        <p style={{width: "70%"}}>Experience the grandeur and opulence of the Roman Empire as you learn about its powerful emperors, from Julius Caesar to Constantine the Great. Discover the daily lives of ordinary citizens and the role of religion in Roman society.</p>                    </div>
                    <div className="store-tourList">
                        <StoreComponent
                            backPicture={colosseum}
                            picture={colosseum2}
                            name="The Colosseum"
                            subtitle="The iconic Roman Amphithreatre"
                            description="The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age."
                            size="3.2GB"
                            downloaded={dl_colosseum}
                            setDL={setDL_colosseum}
                            wikiLink="https://en.wikipedia.org/wiki/Acropolis_of_Athens"
                            tourId={0}
                        />
                        <StoreComponent
                            backPicture={romanForum}
                            picture={romanForum}
                            name="The Roman Forum"
                            subtitle="The center of ancient Rome"
                            description="The Roman Forum was a rectangular forum (plaza) surrounded by the ruins of several important ancient government buildings at the center of the city of Rome. It was for centuries the center of Roman public life: the site of triumphal processions and elections; the venue for public speeches, criminal trials, and gladiatorial matches; and the nucleus of commercial affairs."
                            size="1.5GB"
                            downloaded={false}
                            wikiLink="https://en.wikipedia.org/wiki/Roman_Forum"
                            comingSoon={true}
                        />
                        <StoreComponent
                            backPicture={appianWay}
                            picture={appianWay}
                            name="The Appian Way"
                            subtitle="The first Roman road"
                            description="The Appian Way was an ancient Roman road leading southeast from Rome, considered one of the earliest and most important Roman roads."
                            size="1.2GB"
                            downloaded={false}
                            wikiLink="https://en.wikipedia.org/wiki/Appian_Way"
                            comingSoon={true}
                        />
                    </div>
                    <Separator></Separator>


                    <div className="vrMenu-category-title">
                        <h2>Egyptian History</h2>
                        <p style={{width: "70%"}}>Journey through the ancient land of Egypt and discover the secrets of the pharaohs. See the Great Pyramids of Giza, the last surviving wonder of the ancient world, and explore the mysterious Sphinx. Learn about the powerful pharaohs, from Tutankhamun to Cleopatra, and discover the role of religion in ancient Egyptian society.</p>
                    </div>
                    <div className="store-tourList">
                        <StoreComponent
                            backPicture={pyramid}
                            picture={pyramid2}
                            name="Pyramid of Giza"
                            subtitle="The mysterious Egyptian masterpiece"
                            description="The Great Pyramid of Giza is the biggest Egyptian pyramid and the tomb of Fourth Dynasty pharaoh Khufu. Built in the early 26th century BC during a period of around 27 years, the pyramid is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact."
                            size="3.6GB"
                            downloaded={dl_pyramid}
                            setDL={setDL_pyramid}
                            wikiLink="https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza"
                            tourId={1}
                        />
                        <StoreComponent
                            backPicture={sphinx}
                            picture={sphinx}
                            name="The Sphinx"
                            subtitle="The ancient statue with a human head"
                            description="The Sphinx is a mythical creature with the head of a human and the body of a lion, an important symbol in ancient Egyptian culture."
                            size="1.0GB"
                            downloaded={false}
                            wikiLink="https://en.wikipedia.org/wiki/Great_Sphinx_of_Giza"
                            comingSoon={true}
                        />

                        <StoreComponent
                            backPicture={valleyOfKings}
                            picture={valleyOfKings}
                            name="Valley of the Kings"
                            subtitle="The burial site of many pharaohs"
                            description="The Valley of the Kings is a valley in Egypt where, for a period of nearly 500 years from the 16th to 11th century BC, tombs were constructed for the Pharaohs and powerful nobles of the New Kingdom."
                            size="2.5GB"
                            downloaded={false}
                            wikiLink="https://en.wikipedia.org/wiki/Valley_of_the_Kings"
                            comingSoon={true}
                        />
                    </div>
                    <Separator></Separator>

                    <div className="vrMenu-category-title">
                        <h2>Greek History</h2>
                        <p style={{width: "70%"}}>Explore the birthplace of Western civilization in our Greek history category. Marvel at the iconic Acropolis of Athens, the Parthenon and the Erechtheion. Learn about the great philosophers, such as Socrates, Plato, and Aristotle. Discover the daily lives of ancient Greeks and the role of religion in Greek society.</p>
                    </div>
                    <div className="store-tourList">
                        <StoreComponent
                            backPicture={accropolis}
                            picture={accropolis2}
                            name="Acropolis"
                            description="The Acropolis of Athens is an ancient citadel located on a rocky outcrop above the city of Athens and contains the remains of several ancient buildings of great architectural and historical significance, the most famous being the Parthenon. The word acropolis is from the Greek words ἄκρον and πόλις. The term acropolis is generic and there are many other acropoleis in Greece."
                            subtitle="Athens' forgotten temple."
                            size="4.1GB"
                            downloaded={dl_accropolis}
                            setDL={setDL_accropolis}
                            wikiLink="https://en.wikipedia.org/wiki/Acropolis_of_Athens"
                            tourId={4}
                        />
                        <StoreComponent
                            backPicture={olympia}
                            picture={olympia}
                            name="Ancient Olympia"
                            subtitle="The Sanctuary of Zeus"
                            description="Ancient Olympia was a sanctuary of ancient Greece in Elis on the Peloponnese peninsula, dedicated to the god Zeus. The Sanctuary of Zeus hosted the ancient Olympic Games, which were held every four years throughout Classical antiquity, and it was also a religious and athletic center."
                            size="2.0GB"
                            downloaded={false}
                            wikiLink="https://en.wikipedia.org/wiki/Olympia,_Greece"
                            comingSoon={true}
                        />
                        <StoreComponent
                            backPicture={delphi}
                            picture={delphi}
                            name="Delphi"
                            subtitle="The home of the Oracle of Delphi"
                            description="Delphi was an important ancient Greek religious sanctuary dedicated to the god Apollo. The Sanctuary of Apollo at Delphi was home to the Oracle of Delphi, who was said to provide wise counsel and prophecies. It was considered to be the center of the world by ancient Greeks."
                            size="1.8GB"
                            downloaded={false}
                            wikiLink="https://en.wikipedia.org/wiki/Delphi"
                            comingSoon={true}
                        />
                        <StoreComponent
                            backPicture={knossos}
                            picture={knossos}
                            name="Knossos"
                            subtitle="The Palace of Minoan Crete"
                            description="Knossos is the largest Bronze Age archaeological site on the island of Crete and probably the ceremonial and political center of the Minoan civilization and culture. The palace of Knossos was a labyrinth of corridors, staircases and over 1,000 rooms, and it is considered as one of the most important palaces of the Minoan civilization."
                            size="2.0GB"
                            downloaded={false}
                            wikiLink="https://en.wikipedia.org/wiki/Knossos"
                            comingSoon={true}
                        />

                    </div>
                    <Separator></Separator>

                    <div className="vrMenu-category-title">
                        <h2>Indian History</h2>
                        <p style={{width: "70%"}}>Travel back in time to the land of ancient India. See the grandeur of the Taj Mahal, a symbol of love. Discover the daily lives of ancient Indians and the role of religion in Indian society. Immerse yourself in the art, architecture, and culture that has shaped the Indian subcontinent.</p>
                    </div>
                    <div className="store-tourList">
                        <StoreComponent
                            backPicture={tajmahal}
                            picture={tajmahal2}
                            name="Taj Mahal"
                            subtitle="The great temple of the East"
                            description="The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being 'the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage'. It is regarded by many as the best example of Mughal architecture and a symbol of India's rich history."
                            size="2.9GB"
                            downloaded={dl_tajmahal}
                            setDL={setDL_tajmahal}
                            wikiLink="https://en.wikipedia.org/wiki/Taj_Mahal"
                            tourId={3}
                        />
                    </div>
                    <Separator></Separator>

                    <div className="vrMenu-category-title">
                        <h2>Ancient Middle East History</h2>
                        <p style={{width: "70%"}}>Discover the rich history of the Ancient Middle East through its iconic historical sites. See Petra, the historical and archaeological city in southern Jordan, known for its rock-cut architecture and water conduit system. Explore the impressive remains of Persepolis, the ceremonial capital of the Achaemenid Empire. Learn about the ancient city of Ur, one of the most important Sumerian cities.</p>
                    </div>
                    <div className="store-tourList">
                        <StoreComponent
                            backPicture={petra}
                            picture={petra2}
                            name="Petra"
                            subtitle="The historical city of Petra"
                            description="Petra is an historical and archaeological city in southern Jordan. It is known for its rock-cut architecture and water conduit system. Established possibly as early as 312 BC as the capital city of the Nabataean kingdom, it is a symbol of Jordan, as well as Jordan's most-visited tourist attraction."
                            size="5.5GB"
                            downloaded={dl_petra}
                            setDL={setDL_petra}
                            wikiLink="https://en.wikipedia.org/wiki/Petra"
                            tourId={2}
                        />
                        <StoreComponent
                            backPicture={persianPersepolis}
                            picture={persianPersepolis}
                            name="Persepolis"
                            subtitle="The capital of the Achaemenid Empire"
                            description="Persepolis was the ceremonial capital of the Achaemenid Empire (ca. 550–330 BC) and is situated in the plain of Marvdasht in Fars province in Iran. It was a city of palaces and halls, built by Darius I and his son Xerxes I, and it was the center of the empire's administrative, political, and economic power."
                            size="1.8GB"
                            downloaded={false}
                            wikiLink="https://en.wikipedia.org/wiki/Persepolis"
                            comingSoon={true}
                        />
                        <StoreComponent
                            backPicture={mesopotamiaUr}
                            picture={mesopotamiaUr}
                            name="Ancient Ur"
                            subtitle="The birthplace of Abraham"
                            description="Ancient Ur, also known as Ur of the Chaldees, was an important Sumerian city-state in ancient Mesopotamia, located near the modern town of Tell el-Muqayyar in south Iraq's Dhi Qar Governorate. It is considered to be the birthplace of the prophet Abraham, and one of the most important cities of the Sumerian civilization."
                            size="1.5GB"
                            downloaded={false}
                            wikiLink="https://en.wikipedia.org/wiki/Ur"
                            comingSoon={true}
                        />
                    </div>
                    <Separator></Separator>


                    <div className="vrMenu-category-title">
                        <h2>European History</h2>
                        <p style={{width: "70%"}}>Discover the rich history of Europe through its iconic historical sites. See Stonehenge, the ancient monument in England. Explore the Tower of London, a historic castle and royal palace. Learn about Notre-Dame, the famous cathedral in Paris. Discover Pompeii, the preserved Roman city.</p>
                    </div>
                    <div className="store-tourList">
                        <StoreComponent
                            backPicture={stonehenge}
                            picture={stonehenge2}
                            name="Stonehenge"
                            subtitle="The ancient monument of Stonehenge"
                            description="Stonehenge is a prehistoric monument located in Wiltshire, England. It is made up of a ring of standing stones, each around 13 feet (4 meters) tall, 7 feet (2 meters) wide and weighing around 25 tons. The monument is believed to have been built between 3000 BC and 2000 BC and its purpose is still a mystery."
                            size="4.0GB"
                            downloaded={dl_stonehenge}
                            setDL={setDL_stonehenge}
                            wikiLink="https://en.wikipedia.org/wiki/Stonehenge"
                            tourId={5}
                        />
                        <StoreComponent
                            backPicture={towerOfLondon}
                            picture={towerOfLondon}
                            name="Tower of London"
                            subtitle="The historic castle and royal palace"
                            description="The Tower of London is a historic castle and royal palace located on the north bank of the River Thames in London, England. It has served as a royal palace, a prison, a treasury, a menagerie, and a jeweler's workshop, and it is now a tourist attraction and a UNESCO World Heritage Site."
                            size="2.5GB"
                            downloaded={false}
                            wikiLink="https://en.wikipedia.org/wiki/Tower_of_London"
                            comingSoon={true}
                        />
                        <StoreComponent
                            backPicture={notreDame}
                            picture={notreDame}
                            name="Notre-Dame de Paris"
                            subtitle="The iconic gothic cathedral"
                            description="Notre-Dame de Paris, also known as Notre-Dame Cathedral or simply Notre-Dame, is a medieval Catholic cathedral on the Île de la Cité in the 4th arrondissement of Paris, France. It is widely considered one of the finest examples of French Gothic architecture and is a UNESCO World Heritage Site."
                            size="2.0GB"
                            downloaded={false}
                            wikiLink="https://en.wikipedia.org/wiki/Notre-Dame_de_Paris"
                            comingSoon={true}
                        />
                        <StoreComponent
                            backPicture={pompeii}
                            picture={pompeii}
                            name="Pompeii"
                            subtitle="The Roman city buried by volcanic ash"
                            description="Pompeii was an ancient Roman city near modern Naples in the Campania region of Italy, in the territory of the comune of Pompei. Pompeii, along with Herculaneum and many villas in the surrounding area, was buried under 4 to 6 m (13 to 20 ft) of volcanic ash and pumice in the eruption of Mount Vesuvius in AD 79."
                            size="2.5GB"
                            downloaded={false}
                            wikiLink="https://en.wikipedia.org/wiki/Pompeii"
                            comingSoon={true}
                        />

                        <StoreComponent
                            backPicture={pragueCastle}
                            picture={pragueCastle}
                            name="Prague Castle"
                            subtitle="The historical seat of Czech kings"
                            description="Prague Castle is a castle complex in Prague, Czech Republic, dating back to the 9th century. It has served as the historical seat of Czech kings, Holy Roman Emperors, and presidents of Czechoslovakia. The castle is the largest ancient castle in the world and is a UNESCO World Heritage Site."
                            size="3.0GB"
                            downloaded={false}
                            wikiLink="https://en.wikipedia.org/wiki/Prague_Castle"
                            comingSoon={true}
                        />


                    </div>
                    <Separator></Separator>

                    <div className="vrMenu-category-title">
                        <h2>American History</h2>
                        <p style={{width: "70%"}}>Explore the rich history of America, from the colonial period to the present day. See the iconic Statue of Liberty, a symbol of freedom and democracy. Learn about the American Revolution and the founding of the United States. Discover the Civil War, one of the most significant events in American history.</p>
                    </div>
                    <div className="store-tourList">
                        <StoreComponent
                            backPicture={statueOfLiberty}
                            picture={statueOfLiberty2}
                            name="Statue of Liberty"
                            subtitle="The iconic symbol of freedom"
                            description="The Statue of Liberty is a colossal statue located on Liberty Island in New York Harbor. It was gifted to the United States by the people of France in 1886 to celebrate the centennial of American Independence. The statue, designed by French sculptor Frédéric Auguste Bartholdi, is of a robed female figure representing Libertas, the Roman goddess of freedom."
                            size="3.8GB"
                            downloaded={dl_statueOfLiberty}
                            setDL={setDL_statueOfLiberty}
                            wikiLink="https://en.wikipedia.org/wiki/Statue_of_Liberty"
                            tourId={6}
                        />
                        <StoreComponent
                            backPicture={independenceHall}
                            picture={independenceHall}
                            name="Independence Hall"
                            subtitle="Where Declaration & Constitution were written"
                            description="Independence Hall is a building in Philadelphia, Pennsylvania, where the Declaration of Independence and the U.S. Constitution were adopted. It is considered one of the most important symbols of American freedom and democracy, and it is a UNESCO World Heritage Site."
                            size="1.0GB"
                            downloaded={false}
                            wikiLink="https://en.wikipedia.org/wiki/Independence_Hall"
                            comingSoon={true}
                        />

                        <StoreComponent
                            backPicture={mountRushmore}
                            picture={mountRushmore}
                            name="Mount Rushmore"
                            subtitle="The iconic American monument"
                            description="Mount Rushmore is a massive sculpture carved into the granite face of Mount Rushmore in the Black Hills region of South Dakota, USA. It features the faces of four American Presidents, George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln, and it is a symbol of American democracy and national identity."
                            size="1.5GB"
                            downloaded={false}
                            wikiLink="https://en.wikipedia.org/wiki/Mount_Rushmore"
                            comingSoon={true}
                        />
                    </div>
                    <Separator></Separator>
                </>
                :   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80%' }}>
                        <h1 className="title" style={{ textAlign: 'center' }}>Coming Soon :)</h1>
                    </div>
            }
        </Container>
    );
}

export default Store;