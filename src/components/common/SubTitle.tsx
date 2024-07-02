import { PageTitleProps } from '@/types/common';

const SubTitle = ({ title, icon }: PageTitleProps) => {
  return (
    <h3 className="flex items-center gap-3 text-3xl font-medium mb-5">
      <span className="text-pink-600">{icon}</span>
      {title}
    </h3>
  );
};

export default SubTitle;
