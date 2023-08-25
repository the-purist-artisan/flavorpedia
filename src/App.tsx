import { Route, Routes } from "react-router-dom";
import "./App.css";
import FlavorPage from "./FlavorPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<>Hello</>} />
        <Route path="/test" element={<>Test</>} />
        <Route path="/:flavor" element={<FlavorPage />} />
      </Routes>
    </>
  );
}
