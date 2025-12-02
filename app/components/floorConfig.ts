export type FloorConfig = {
  id: string;
  number: string;
  label: string;
  description: string;
};

export const FLOOR_CONFIG: FloorConfig[] = [
  { id: 'hero', number: 'RC', label: 'Lobby', description: 'Welcome Deck' },
  { id: 'about', number: '1', label: 'About', description: 'Company Story' },
  { id: 'products', number: '2', label: 'Products', description: 'Solutions Suite' },
  { id: 'technology', number: '3', label: 'Technology', description: 'Innovation Lab' },
  { id: 'projects', number: '4', label: 'Projects', description: 'Gallery' },
  { id: 'services-support', number: '5', label: 'Services', description: 'Care & Support' },
  { id: 'contact', number: 'R', label: 'Roof', description: 'Contact & Quote' },
];


