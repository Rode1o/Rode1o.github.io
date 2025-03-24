import type { DataStructure } from '../types/types';

export const profileInfo: DataStructure[] = [
  {
    isAbout: true,
    isHome: false,
    isProject: false,
    media: '/images/about.webp',
    title: 'About Me',
    description:
      'Ever since I was a little kid, game development has been my passion. I was always obsessed with knowing what is the logic behind all these worlds, I remember sitting down and disarming Mario64, to see what was inside the cartridge. With all this I discovered a great passion for Software development, because it allowed me to create those unrealistic places, where I spent so much hours. That is why I am currently studying video game development in different video game engines such as Unity or Unreal Engine.',
    thumbnail: {
      src: '/images/about.webp',
      alt: 'Frostduv profile picture',
    },
  },
  {
    isAbout: false,
    isHome: true,
    isProject: false,
    title: 'Frostduv',
    description:
      "I am a Game Developer and UI Programmer with four years of experience in the industry. Skilled in <span class='bg-secondary text-accent px-1.5 py-1 rounded'>Unreal Engine</span> <span class='bg-secondary text-accent px-1.5 py-1 rounded'>Unity</span> <span class='bg-secondary text-accent px-1.5 py-1 rounded'>UEFN</span> and <span class='bg-secondary text-accent px-1.5 py-1 rounded'>Roblox</span> I specialize in creating engaging and intuitive user interfaces that enhance gameplay experiences. Passionate about innovation, I thrive on challenges that push my skills and allow me to contribute to the ever-evolving world of game development.",
    socialMedia: [
      {
        name: 'twitch',
        link: 'https://www.twitch.tv/frostduv',
      },
      {
        name: 'youtube',
        link: 'https://www.youtube.com/@FrostDuv',
      },
      {
        name: 'tiktok',
        link: 'https://www.tiktok.com/@frostduv',
      },
      {
        name: 'x',
        link: 'https://x.com/frost_duv',
      },
    ],
    thumbnail: {
      src: '/images/home-thumbnail.webp',
      alt: 'Frostduv profile picture',
    },
  },
  {
    isAbout: false,
    isHome: false,
    isProject: true,
    media: 'xtEBMlcBf8E',
    title: 'Havoc Hotel 3',
    description:
      'Once the luxurious Haven Hotel, now the chaotic Havoc Hotel, seized by a dangerous group. Amidst the turmoil, an intense roguelike challenge awaits. Built with UEFN.',
    highlights: ['Roguelike', 'PVE'],
    download: [
      {
        platforms: 'Fortnite',
        link: 'https://www.fortnite.com/@teracreators/0335-8436-1670',
      },
    ],
    thumbnail: {
      src: '/images/havoc-hotel.webp',
      alt: 'Havoc Hotel',
    },
  },
  {
    isAbout: false,
    isHome: false,
    isProject: true,
    media: 'mq2cfMGErsM',
    title: 'Griefville',
    description:
      'Griefville is a multiplayer survival game, it features an open world where PVE, PVP and unique game modes (a.k.a, Nightmares) come together to create an engaging survival experience inside of Roblox.',
    highlights: ['Survival Game', 'Open World'],
    download: [
      {
        platforms: 'Roblox',
        link: 'https://www.roblox.com/es/games/16578847473/FREE-WEAPON-GRIEFVILLE-x-Chucky-Karma-Wars',
      },
    ],
    thumbnail: {
      src: '/images/griefville.webp',
      alt: 'Chucky holding a knife',
    },
  },
  {
    isAbout: false,
    isHome: false,
    isProject: true,
    media: 'fQapNP0-w3Q',
    title: 'Once Upon Tomorrow',
    description:
      "This parkour-focused map challenges your agility as you leap across futuristic landscapes, master intricate obstacles, and uncover hidden secrets. Whether you're chasing the fastest time or exploring at your own pace, every run is a unique adventure.",
    highlights: ['Only UP', 'Platformer'],
    download: [
      {
        platforms: 'Fortnite',
        link: 'https://www.fortnite.com/@80.lv/7186-1372-8926',
      },
    ],
    thumbnail: {
      src: '/images/once-upon-tomorrow.webp',
      alt: 'Once Upon Tomorrow with a big sphere as background',
    },
  },
  {
    isAbout: false,
    isHome: false,
    isProject: true,
    media: 'QKG2DznBT-U',
    title: 'Tennis Storm (US Open)',
    description:
      'Challenge other players in an exciting survival game created in UEFN for the US Open. Dodge tennis balls launched by cannons, deflect them to eliminate other players with a single hit, or survive up to three impacts. Become the last player standing and claim the champion’s title!',
    highlights: ['PVP', 'Sports'],
    download: [
      {
        platforms: 'Fortnite',
        link: 'https://fortnite.gg/island?code=8532-9413-6963',
      },
    ],
    thumbnail: {
      src: '/images/tennis-storm.webp',
      alt: 'A tennis field with Tennis Storm title in the front',
    },
  },
];
