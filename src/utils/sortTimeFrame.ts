import { ExperienceType } from '@/types/common';

export const sortExperiences = (
  experiences: ExperienceType[],
): ExperienceType[] => {
  return experiences.sort((a, b) => {
    const getDate = (timeFrame: string): Date => {
      const [start] = timeFrame.split(' - ');
      return new Date(start);
    };

    return getDate(b.timeFrame).getTime() - getDate(a.timeFrame).getTime();
  });
};
