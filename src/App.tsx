import { Route, Routes } from "react-router-dom";
import "./App.css";
import FlavorPage from "./FlavorPage";
import CoffeeFestMenu from "./CoffeeFestMenu";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<>Hello</>} />
        <Route path="/:flavor" element={<FlavorPage />} />
        <Route path="/coffee-fest-menu" element={<CoffeeFestMenu />} />
      </Routes>
    </>
  );
}
