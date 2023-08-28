import { useLocation, useParams } from "react-router-dom";
import { FlavorConfigMap, getFlavorVariationConfig } from "./Flavors";

const getType = (search: string): string => {
  const query = new URLSearchParams(search);
  return query.get("type") || "";
};

export default function FlavorPage() {
  const params = useParams();
  const { search } = useLocation();

  const flavor = params["flavor"] || "";
  const type = getType(search);

  if (!(flavor in FlavorConfigMap)) {
    return <>Hello</>;
  }
  const config = getFlavorVariationConfig(flavor, type);

  return (
    // Default text color: text-slate-50
    <div
      className={
        "flex flex-col lg:h-[100vh] lg:flex-row font-serif text-slate-50 lg:overflow-y-auto " +
        config.colorClass.background
      }
    >
      <div id="header-container" className="flex flex-col lg:basis-1/2">
        {/* Dynamic height, corresponding to image size/ratio */}
        <div
          id="artwork-frame"
          className="artwork-frame-sm-md absolute border-2 border-[#000001] inset-x-3 inset-y-3 lg:artwork-frame-lg"
        ></div>
        <img
          id="artwork-image"
          src={
            window.location.origin + "/flavorpedia/" + config.coverImageSource
          }
          alt="artwork"
        />
        <div
          id="header"
          className={
            "bg-[#ffffff] lg:grow px-6 lg:px-[4rem] pt-2 lg:pt-[2rem] pb-8 " +
            config.colorClass.header
          }
        >
          <p className="text-2xl font-bold">{config.formalName}</p>
          <p className="text-lg">{config.name}</p>
          <div
            className={
              "hidden lg:block italic leading-7 lg:mt-[2rem] " +
              config.colorClass.quote
            }
          >
            <p className="text-base">&ldquo;{config.quote}&rdquo;</p>
            {config.quoteBy ? <p>&mdash;&nbsp;{config.quoteBy}</p> : null}
          </div>
        </div>
      </div>
      <div className="flex flex-col px-3 lg:px-10 pt-4 mb-6 lg:basis-1/2 lg:justify-center lg:items-center">
        <div
          id="quote-container"
          className={
            "lg:hidden italic leading-7 mb-4 " + config.colorClass.quote
          }
        >
          <p className="text-base">&ldquo;{config.quote}&rdquo;</p>
          {config.quoteBy ? <p>&mdash;&nbsp;{config.quoteBy}</p> : null}
        </div>
        <div
          className={"flex flex-col gap-2 lg:gap-10 " + config.colorClass.text}
        >
          <div>
            <p className={"font-semibold " + config.colorClass.title}>
              VARIATION
            </p>
            <p>{config.variationName}</p>
          </div>
          <div>
            <p className={"font-semibold " + config.colorClass.title}>
              TASTE NOTE
            </p>
            <p>{config.tasteNote}</p>
          </div>
          <div>
            <p className={"font-semibold " + config.colorClass.title}>
              NOTE FROM OUR MAKER
            </p>
            <p>{config.note}</p>
          </div>
          <div>
            <p className={"font-semibold " + config.colorClass.title}>
              EATING INSTRUCTION
            </p>
            <p>{config.eatingInstruction}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
