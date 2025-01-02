export interface UserObject {
  success: boolean;
  user: User;
}

export interface User {
  skills: Skill[];
}

export interface Avatar {
  public_id: string;
  url: string;
  _id: string;
}

export interface Skill {
  enabled: boolean;
  name: string;
  sequence: number;
  percentage: number;
  image: Avatar;
  _id: string;
}

export interface Project {
  liveurl: string;
  githuburl: string;
  title: string;
  sequence: number;
  image: {
    url: string;
  };
  description: string;
  techStack: string[];
  _id: string;
  enabled: boolean;
}

export interface Image {
  public_id: string;
  url: string;
}

export interface SocialHandle {
  platform: string;
  url: string;
  image: Image;
  enabled: boolean;
  _id: string;
}

export interface Timeline {
  company_name: string;
  summary: string;
  sequence: number;
  startDate: string;
  endDate: string;
  jobTitle: string;
  jobLocation: string;
  bulletPoints: string[];
  forEducation: boolean;
  enabled: boolean;
  _id: string;
}
