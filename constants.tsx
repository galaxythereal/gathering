
import { Friend, MemoryEntry, SecretSantaMatch, Photo } from './types';

/**
 * 1. THE FRIENDS & PASSWORDS
 * Change "secretCode" to whatever you want their login PIN to be.
 */
export const DEFAULT_FRIENDS: Friend[] = [
  { id: '1', name: 'Alex', nickname: 'Al', bio: 'Loves spicy food and hiking.', secretCode: '1234', howWeMet: 'High School Chem Lab', bestMemory: 'The 2018 road trip' },
  { id: '2', name: 'Jamie', nickname: 'Jay', bio: 'Board game fanatic and dog lover.', secretCode: '2222', howWeMet: 'Summer Camp', bestMemory: 'Winning the trivia night' },
  { id: '3', name: 'Sam', nickname: 'Slam', bio: 'Tech geek who enjoys craft coffee.', secretCode: '3333', howWeMet: 'University Orientation', bestMemory: 'Building our first PC' },
  { id: '4', name: 'Jordan', nickname: 'Jords', bio: 'Group photographer and travel junkie.', secretCode: '4444', howWeMet: 'Photography Club', bestMemory: 'Sunrise at the Grand Canyon' },
  { id: '5', name: 'Casey', nickname: 'Ace', bio: 'Aspiring chef, brings the best snacks.', secretCode: '5555', howWeMet: 'Neighbours since birth', bestMemory: 'The legendary backyard BBQ' },
  { id: '6', name: 'Morgan', nickname: 'Mojo', bio: 'Music lover, plays acoustic guitar.', secretCode: '6666', howWeMet: 'Guitar Lessons', bestMemory: 'Busking in the city' },
  { id: '7', name: 'Taylor', nickname: 'Tay', bio: 'Loves a good marathon (movies and running).', secretCode: '7777', howWeMet: 'Local Gym', bestMemory: 'Finishing our first 10k' },
  { id: '8', name: 'Riley', nickname: 'Riles', bio: 'Life of the party, master of karaoke.', secretCode: '8888', howWeMet: 'Open Mic Night', bestMemory: 'The Queen tribute performance' },
  { id: '9', name: 'Quinn', nickname: 'Q', bio: 'Expert at finding hidden bars.', secretCode: '9999', howWeMet: 'First Job Together', bestMemory: 'The 3 AM diner run' },
  { id: '10', name: 'Robin', nickname: 'Birdie', bio: 'Calm, collected, and a pro at yoga.', secretCode: '1010', howWeMet: 'Yoga Retreat', bestMemory: 'Morning meditation on the beach' }
];

/**
 * 2. SECRET SANTA ASSIGNMENTS
 * Hardcode who buys for whom here using their IDs (1 through 10).
 * Format: { giverId: 'ID_OF_BUYER', receiverId: 'ID_OF_RECIPIENT' }
 */
export const HARDCODED_SANTA_MATCHES: SecretSantaMatch[] = [
  { giverId: '1', receiverId: '2' },
  { giverId: '2', receiverId: '3' },
  { giverId: '3', receiverId: '4' },
  { giverId: '4', receiverId: '5' },
  { giverId: '5', receiverId: '6' },
  { giverId: '6', receiverId: '7' },
  { giverId: '7', receiverId: '8' },
  { giverId: '8', receiverId: '9' },
  { giverId: '9', receiverId: '10' },
  { giverId: '10', receiverId: '1' },
];

/**
 * 3. SHARED PHOTO GALLERY
 * Add your photo URLs here. These will be visible to everyone.
 */
export const HARDCODED_PHOTOS: Photo[] = [
  { 
    id: 'p1', 
    url: 'https://i.imghippo.com/files/mRJ5729bEY.jpeg', 
    caption: 'The last time we were all together!', 
    uploadedBy: 'Alex', 
    timestamp: Date.now(), 
    rotation: '-2deg' 
  },
  { 
    id: 'p2', 
    url: 'https://www.imghippo.com/i/wgam7629qQk.jpeg', 
    caption: 'Late night talks in 2021', 
    uploadedBy: 'Jordan', 
    timestamp: Date.now(), 
    rotation: '3deg' 
  },
  { 
    id: 'p3', 
    url: 'https://www.imghippo.com/i/LnV2507Djs.jpeg', 
    caption: 'Ready for the reunion!', 
    uploadedBy: 'Admin', 
    timestamp: Date.now(), 
    rotation: '1deg' 
  }
];

export const MEMORY_TIMELINE: MemoryEntry[] = [
  { id: 'm1', year: '2015', title: 'The Beginning', description: 'When we all finally clicked at the graduation party.' },
  { id: 'm2', year: '2018', title: 'Coast to Coast', description: 'Our massive road trip across the country.' },
  { id: 'm3', year: '2021', title: 'The Last Hug', description: 'Our last dinner before everyone moved for work/studies.' },
  { id: 'm4', year: '2023', title: 'The Zoom Era', description: 'Keeping the spark alive through countless video calls.' },
];

export const REUNION_DATE = new Date('2025-06-20T18:00:00').getTime();
