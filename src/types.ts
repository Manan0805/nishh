export interface SevenThingCard {
  id: number;
  numberStr: string;
  title: string;
  teaser: string;
  message: string[];
  emoji?: string;
  isSpecial?: boolean;
}

export interface LittleThing {
  id: string;
  title: string;
  subtitle: string;
  icon: 'chat' | 'laugh' | 'video' | 'heart-hand' | 'hug' | 'moon' | 'sparkle';
  colorClass: string;
}

export interface NavSection {
  id: string;
  label: string;
}
