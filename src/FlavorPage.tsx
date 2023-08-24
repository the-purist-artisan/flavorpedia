interface FlavorPageConfig {
  coverImageSource: string;
  formalName: string;
  name: string;
  quote: string;
  quoteBy: string;
  variation: string;
  tasteNote: string;
  note: string;
  eatingInstruction: string;
}

export default function FlavorPage() {
  const config: FlavorPageConfig = {
    coverImageSource: "/images/matcha.png",
    formalName: "Kyoto Serenity",
    name: "Ceremonial Matcha",
    quote:
      "Never to suffer from mediocre matcha would never to have been blessed by ceremonial matcha.",
    quoteBy: "Adapted from Edgar Allan Poe",
    variation: "Narino Premium",
    tasteNote: "White chocolate, Butter, Bread, Strong Umami Creamy Mountfeel",
    note: "Resplendent in the unadulterated chlorophyll colour, this heritage grade matcha ice cream is poised between unraffled serenity and absolute divinity of Kyoto's finest green tea. The palate will be immersed in concentrated umami in contrast with the freshness and the silky texture that prove effortless to enjoy.",
    eatingInstruction:
      "After the removal from -18 degree Celcius, wait for the ideal texture: a soft one yet resistant upon pressing.",
  };
  document.body.classList.add("bg-matcha");
  return (
    <div className="flex flex-col mb-3 font-serif bg-matcha text-slate-50">
      <div className="flex flex-col h-80">
        <div className="absolute border-2 border-border inset-x-3 inset-y-3 h-72"></div>
        <img
          src={
            window.location.origin + "/flavorpedia/" + config.coverImageSource
          }
          alt="artwork"
        />
        <div className="mx-6 mt-2">
          <p className="text-2xl font-bold">{config.formalName}</p>
          <p className="text-lg">{config.name}</p>
        </div>
      </div>
      <div className="px-3">
        <div className="text-matcha-quote italic mb-4">
          <p className="text-base">&ldquo;{config.quote}&rdquo;</p>
          <p>&mdash;&nbsp;{config.quoteBy}</p>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-matcha-title-text font-semibold">VARIATION</p>
            <p>{config.variation}</p>
          </div>
          <div>
            <p className="text-matcha-title-text font-semibold">TASTE NOTE</p>
            <p>{config.tasteNote}</p>
          </div>
          <div>
            <p className="text-matcha-title-text font-semibold">
              NOTE FROM OUR MAKER
            </p>
            <p>{config.note}</p>
          </div>
          <div>
            <p className="text-matcha-title-text font-semibold">
              EATING INSTRUCTION
            </p>
            <p>{config.eatingInstruction}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
