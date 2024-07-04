import { WorkCardProps } from '@/types/common';
import Image from 'next/image';
import Link from 'next/link';

const WorkCard = ({ work }: WorkCardProps) => {
  return (
    <div className="rounded w-full overflow-hidden shadow-lg bg-white border border-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white rounded p-1">
        <Image
          className="rounded w-full"
          src={work.imageSrc}
          alt={'work'}
          width={400}
          height={300}
        />
        <div className="px-3 py-4">
          <div className="font-bold text-xl mb-2 text-black">{work.title}</div>
          <div className="flex flex-wrap -m-1 mb-5">
            {work.badges.map((badge, index) => (
              <a
                href={badge.link}
                key={index}
                className="inline-block rounded-full px-3 py-1 text-sm font-semibold m-1 bg-gray-800"
              >
                {badge.title}
              </a>
            ))}
          </div>
          <Link
            href={`works/${work.id}`}
            className="px-4 py-2 rounded font-light hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-800 bg-gradient-to-r from-orange-600 to-pink-600 text-center mt-5 w-1/3"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
