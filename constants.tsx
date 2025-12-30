
import { Friend, MemoryEntry, SecretSantaMatch, Photo } from './types';

/**
 * 1. THE FRIENDS & PASSWORDS
 * Change "secretCode" to whatever you want their login PIN to be.
 */
export const DEFAULT_FRIENDS: Friend[] = [
  {
    id: '1',
    name: 'Mahmoud',
    nickname: 'Ezzat',
    bio: 'The guy who somehow ends up responsible for everything.',
    secretCode: '1234',
    howWeMet: 'Enactus Menoufia',
    bestMemory: 'nothing'
  },
  {
    id: '2',
    name: 'Hamed',
    nickname: 'Hamed',
    bio: 'If Hamed says he’ll do it, consider it already done.',
    secretCode: '2222',
    howWeMet: 'Enactus Menoufia',
    bestMemory: 'Meeting Mahmoud Ezzat (life changed forever)'
  },
  {
    id: '3',
    name: 'Ahmed',
    nickname: 'Gamal',
    bio: 'Always down to try new food—even if it looks suspicious or smells dangerous.',
    secretCode: '3333',
    howWeMet: 'Enactus Menoufia',
    bestMemory: 'Meeting Mahmoud Ezzat (life changed forever)'
  },
  {
    id: '4',
    name: 'Nayera',
    nickname: 'Nayera',
    bio: 'Quietly gets things done and somehow keeps the chaos under control.',
    secretCode: '4444',
    howWeMet: 'Enactus Menoufia',
    bestMemory: 'Meeting Mahmoud Ezzat (life changed forever)'
  },
  {
    id: '5',
    name: 'Shahd',
    nickname: 'Shahad',
    bio: 'Always knows what’s trending before it’s trending.',
    secretCode: '5555',
    howWeMet: 'Enactus Menoufia',
    bestMemory: 'Meeting Mahmoud Ezzat (life changed forever)'
  },
  {
    id: '6',
    name: 'Fatma',
    nickname: 'Fatma',
    bio: 'Calm, peaceful, and smart—the human version of “don’t worry, it’ll be fine. (Dying inside)”',
    secretCode: '6666',
    howWeMet: 'Enactus Menoufia',
    bestMemory: 'Meeting Mahmoud Ezzat (life changed forever)'
  },
  {
    id: '7',
    name: 'Sarah',
    nickname: 'Sarah',
    bio: 'Girl who has always missed the gatherings but somehow still knows all the drama.',
    secretCode: '7777',
    howWeMet: 'Enactus Menoufia',
    bestMemory: 'Meeting Mahmoud Ezzat (life changed forever)'
  },
  {
    id: '8',
    name: 'Noura',
    nickname: 'Noura',
    bio: 'Doctor by profession, superhero by responsibility, and the most trusted person for non-medical advice.',
    secretCode: '8888',
    howWeMet: 'Enactus Menoufia',
    bestMemory: 'Meeting Mahmoud Ezzat (life changed forever)'
  },
  {
    id: '9',
    name: 'Nagham',
    nickname: 'Nagham',
    bio: 'The youngest, and somehow more mature than everyone else.',
    secretCode: '9999',
    howWeMet: 'Enactus Menoufia',
    bestMemory: 'Meeting Mahmoud Ezzat (life changed forever)'
  },
  {
    id: '10',
    name: 'Norhan',
    nickname: 'Norhan',
    bio: 'Hardworking but also deeply caring—always there when you need support, advice, or a reality check.',
    secretCode: '1010',
    howWeMet: 'Enactus Menoufia',
    bestMemory: 'Meeting Mahmoud Ezzat (life changed forever)'
  }
];

/**
 * 2. SECRET SANTA ASSIGNMENTS (Configurable)
 * Giver ID buys for Receiver ID.
 */
export const HARDCODED_SANTA_MATCHES: SecretSantaMatch[] = [
  { giverId: '1', receiverId: '1' },
  { giverId: '2', receiverId: '2' },
  { giverId: '3', receiverId: '3' },
  { giverId: '4', receiverId: '4' },
  { giverId: '5', receiverId: '5' },
  { giverId: '6', receiverId: '6' },
  { giverId: '7', receiverId: '7' },
  { giverId: '8', receiverId: '8' },
  { giverId: '9', receiverId: '9' },
  { giverId: '10', receiverId: '10' },
];

/**
 * 3. SHARED PHOTO GALLERY (Configurable)
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
 * 4. REUNION DATE (Configurable)
 * Set to Friday 1:30 PM CLT (Cairo Local Time is UTC+2)
 */
export const REUNION_DATE = new Date('2025-02-28T13:30:00+02:00').getTime();

/**
 * 5. MEMORY TIMELINE
 */
export const MEMORY_TIMELINE: MemoryEntry[] = [
  {
    id: 'm1',
    year: '2022',
    title: 'The Enactus Era',
    description: 'When we all met and spent way too much time in the club room working on projects and drinking tea.'
  },
  {
    id: 'm2',
    year: '2023',
    title: 'Graduation & Beyond',
    description: 'Promises to stay in touch as we entered the real world. The first scattering of the group.'
  },
  {
    id: 'm3',
    year: '2024',
    title: 'The Silent Year',
    description: 'Life got busy, careers started, but the group chat never truly died. Memories kept us together.'
  },
  {
    id: 'm4',
    year: '2025',
    title: 'The Grand Reunion',
    description: 'Two years later, and here we are. Still us, still gold. Ready to make new memories.'
  }
];
