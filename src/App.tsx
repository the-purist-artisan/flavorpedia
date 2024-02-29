import { Route, Routes } from "react-router-dom";
import "./App.css";
import FlavorPage from "./FlavorPage";
import Menu from "./Menu";
import { coffeeFestFlavors } from "./MenuFlavors/CoffeeFest/Flavors";
import { yearEndFlavors } from "./MenuFlavors/YearEnd/Flavors";
import { chineseNewYearFlavors } from "./MenuFlavors/ChineseNewYear/Flavors";

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
        <Route
          path="/year-end-2023"
          element={<Menu headerText="Year End 2023" flavors={yearEndFlavors} />}
        />
        <Route
          path="/chinese-new-year-2024"
          element={
            <Menu
              headerText="Chinese New Year 2024"
              flavors={chineseNewYearFlavors}
              menuBackgroundColorClass="bg-cny-2024-bg"
            />
          }
        />
      </Routes>
    </>
  );
}
