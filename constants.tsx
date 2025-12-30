
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
 * 2. SECRET SANTA ASSIGNMENTS
 * Hardcode who buys for whom here using their IDs (1 through 10).
 * Format: { giverId: 'ID_OF_BUYER', receiverId: 'ID_OF_RECIPIENT' }
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
 * 3. SHARED PHOTO GALLERY
 * Add your photo URLs here. These will be visible to everyone.
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

export const MEMORY_TIMELINE: MemoryEntry[] = [
  { id: 'm1', year: '2023', title: 'The Beginning', description: 'When we all .' },
  { id: 'm2', year: '2023', title: 'Coast to Coast', description: 'Our .' },
  { id: 'm3', year: '2024', title: 'The Last', description: 'Our last.' },
  { id: 'm4', year: '2024', title: 'The', description: 'Keeping the spark alive through .' },
];

export const REUNION_DATE = new Date('2025-06-20T18:00:00').getTime();
