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
