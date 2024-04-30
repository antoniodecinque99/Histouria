import Tour from './components/Tour';
import MyUI from './components/MyUI';
import InteractiveQuiz from './components/InteractiveQuiz';
import Store from './components/Store';
import VRMenu from './components/VRMenu';
import CreateQuiz from './components/CreateQuiz';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuizList from './components/QuizList';
import Settings from './components/Settings';
import { BottomNavbar } from './components/Navbar'


function App() {
  const [dl_colosseum, setDL_colosseum] = useState(true);
  const [dl_pyramid, setDL_pyramid] = useState(false);
  const [dl_accropolis, setDL_accropolis] = useState(false);
  const [dl_tajmahal, setDL_tajmahal] = useState(false);
  const [dl_petra, setDL_petra] = useState(false);
  const [dl_stonehenge, setDL_stonehenge] = useState(false);
  const [dl_statueOfLiberty, setDL_statueOfLiberty] = useState(false);

  return (
    <Router>
      <Routes>
          <Route path="/"       element={<WelcomeScreen/>} />
          <Route path="/home"   element={<MyUI/>} />
          <Route path="/vrmenu" element={<VRMenu
            dl_colosseum={dl_colosseum}
            dl_pyramid={dl_pyramid}
            dl_accropolis={dl_accropolis}
            dl_tajmahal={dl_tajmahal}
            dl_petra={dl_petra}
            dl_stonehenge={dl_stonehenge}
            dl_statueOfLiberty={dl_statueOfLiberty}
            setDL_colosseum={setDL_colosseum}
            setDL_pyramid={setDL_pyramid}
            setDL_accropolis={setDL_accropolis}
            setDL_tajmahal={setDL_tajmahal}
            setDL_petra={setDL_petra}
            setDL_stonehenge={setDL_stonehenge}
            setDL_statueOfLiberty={setDL_statueOfLiberty}
          />} />
          <Route path="/tour"   element={<Tour/>} />
          <Route path="/interactiveQuiz"   element={<InteractiveQuiz/>} />
          <Route path="/quizList"   element={<QuizList/>} />
          <Route path="/store"  element={<Store
            dl_colosseum={dl_colosseum}
            dl_pyramid={dl_pyramid}
            dl_accropolis={dl_accropolis}
            dl_tajmahal={dl_tajmahal}
            dl_petra={dl_petra}
            dl_stonehenge={dl_stonehenge}
            dl_statueOfLiberty={dl_statueOfLiberty}
            setDL_colosseum={setDL_colosseum}
            setDL_pyramid={setDL_pyramid}
            setDL_accropolis={setDL_accropolis}
            setDL_tajmahal={setDL_tajmahal}
            setDL_petra={setDL_petra}
            setDL_stonehenge={setDL_stonehenge}
            setDL_statueOfLiberty={setDL_statueOfLiberty}
          />} />
          <Route path="/createQuiz"   element={<CreateQuiz/>} />
          <Route path="/settings" element={<Settings/>} />
      </Routes>
      <BottomNavbar/>
    </Router>
  );
}

/* ReactDOM.render(<App />, document.getElementById('root')) */

export default App;
