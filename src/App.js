import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import CursedObjects from "./pages/CursedObjects";
import Maps from "./pages/Maps";
import VoiceLines from "./pages/Voicelines";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cursedobjects" element={<CursedObjects />} />
          <Route path="maps" element={<Maps />}/>
          <Route path="voicelines" element={<VoiceLines />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
