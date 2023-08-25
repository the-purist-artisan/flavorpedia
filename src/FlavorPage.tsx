import { getFlavorVariationConfig } from "./Flavors";

const getFlavor = () => {
  return window.location.pathname.split("/flavorpedia/")[1];
};

const getType = (): string => {
  const query = new URLSearchParams(window.location.search);
  return query.get("type") || "";
};

export default function FlavorPage() {
  const flavor = getFlavor();
  const type = getType();
  const config = getFlavorVariationConfig(flavor, type);
  document.body.classList.add("bg-matcha");

  return (
    // Default text color: text-slate-50
    <div
      className={
        "flex flex-col pb-6 font-serif text-slate-50 " +
        config.colorClass.background
      }
    >
      <div className="flex flex-col h-80">
        <div className="absolute border-2 border-[#000001] inset-x-3 inset-y-3 h-72"></div>
        <img
          src={
            window.location.origin + "/flavorpedia/" + config.coverImageSource
          }
          alt="artwork"
        />
        <div className={"mx-6 mt-2 " + config.colorClass.header}>
          <p className="text-2xl font-bold">{config.formalName}</p>
          <p className="text-lg">{config.name}</p>
        </div>
      </div>
      <div className="px-3">
        <div className={"italic mb-4 " + config.colorClass.quote}>
          <p className="text-base">&ldquo;{config.quote}&rdquo;</p>
          {config.quoteBy ? <p>&mdash;&nbsp;{config.quoteBy}</p> : null}
        </div>
        <div className="flex flex-col gap-2">
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
