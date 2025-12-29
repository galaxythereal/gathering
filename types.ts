
export interface Friend {
  id: string;
  name: string;
  nickname: string;
  bio: string;
  secretCode: string; // The "password"
  howWeMet: string;
  bestMemory: string;
  avatar?: string;
}

export interface SecretSantaMatch {
  giverId: string;
  receiverId: string;
}

export interface ActivityIdea {
  id: string;
  title: string;
  description: string;
  duration: string;
  vibes: string[];
  suggestedBy: string;
  timestamp: number;
}

export interface MemoryEntry {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface GuestbookEntry {
  id: string;
  authorId: string;
  authorName: string;
  text: string;
  timestamp: number;
}

export interface Photo {
  id: string;
  url: string; // Base64 or URL
  caption: string;
  uploadedBy: string;
  timestamp: number;
  rotation: string;
}
