
import { Friend, MemoryEntry } from './types';

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

export const MEMORY_TIMELINE: MemoryEntry[] = [
  { id: 'm1', year: '2015', title: 'The Beginning', description: 'When we all finally clicked at the graduation party.' },
  { id: 'm2', year: '2018', title: 'Coast to Coast', description: 'Our massive road trip across the country.' },
  { id: 'm3', year: '2021', title: 'The Last Hug', description: 'Our last dinner before everyone moved for work/studies.' },
  { id: 'm4', year: '2023', title: 'The Zoom Era', description: 'Keeping the spark alive through countless video calls.' },
];

export const REUNION_DATE = new Date('2025-06-20T18:00:00').getTime();
