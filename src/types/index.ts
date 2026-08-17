export interface CoupleInfo {
  groomName: string;
  brideName: string;
  coupleTitle: string;
  anniversaryDate: string; // ISO date format "YYYY-MM-DDTHH:mm:ss"
  tagline: string;
  subTagline: string;
  heroPhoto: string;
  heroPhotoCaption: string;
}

export interface TimelineMoment {
  id: string;
  order: number;
  title: string;
  dateStr: string;
  location: string;
  story: string;
  photoUrl: string;
  photoCaption: string;
  badge?: string;
  highlights?: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  backNote?: string;
  date: string;
  location: string;
  url: string;
  category?: 'memory' | 'date' | 'trip' | 'candid';
}

export interface GuestBookMessage {
  id: string;
  name: string;
  relation?: string;
  message: string;
  createdAt: string;
  likes: number;
  badgeEmoji?: string;
}

export interface MapLocation {
  id: string;
  order: number;
  name: string;
  area: string;
  emoji: string;
  date: string;
  story: string;
  color: 'blush' | 'rosegold' | 'warm' | 'gold';
  cx: number; // SVG x coordinate (0-100)
  cy: number; // SVG y coordinate (0-100)
}

export interface BucketListItem {
  id: string;
  title: string;
  description: string;
  iconName: 'coffee' | 'car' | 'utensils' | 'mic' | 'palette' | 'gift' | 'mountain';
  achieved: boolean;
  dateAchieved?: string;
  targetBudget: number;
  currentSaved: number;
}
