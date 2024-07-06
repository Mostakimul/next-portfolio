import { ExperienceProps, ExperienceType } from '@/types/common';
import { IoBriefcaseOutline } from 'react-icons/io5';
import SubTitle from './common/SubTitle';

const Experiences = ({ experiences }: ExperienceProps) => {
  return (
    <div>
      <SubTitle icon={<IoBriefcaseOutline />} title="Experience" />
      {experiences.map((ex: ExperienceType) => (
        <div
          key={ex._id}
          className="border border-b-2 border-gray-600 p-3 mb-5 rounded-md space-y-2"
        >
          <p className="font-light">{ex.timeFrame}</p>
          <p className="text-xl font-semibold">{ex.role}</p>
          <p className="text-lg font-light">{ex.company}</p>
          <p>{ex.location}</p>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
