import darkknightportrait from "../assets/portraits/darkknightportrait.jpg";
import darkknightface from "../assets/portraits/darkknightface.jpg";
import skeletonportrait from "../assets/portraits/skeletonportrait.jpg";
import skeletonface from "../assets/portraits/skeletonface.jpg";
import werewolfPortrait from "../assets/portraits/werewolfportrait.jpg";
import werewolfface from "../assets/portraits/werewolfface.jpg";
import cannibalportrait from "../assets/portraits/cannibalportrait.jpg";
import cannibalface from "../assets/portraits/cannibalface.jpg";
import skillsIcons from "../data/iconSkills";
import { skillsInfo } from "../data/dataTooltips";

export const cemeteryData = [
  {
    id: 3,
    name: "Skeleton",
    health: 16,
    defense: 12,
    attack: 4,
    defaultAttack: 4,
    criticalChance: 0,
    difficulty: "Easy",
    portrait: skeletonportrait,
    portraitFace: skeletonface,
    level: "cemetery",
    status: "alive",
  },
  {
    id: 4,
    name: "Skeleton",
    health: 25,
    defense: 13,
    attack: 3,
    defaultAttack: 3,
    criticalChance: 5,
    difficulty: "Easy",
    portrait: skeletonportrait,
    portraitFace: skeletonface,
    level: "cemetery",
    status: "alive",
  },
  {
    id: 5,
    name: "Maevir",
    health: 50,
    defense: 33,
    attack: 7,
    defaultAttack: 7,
    magic: 1,
    maxMagic: 1,
    darkMastery: 1,
    criticalChance: 12,
    difficulty: "Intermedium",
    portrait: darkknightportrait,
    portraitFace: darkknightface,
    level: "cemetery",
    status: "alive",
    skills: [
      {
        name: "weakness",
        img: skillsIcons.weakness,
        id: "castWeakness",
        tooltipText: skillsInfo.weakness,
        iconClass: "icon-img",
        buttonClass: "button-player",
      },
    ],
  },
];

export const mausoleumData = [
  {
    id: 6,
    name: "Skeleton",
    health: 35,
    defense: 10,
    attack: 6,
    defaultAttack: 4,
    criticalChance: 25,
    magic: 0,
    difficulty: "Easy",
    portrait: skeletonportrait,
    portraitFace: skeletonface,
    status: "alive",
  },
  {
    id: 9,
    name: "Skeleton",
    health: 25,
    defense: 37,
    attack: 3,
    defaultAttack: 3,
    criticalChance: 21,
    magic: 0,
    difficulty: "Easy",
    portrait: skeletonportrait,
    portraitFace: skeletonface,
    status: "alive",
  },
  {
    id: 10,
    name: "Lucard",
    health: 65,
    defense: 18,
    attack: 13,
    defaultAttack: 8,
    magic: 1,
    maxMagic: 1,
    darkMastery: 4,
    criticalChance: 30,
    difficulty: "Intermedium",
    portrait: darkknightportrait,
    portraitFace: darkknightface,
    status: "alive",
    skills: [
      {
        name: "vulnerability",
        img: skillsIcons.vulnerability,
        id: "castVulnerability",
        tooltipText: skillsInfo.vulnerability,
        iconClass: "icon-img",
        buttonClass: "button-player",
      },
    ],
  },
  {
    id: 11,
    name: "Eldare",
    health: 50,
    defense: 35,
    attack: 10,
    defaultAttack: 6,
    magic: 1,
    maxMagic: 1,
    darkMastery: 3,
    criticalChance: 35,
    difficulty: "Intermedium",
    portrait: darkknightportrait,
    portraitFace: darkknightface,
    status: "alive",
    skills: [
      {
        name: "weakness",
        img: skillsIcons.weakness,
        id: "castWeakness",
        tooltipText: skillsInfo.weakness,
        iconClass: "icon-img",
        buttonClass: "button-player",
      },
    ],
  },
];

export const darkPassageData = [
  {
    id: 12,
    name: "The Cannibal",
    health: 60,
    defense: 15,
    attack: 22,
    defaultAttack: 15,
    criticalChance: 40,
    magic: 1,
    maxMagic: 1,
    darkMastery: 2,
    difficulty: "Intermedium",
    portrait: cannibalportrait,
    portraitFace: cannibalface,
    status: "alive",
    skills: [
      {
        name: "vulnerability",
        img: skillsIcons.vulnerability,
        id: "castVulnerability",
        tooltipText: skillsInfo.vulnerability,
        iconClass: "icon-img",
        buttonClass: "button-player",
      },
    ],
  },
];

export const lostGalleryData = [
  {
    id: 12,
    name: "Hawnyr",
    health: 68,
    defense: 40,
    attack: 25,
    criticalChance: 25,
    magic: 1,
    maxMagic: 1,
    darkMastery: 0,
    difficulty: "High",
    portrait: werewolfPortrait,
    portraitFace: werewolfface,
    status: "alive",
    skills: [
      {
        name: "rend",
        img: skillsIcons.rend,
        id: "rend",
        tooltipText: skillsInfo.rend,
        iconClass: "icon-img",
        buttonClass: "button-player",
      },
    ],
  },
  {
    id: 13,
    name: "Lazarus",
    health: 55,
    defense: 60,
    attack: 13,
    defaultAttack: 11,
    criticalChance: 35,
    magic: 1,
    maxMagic: 1,
    darkMastery: 6,
    difficulty: "High",
    portrait: darkknightportrait,
    portraitFace: darkknightface,
    status: "alive",
    skills: [
      {
        name: "weakness",
        img: skillsIcons.weakness,
        id: "castWeakness",
        tooltipText: skillsInfo.weakness,
        iconClass: "icon-img",
        buttonClass: "button-player",
      },
    ],
  },
];