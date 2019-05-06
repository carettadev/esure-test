export interface Film {
  id: string;
  title: string;
  description: string;
  director: string;
  producer: string;
  release_date?: string;
  rt_score: string;
  people?: Array<string>;
  species?: Array<string>;
  locations?: Array<string>;
  vehicles?: Array<string>;
  url?: string;
}
