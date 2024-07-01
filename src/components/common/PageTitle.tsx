import React from 'react';

type PageTitleProps = {
  title: string;
  icon: React.ReactElement;
};

const PageTitle = ({ title, icon }: PageTitleProps) => {
  return (
    <section className="flex items-center gap-3 mb-10">
      <h2 className="text-5xl font-semibold">{title}</h2>
      <div className="bg-gradient-to-r from-orange-600 to-pink-600 rounded-full p-2 text-3xl font-semibold">
        {icon}
      </div>
    </section>
  );
};

export default PageTitle;
