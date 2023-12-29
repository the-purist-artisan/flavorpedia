import { Route, Routes } from "react-router-dom";
import "./App.css";
import FlavorPage from "./FlavorPage";
import Menu from "./Menu";
import { coffeeFestFlavors } from "./CoffeeFest/Flavors";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<>Hello</>} />
        <Route path="/:flavor" element={<FlavorPage />} />
        <Route
          path="/coffee-fest-menu"
          element={
            <Menu
              headerText="Thailand Coffee Fest 2023"
              flavors={coffeeFestFlavors}
            />
          }
        />
      </Routes>
    </>
  );
}
