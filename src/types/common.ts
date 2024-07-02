import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type PageTitleProps = {
  title: string;
  icon?: React.ReactElement;
};

export type SkillCardProps = {
  skill: string;
  icon: string | StaticImport;
};
