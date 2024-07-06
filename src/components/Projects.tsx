import { ProjectProps } from '@/types/common';
import WorkCard from './common/WorkCard';

const Projects = ({ works }: ProjectProps) => {
  return (
    <section>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {works.map((wk) => (
          <WorkCard key={wk._id} work={wk} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
