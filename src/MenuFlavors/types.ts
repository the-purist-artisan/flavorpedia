export interface Item {
  name: string;
  description: string;
  tasteNote?: string;
  price: number;
}

export interface Flavor {
  id: string;
  categoryButtonText: string;
  backgroundColorClass: string;
  imageName: string;
  textColorClass?: string;
  name: string;
  items: Item[];
}
