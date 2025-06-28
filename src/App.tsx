import { Route, Routes } from "react-router-dom";
import "./App.css";
import FlavorPage from "./FlavorPage";
import { coffeeFestFlavors } from "./MenuFlavors/CoffeeFest/Flavors";
import { yearEndFlavors } from "./MenuFlavors/YearEnd/Flavors";
import { chineseNewYearFlavors } from "./MenuFlavors/ChineseNewYear/Flavors";
import { tasteOfTeaFlavors } from "./MenuFlavors/TasteOfTea/Flavors";
import { midtownCoffeeAndSpirit } from "./MenuFlavors/CoffeeAndSpirits/Flavors";
import Menu from "./Menu";
import PrintableMenu from "./PrintableMenu";
import { sweetBakery0824 } from "./MenuFlavors/SweetBakery-08-24/Flavors";
import { thailandCoffeeFest2024 } from "./MenuFlavors/CoffeeFest-07-24/Flavors";
import { thailandCoffeeHub2024 } from "./MenuFlavors/CoffeeHub-10-24/Flavors";
import { tastOfTea122024 } from "./MenuFlavors/TasteOfTea-12-24/Flavors";
import { tastOfTea032025 } from "./MenuFlavors/TasteOfTea-03-25/Flavors";
import { tcf0725 } from "./MenuFlavors/CoffeeFest-07-25/Flavors";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<>Hello</>} />
        <Route path="/:flavor" element={<FlavorPage />} />
        <Route
          path="/ctw-tea-2024"
          element={
            <Menu headerText="Taste of Tea 2024" flavors={tasteOfTeaFlavors} />
          }
        />
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
        <Route
          path="/midtown-coffee-spirit-2024"
          element={
            <Menu
              headerText="Midtown Coffee & Spirit 2024"
              flavors={midtownCoffeeAndSpirit}
            />
          }
        />
        <Route
          path="/coffee-fest-2024"
          element={
            <Menu
              headerText="Thailand Coffee Fest 2024"
              flavors={thailandCoffeeFest2024}
            />
          }
        />
        <Route
          path="/sweet-bakery-2024"
          element={
            <Menu headerText="Sweet Bakery 2024" flavors={sweetBakery0824} />
          }
        />
        <Route
          path="/coffee-hub-2024"
          element={
            <Menu
              headerText="Thailand Coffee Hub 2024"
              flavors={thailandCoffeeHub2024}
            />
          }
        />
        <Route
          path="/tot-12-24"
          element={
            <Menu
              headerText="Taste of Tea December 2024"
              flavors={tastOfTea122024}
            />
          }
        />
        <Route
          path="/tot-03-25"
          element={
            <Menu
              headerText="Taste of Tea March 2025"
              flavors={tastOfTea032025}
            />
          }
        />
        <Route
          path="/tcf-07-25"
          element={
            <Menu
              headerText="Thailand Coffee Fest July 2025"
              flavors={tcf0725}
            />
          }
        />
        {/* Access route "/print" with inspected device of 600 x 932px */}
        {/* <Route
          path="/print"
          element={
            <PrintableMenu
              headerText="Taste of Tea March 2025"
              flavors={tastOfTea032025}
            />
          }
        /> */}
      </Routes>
    </>
  );
}
