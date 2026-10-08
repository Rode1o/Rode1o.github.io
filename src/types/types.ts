export interface DataStructure {
  isAbout: boolean;
  isHome: boolean;
  isProject: boolean;
  media?: string;
  vertical?: boolean;
  title: string;
  roles?: string[];
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
