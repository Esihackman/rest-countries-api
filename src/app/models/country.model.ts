export interface Country {
  name: {
    common: string;
  };
  flags: { svg: string; png: string };
  
  population: number;
  region: string;
  capital?: string[];
}
