import { useRef } from "react";
import { Flavor } from "./CoffeeFest/Flavors";
import "./index.css";

interface MenuProps {
  headerText: string;
  flavors: Flavor[];
}

export default function Menu({ headerText, flavors }: MenuProps) {
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
          src={window.location.origin + "/flavorpedia/images/menu/up-arrow.svg"}
          width={"40px"}
        />
      </div>
      <div
        ref={topRef}
        className={"bg-menu-bg py-8 flex flex-col items-center text-white"}
      >
        <div className="mb-6">
          <img
            src={window.location.origin + "/flavorpedia/images/menu/logo.svg"}
            height={"100px"}
          />
        </div>
        <div className="menu-header font-benaco-one mb-6 w-fit text-center font-normal text-key-header leading-key-header whitespace-pre-line">
          {headerText}
        </div>
        <div className="font-gt-super-text-bold text-lg mb-6">Menu</div>
        {flavors.map((flavor) => {
          return (
            <button
              key={`${flavor.id}-category-button`}
              onClick={() => scrollToFlavor(flavor.id)}
              className="font-ibm-plex-thai border-solid border border-white text-white mb-6 last:mb-0 px-4 py-2 w-fit text-lg leading-5 rounded-3xl"
            >
              {flavor.categoryButtonText}
            </button>
          );
        })}
        <div>
          <img
            src={
              window.location.origin + "/flavorpedia/images/menu/down-arrow.svg"
            }
            height={"27px"}
          />
        </div>
      </div>
      {flavors.map((flavor) => {
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
            className={`py-10 px-6 flex flex-col items-center text-center gap-y-6 ${flavor.backgroundColorClass} ${textColorClassName}`}
          >
            {/* Cup image */}
            <img
              src={`${window.location.origin}/flavorpedia/images/menu/cups/${flavor.imageName}.png`}
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
