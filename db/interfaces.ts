export interface VideoTutorial {
  id: string;
  tags: string[];
  link: string;
  title: string;
  summary: string;
}

export interface VideoTutorialSearchResult extends VideoTutorial {
  matchCount: number;
}