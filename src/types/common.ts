import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type PageTitleProps = {
  title: string;
  icon?: React.ReactElement;
};

export type SkillCardProps = {
  skill: string;
  icon: string | StaticImport;
};

type Link = {
  title: string;
  link: string;
};

export type Work = {
  imageSrc: string;
  title: string;
  badges: Link[];
  id: string;
};

export type WorkCardProps = {
  work: Work;
};

export type ExperienceType = {
  _id: string;
  timeFrame: string;
  role: string;
  company: string;
  location: string;
  createdAt: string;
  updatedAt: string;
};

export type ExperienceProps = {
  experiences: ExperienceType[];
};

export type Skill = {
  _id: string;
  skill: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type SkillProps = {
  skills: Skill[];
};

export type BlogType = {
  _id: string;
  title: string;
  content: string;
  author: string;
  coverImage: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type BlogProps = {
  blogs: BlogType[];
};

export type BlogCardProps = {
  blog: BlogType;
};

export type Badge = {
  _id: string;
  title: string;
  link: string;
};

export type Project = {
  _id: string;
  title: string;
  description: string;
  imageSrc: string;
  badges: Badge[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type ProjectProps = {
  works: Project[];
};

export type ProjectCardProps = {
  work: Project;
};
