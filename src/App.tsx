import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CharactersPage } from "./pages/CharactersPage";
import { CharacterDetailsPage } from "./pages/CharacterDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/character/:id" element={<CharacterDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
