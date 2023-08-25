export type VariationConfig = {
  variationName: string;
  tasteNote: string;
};

export type FlavorConfig = {
  coverImageSource: string;
  colorClass: {
    background: string;
    header: string;
    quote: string;
    title: string;
    text: string;
  };
  formalName: string;
  name: string;
  quote: string;
  quoteBy: string;
  note: string;
  eatingInstruction: string;
};

export type FlavorVariationConfig = FlavorConfig & VariationConfig;
