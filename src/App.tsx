import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import Footer from "./components/Footer";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import QuizTeste from "./pages/QuizTeste";
import Teste from "./pages/Teste";
import Hello from "./pages/Hello";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/quizteste" element={<QuizTeste />} />
          <Route path="/teste" element={<Teste />} />
          <Route path="/hello" element={<Hello />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        <Footer />
      </>
    </Suspense>
  );
}

export default App;
