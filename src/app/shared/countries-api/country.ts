export interface ICountryName {
  common: string;
  official: string;
  nativeName: {
    spa: {
      official: string;
      common: string;
    }
  }
};

export interface ICurrency {
  name: string;
  symbol: string;
}

export interface ICountry {
  name: ICountryName;
  tld: string[];
  independent: boolean,
  status: "officially-assigned",
  unMember: boolean,
  currencies: {
    [key: string]: ICurrency
  },
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string
  },
  translations: {
    [key: string]: {
      official: string;
      common: string;
    }
  };
  latlng: number[];
  landlocked: boolean,
  borders: string[];
  area: number;
  demonyms: {
    [key: string]: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  },
  population: number
  gini: {
    [key: number]: number
  },
  fifa: string;
  car: {
    signs: string[];
    side: string;
  },
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
  },
  coatOfArms: {
    png: string;
    svg: string;
  },
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  },
  postalCode: {
    format: string;
    regex: string;
  }
};
