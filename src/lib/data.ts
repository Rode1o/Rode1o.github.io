import type { DataStructure } from '../types/types';

export const profileInfo: DataStructure[] = [
  {
    isAbout: true,
    isHome: false,
    isProject: false,
    media: '/images/Avatar_1.webp',
    title: 'About Me',
    description:
      'Ever since I was a little kid, game development has been my passion. I was always obsessed with knowing what is the logic behind all these worlds, I remember sitting down and disarming Mario64, to see what was inside the cartridge. With all this I discovered a great passion for Software development, because it allowed me to create those unrealistic places, where I spent so much hours. That is why I am currently studying video game development in different video game engines such as Unity or Unreal Engine.',
    thumbnail: {
      src: '/images/Avatar_1.webp',
      alt: 'Frostduv profile picture',
    },
  },
  {
    isAbout: false,
    isHome: true,
    isProject: false,
    title: 'Frostduv',
    description:
      "I am a Game Developer and UI Programmer with four years of experience in the industry, and an Unreal Authorized Instructor (Epic Games). Skilled in <span class='bg-secondary text-accent px-1.5 py-1 rounded'>Unreal Engine</span> <span class='bg-secondary text-accent px-1.5 py-1 rounded'>Unity</span> <span class='bg-secondary text-accent px-1.5 py-1 rounded'>UEFN</span> and <span class='bg-secondary text-accent px-1.5 py-1 rounded'>Roblox</span> I specialize in creating engaging and intuitive user interfaces that enhance gameplay experiences. Passionate about innovation, I thrive on challenges that push my skills and allow me to contribute to the ever-evolving world of game development.",
    socialMedia: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/duvanrodelo/',
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
    media: 'DQuKLnA7pKM',
    title: 'DnD Zombie Dragon Adventure',
    description:
      'An official D&D roguelike where you choose your path through deadly realms, upgrade your power in the village, and face the Dracolich—an epic undead dragon boss fight.<br /><br />' +
      'UI-focused contribution: Built the player HUD, FTUX, notifications, and shop UI for an official D&D roguelike where players choose their path, upgrade their power, and face the Dracolich',
    highlights: ['Roguelike PVE', 'CO-OP', 'Adventure'],
    download: [
      {
        platforms: 'Fortnite',
        link: 'https://www.fortnite.com/@teracreators/2525-9596-3235',
      },
    ],
    thumbnail: {
      src: '/images/DND.webp',
      alt: 'Promotional image for the video game "DND Adventure Rogue Like", showing a fish vs a nondead-dragon',
    },
  },
  {
    isAbout: false,
    isHome: false,
    isProject: true,
    media: 'DQuKLnA7pKM',
    title: 'Havoc Hotel: Raptor Heist',
    description:
      'Dare to steal a fragile Dino Egg from an abandoned lab. A true heist with the risk of losing your prize 😱',
    highlights: ['Roguelike PVE', 'CO-OP'],
    download: [
      {
        platforms: 'Fortnite',
        link: 'https://www.fortnite.com/@teracreators/1311-3035-1480',
      },
    ],
    thumbnail: {
      src: '/images/raptor-thumbnail.webp',
      alt: 'Promotional image for the video game "Havoc Hotel Raptor Heist", showing a fish character holding an egg and a raptor in a jungle.',
    },
  },
  {
    isAbout: false,
    isHome: false,
    isProject: true,
    media: 'hmM1TgxI1Hs',
    title: 'Mision Biosegura',
    description:
      'This 2D game developed in Unreal Engine is designed as an interactive educational experience that teaches the safe handling of sharp objects in hospital settings. Through two phases —BEFORE and DURING— players learn to identify risks, correctly select personal protective equipment (PPE), and properly dispose of hazardous waste. The gameplay combines exploration, decision-making, and real-time challenges, promoting self-care and accident prevention in clinical environments.',
    highlights: ['Educational', 'Simulation', '2D', 'Side-scroller'],
    download: [
      {
        platforms: 'Browser',
        link: 'https://happyverso.com/demo2d/Axa2-HTML5-Shipping.html',
      },
    ],
    thumbnail: {
      src: '/images/safe-mission.webp',
      alt: 'Sharp Object Safety in Hospital Environments',
    },
  },
  {
    isAbout: false,
    isHome: false,
    isProject: true,
    media: 'aPL00ESX3Yo',
    title: 'Courtyard King',
    description:
      'Prison Control is a competitive multiplayer experience developed in Unreal Editor for Fortnite (UEFN), where up to 15 players are divided into 3 factions to fight for control over the infamous Meriwether County Correctional Facility. <br> As the UI Programmer, I was responsible for the implementation and logic of all core interface systems. My focus was to create a clean, responsive, and competitive-friendly UI that supports high-paced gameplay and player progression.',
    highlights: ['Multiplayer', 'Survival Game', 'Real Time Strategy'],
    download: [
      {
        platforms: 'Fortnite',
        link: 'www.fortnite.com/@skybound-games/2427-7395-6416',
      },
    ],
    thumbnail: {
      src: '/images/courtyard.webp',
      alt: 'Illustration of a horde of zombies pressing against steel bars and reaching out, with the text ‘The Walking Dead Universe: Courtyard King’ and the Skybound logo',
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
    media: 'pHMmQKqthPQ',
    title: 'The Shadow Syndicate',
    description:
      'Contributed to the original development of The Shadow Syndicate, a 1930s Brooklyn narrative-driven stealth action game announced for PS5, Xbox Series, Switch 2, and PC. Responsibilities included menu interface, UI target detection system, and dynamic ambient sounds.',
    highlights: ['Multi-Platform Release', 'Narrative-Driven Gameplay'],
    download: [
      {
        platforms: 'Steam',
        link: 'https://store.steampowered.com/app/3668300/The_Shadow_Syndicate',
      },
    ],
    thumbnail: {
      src: '/images/Shadow.webp',
      alt: 'Syndicate',
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
