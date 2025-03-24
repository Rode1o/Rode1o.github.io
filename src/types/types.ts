export interface DataStructure {
  isAbout: boolean;
  isHome: boolean;
  isProject: boolean;
  media?: string;
  title: string;
  description: string;
  highlights?: string[];
  download?: {
    platforms: string;
    link: string;
  }[];
  socialMedia?: {
    name: string;
    link: string;
  }[];
  thumbnail: {
    src: string;
    alt: string;
  };
}
