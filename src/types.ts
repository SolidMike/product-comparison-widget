export interface IPay {
  period: "Ежемесячно" | "Ежеквартально";
  pay_count: number;
  total_count: number;
}

interface IDynamics {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

export interface IProduct {
  id: number | string;
  name: string;
  description: string;
  price: number | string;
  currency: string;
  profit: string;
  risks: number | string;
  actives: string[];
  release_date: string;
  maturity_date: string;
  companies_num: string;
  dynamics: IDynamics[];
  protection_threshold: number;
  max_profit: number;
  pay: IPay;
}

export const filters: string[] = [
  "price",
  "currency",
  "profit",
  "risks",
  "actives",
  "release_date",
  "maturity_date",
  "companies_num",
  "dynamics",
  "protection_threshold",
  "max_profit",
  "pay",
];

export type currencyType = "USD" | "RUB" | "EUR" | "ALL";
export type colorsType = "red" | "green" | "blue" | "ALL";

export interface IAdditionalFilters {
  currency?: currencyType[];
  colors?: colorsType[];
}

export const additionalFilters: IAdditionalFilters = {
  currency: ["ALL"],
  colors: ["ALL"],
};

export type Risks = IProduct["risks"];
