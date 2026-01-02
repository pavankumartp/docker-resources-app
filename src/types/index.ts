export type ResourceCategory = 'White Paper' | 'Infographic' | 'Video' | 'Blog' | 'Guide' | 'Webinar';

export interface Resource {
  id: string;
  category: ResourceCategory;
  title: string;
  description: string;
  date: string; // ISO format
  link: string;
  year: number;
}

export interface FilterState {
  searchQuery: string;
  selectedYear: string;
  selectedTypes: ResourceCategory[];
  sortBy: 'date' | 'title';
}
