
/**
 * Shared Sync Service
 * Uses kvdb.io (a public Key-Value store) to sync gathering data across devices.
 * In a production app, you would use Firebase or Supabase, but this works 
 * out-of-the-box for a small group gathering!
 */

const KVDB_BASE = 'https://kvdb.io/gathering_reunion_2025_'; 

export interface GlobalState {
  photos: any[];
  activities: any[];
  guestbook: any[];
  santaMatches: any[];
  lastUpdated: number;
}

export const syncService = {
  async saveState(roomCode: string, state: GlobalState): Promise<boolean> {
    if (!roomCode) return false;
    try {
      const response = await fetch(`${KVDB_BASE}${roomCode}/state`, {
        method: 'PUT',
        body: JSON.stringify(state),
      });
      return response.ok;
    } catch (e) {
      console.error('Sync Save Error:', e);
      return false;
    }
  },

  async fetchState(roomCode: string): Promise<GlobalState | null> {
    if (!roomCode) return null;
    try {
      const response = await fetch(`${KVDB_BASE}${roomCode}/state`);
      if (response.status === 404) return null;
      return await response.json();
    } catch (e) {
      console.error('Sync Fetch Error:', e);
      return null;
    }
  }
};
