import { useRef } from "react";
import "./index.css";
import { Flavor, SOLDOUT_TYPE } from "./MenuFlavors/types";

interface MenuProps {
  headerText: string;
  flavors: Flavor[];
  menuBackgroundColorClass?: string;
}

export default function Menu({
  headerText,
  flavors,
  menuBackgroundColorClass: menuBackgroundColor,
}: MenuProps) {
  const topRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<Map<string, HTMLDivElement> | null>(null);

  const backgroundColorClass = menuBackgroundColor
    ? menuBackgroundColor
    : "bg-menu-bg"; // default dark blue

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

  // count total flavors
  const totalFlavors = flavors
    .map((f) => f.items.length)
    .reduceRight((p, c) => p + c);

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
        className={`${backgroundColorClass} py-8 flex flex-col items-center text-white`}
      >
        <div className="mb-6">
          <img
            src={window.location.origin + "/flavorpedia/images/menu/logo.svg"}
            style={{ height: "150px" }}
          />
        </div>
        <div className="menu-header font-benaco-one mb-8 pl-6 pr-6 w-fit text-center font-normal text-key-header leading-key-header whitespace-pre-line">
          {headerText}
        </div>
        <div className="flex flex-col items-center mb-8 pl-6 pr-6">
          <div className="font-ibm-plex-thai text-lg mb-4 text-center">
            {"เราขอแนะนำไอศกรีมทั้งหมด"}
          </div>
          <div className="text-7xl font-benaco-one mb-4 w-fit text-center font-normal leading-10 whitespace-pre-line">
            {totalFlavors}
          </div>
          <div className="font-ibm-plex-thai text-lg">{"รสชาติ"}</div>
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
                  {item.isSoldOut ? (
                    <>
                      <div className="font-gt-super-text-bold text-base leading-5 mb-2 underline">
                        {item.name}
                      </div>
                      <div className="mb-2">
                        <span className="rounded-full w-auto bg-slate-800 text-slate-200 px-3 py-1">
                          {item.isSoldOut === SOLDOUT_TYPE.SOLDOUT
                            ? "Sold out"
                            : item.isSoldOut === SOLDOUT_TYPE.RESTOCKING_SOON
                              ? "Restocking soon"
                              : ""}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="font-gt-super-text-bold text-base leading-5 mb-6 underline">
                        {item.name}
                      </div>
                    </>
                  )}

                  <div className="font-ibm-plex-thai text-sm font-normal leading-[18px] whitespace-pre-wrap">
                    {item.description}
                  </div>

                  {/* Taste note and price */}
                  {item.tastingNotes ? (
                    <div className="mt-1 font-ibm-plex-thai text-sm font-bold leading-[18px] whitespace-pre-wrap">
                      {item.tastingNotes}
                    </div>
                  ) : null}
                  <div className="mt-1 font-ibm-plex-thai text-sm font-bold leading-[18px]">
                    <div>{item.price}.- </div>
                    {/* Pre-order price */}
                    {item.preorderPrice ? (
                      <div>{`(Pre-order ก่อนวันงาน: ${item.preorderPrice}.-)`}</div>
                    ) : null}
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
