export interface FeedItem {
  title?: string;
  type: string;
  source: string;
  videoId?: string;
  url: string;
  views: number;
}

export interface Providers {
  facebook: () => string;
  youtube: () => string;
}
