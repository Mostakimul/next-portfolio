import { SkillProps } from '@/types/common';
import SkillCard from './common/SkillCard';
import SubTitle from './common/SubTitle';

const Skills = ({ skills }: SkillProps) => {
  return (
    <section className="bg-gray-800 py-10 px-5 mt-5 rounded-lg">
      <div>
        <SubTitle title="Working Skills" />
        <div className="grid sm:grid-cols-2 sm:grid-rows-6 md:grid-cols-3 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-3 gap-5">
          {skills.map((sk) => (
            <SkillCard key={sk.skill} icon={sk.icon} skill={sk.skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
