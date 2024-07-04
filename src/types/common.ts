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

export type Blog = {
  id: string;
  title: string;
  author: string;
  content: string;
  createdAt: string;
};

export type BlogCardProps = {
  blog: Blog;
};
