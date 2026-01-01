
import { Friend, SecretSantaMatch, Photo, MemoryEntry } from './types';

/**
 * 1. THE FRIENDS & PASSWORDS
 * 10 Friends with hard-to-guess random 4-digit codes.
 */
export const DEFAULT_FRIENDS: Friend[] = [
  {
    id: '1',
    name: 'Youssef',
    nickname: 'Youssef',
    bio: 'Living life one adventure at a time.',
    secretCode: '8312',
    howWeMet: 'enactus',
    bestMemory: 'our meetings'
  },
  {
    id: '2',
    name: 'Aml',
    nickname: 'Aml',
    bio: 'Sunshine and smiles.',
    secretCode: '4927',
    howWeMet: 'enactus',
    bestMemory: 'our meetings'
  },
  {
    id: '3',
    name: 'Ezzat',
    nickname: 'Ezzat',
    bio: 'The guy who somehow ends up responsible for everything.',
    secretCode: '3041',
    howWeMet: 'enactus',
    bestMemory: 'our meetings'
  },
  {
    id: '4',
    name: 'Noura',
    nickname: 'Noura',
    bio: 'Doctor by profession, superhero by responsibility, and the most trusted person for medical advice.',
    secretCode: '9582',
    howWeMet: 'enactus',
    bestMemory: 'our meetings'
  },
  {
    id: '5',
    name: 'Hamed',
    nickname: 'Hamed',
    bio: 'Extremely reliable and hardworking—if Hamed says he’ll do it, consider it already done.',
    secretCode: '1598',
    howWeMet: 'enactus',
    bestMemory: 'our meetings'
  },
  {
    id: '6',
    name: 'Nayera',
    nickname: 'Nayera',
    bio: 'Quietly gets things done and somehow keeps the chaos under control.',
    secretCode: '7264',
    howWeMet: 'enactus',
    bestMemory: 'our meetings'
  },
  {
    id: '7',
    name: 'Fatma',
    nickname: '7amamet el salam',
    bio: 'Calm, peaceful, and smart—the human version of “don’t worry, it’ll be fine.”',
    secretCode: '2176',
    howWeMet: 'enactus',
    bestMemory: 'our meetings'
  },
  {
    id: '8',
    name: 'Sarah',
    nickname: 'Sarah',
    bio: 'The girl who is always missed at gatherings but somehow still knows all the drama.',
    secretCode: '6835',
    howWeMet: 'enactus',
    bestMemory: 'our meetings'
  },
  {
    id: '9',
    name: 'Shahd',
    nickname: 'Shahd',
    bio: 'The one that has an elite taste—always knows what’s trending before it’s trending.',
    secretCode: '4419',
    howWeMet: 'enactus',
    bestMemory: 'our meetings'
  },
  {
    id: '10',
    name: 'Ahmed',
    nickname: 'Ahmed',
    bio: 'Creative by nature, full of ideas, and always thinking in a way that surprises everyone.',
    secretCode: '5203',
    howWeMet: 'enactus',
    bestMemory: 'our meetings'
  }
];


/**
 * 2. SECRET SANTA ASSIGNMENTS
 * Engaged couples assigned to each other as requested:
 * Youssef & Aml, Hamed & Nayera, Noura & Ezzat.
 * Others randomized in a cycle.
 */
export const HARDCODED_SANTA_MATCHES: SecretSantaMatch[] = [
  // Engaged Couples (Mutual)
  { giverId: '1', receiverId: '2' }, // Youssef -> Aml
  { giverId: '2', receiverId: '1' }, // Aml -> Youssef
  
  { giverId: '5', receiverId: '6' }, // Hamed -> Nayera
  { giverId: '6', receiverId: '5' }, // Nayera -> Hamed
  
  { giverId: '3', receiverId: '4' }, // Ezzat -> Noura
  { giverId: '4', receiverId: '3' }, // Noura -> Ezzat

  // Randomized Group (Fatma, Sarah, Shahd, Ahmed)
  { giverId: '7', receiverId: '8' }, // Fatma -> Sarah
  { giverId: '8', receiverId: '9' }, // Sarah -> Shahd
  { giverId: '9', receiverId: '10' }, // Shahd -> Ahmed
  { giverId: '10', receiverId: '7' }, // Ahmed -> Fatma
];

/**
 * 3. SHARED PHOTO GALLERY
 */
export const HARDCODED_PHOTOS: Photo[] = [
  { 
    id: 'p1', 
    url: 'https://i.imghippo.com/files/mRJ5729bEY.jpeg', 
    caption: 'Iftar Ramadan 24', 
    uploadedBy: 'Ezzat', 
    timestamp: Date.now(), 
    rotation: '-2deg' 
  },
  { 
    id: 'p2', 
    url: 'https://i.imghippo.com/files/wgam7629qQk.jpeg', 
    caption: 'Hehe', 
    uploadedBy: 'Ezzat', 
    timestamp: Date.now(), 
    rotation: '3deg' 
  },
  { 
    id: 'p3', 
    url: 'https://i.imghippo.com/files/LnV2507Djs.jpeg', 
    caption: 'Last time together', 
    uploadedBy: 'Ezzat', 
    timestamp: Date.now(), 
    rotation: '1deg' 
  }
];

/**
 * 4. MEMORY TIMELINE
 * Fixes error: Module '"../constants"' has no exported member 'MEMORY_TIMELINE'.
 */
export const MEMORY_TIMELINE: MemoryEntry[] = [
  { id: 'm1', year: '2019', title: 'The Beginning', description: 'Our first gathering at Enactus where the core group met.' },
  { id: 'm2', year: '2020', title: 'Virtual Bond', description: 'Keeping the spirit alive through long Discord calls during lockdown.' },
  { id: 'm3', year: '2021', title: 'Graduation', description: 'Celebrating our milestones together at the university.' },
  { id: 'm4', year: '2022', title: 'The Last Big Trip', description: 'Our summer beach getaway before everyone started their careers.' },
  { id: 'm5', year: '2023', title: 'Distance Calls', description: 'Checking in from different cities as we moved for work.' }
];

/**
 * 5. REUNION DATE
 * Set to Friday 1:30 PM CLT (Cairo Local Time is UTC+2)
 * Feb 28, 2025.
 */
export const REUNION_DATE = new Date('2025-02-28T13:30:00+02:00').getTime();
