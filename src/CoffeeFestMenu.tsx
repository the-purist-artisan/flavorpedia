import { useRef } from "react";
import { coffeeFestFlavors } from "./CoffeeFest/Flavors";
import "./index.css";

export default function CoffeeFestMenu() {
  const topRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<Map<string, HTMLDivElement> | null>(null);

  const getMap = () => {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  };

  const scrollToFlavor = (id: string) => {
    const map = getMap();
    const node = map.get(id);
    if (node)
      node.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
  };

  return (
    <div className="">
      <div
        className="fixed bottom-10 right-10"
        onClick={() => {
          if (topRef.current)
            topRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
        }}
      >
        <img
          src={
            window.location.origin +
            "/flavorpedia/images/coffee-fest/up-arrow.svg"
          }
          width={"40px"}
        />
      </div>
      <div
        ref={topRef}
        className={"bg-menu-bg py-8 flex flex-col items-center text-white"}
      >
        <div className="mb-6">
          <img
            src={
              window.location.origin +
              "/flavorpedia/images/coffee-fest/logo.svg"
            }
            height={"100px"}
          />
        </div>
        <div className="menu-header font-benaco-one mb-6 w-fit text-center font-normal text-key-header leading-key-header">
          Thailand Coffee
          <br />
          Fest 2023
        </div>
        <div className="font-gt-super-text-bold text-lg mb-6">Menu</div>
        {coffeeFestFlavors.map((flavor) => {
          return (
            <div
              key={`${flavor.id}-category-button`}
              onClick={() => scrollToFlavor(flavor.id)}
              className="border-solid border border-white text-white mb-6 last:mb-0 px-4 py-2 w-fit text-lg leading-5 rounded-3xl"
            >
              {flavor.categoryButtonText}
            </div>
          );
        })}
        <div>
          <img
            src={
              window.location.origin +
              "/flavorpedia/images/coffee-fest/down-arrow.svg"
            }
            height={"27px"}
          />
        </div>
      </div>
      {coffeeFestFlavors.map((flavor) => {
        const textColorClassName = flavor.textColorClass
          ? flavor.textColorClass
          : "text-white";
        return (
          <div
            ref={(node) => {
              const map = getMap();
              if (node) {
                map.set(flavor.id, node);
              } else {
                map.delete(flavor.id);
              }
            }}
            key={flavor.name}
            className={`py-10 px-6 flex flex-col items-center text-center text-white gap-y-6 ${flavor.backgroundColorClass} ${textColorClassName}`}
          >
            {/* Cup image */}
            <img
              src={`${window.location.origin}/flavorpedia/images/coffee-fest/cups/${flavor.imageName}.png`}
              width={"240px"}
            />
            {/* Flavor name */}
            <div className="font-ibm-plex-thai text-2xl font-semibold leading-7">
              {flavor.name}
            </div>
            {/* Menu items */}
            {flavor.items.map((item) => {
              return (
                <div key={item.name} className="flex flex-col">
                  <div className="font-gt-super-text-bold text-base leading-5 mb-6 underline">
                    {item.name}
                  </div>
                  <div className="font-ibm-plex-thai text-sm font-normal leading-[18px]">
                    {item.description}
                  </div>
                  {/* Taste note and price */}
                  {item.tasteNote ? (
                    <div className="mt-1 font-ibm-plex-thai text-sm font-bold leading-[18px]">
                      {item.tasteNote}
                    </div>
                  ) : null}
                  <div className="mt-1 font-ibm-plex-thai text-sm font-bold leading-[18px]">
                    {item.price}.-
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
