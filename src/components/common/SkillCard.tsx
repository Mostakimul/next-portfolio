import { SkillCardProps } from '@/types/common';
import Image from 'next/image';

const SkillCard = ({ skill, icon }: SkillCardProps) => {
  return (
    <div className="grid place-items-center p-5 shadow-md bg-gray-700 drop-shadow-2xl hover:grow rounded-lg ">
      <div className="text-center mb-5">
        <Image src={icon} alt="skill" width={80} height={80} />
      </div>
      <h4 className="w-full text-center text-xl font-medium">{skill}</h4>
    </div>
  );
};

export default SkillCard;

// bg-gradient-to-r from-orange-800 to-pink-800
