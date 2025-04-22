export enum SOLDOUT_TYPE {
  RESTOCKING_SOON,
  SOLDOUT,
}

export interface Item {
  name: string;
  description: string;
  tastingNotes?: string;
  price: number;
  isSoldOut?: SOLDOUT_TYPE;
  preorderPrice?: number;
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
