import { ProjectCardProps } from '@/types/common';
import Image from 'next/image';
import Link from 'next/link';

const WorkCard = ({ work }: ProjectCardProps) => {
  return (
    <div
      className="rounded w-full overflow-hidden shadow-lg bg-white border border-transparent bg-cover bg-center h-72"
      style={{ backgroundImage: "url('/assets/blog.png')" }}
    >
      <div className="rounded bg-gray-600 bg-opacity-80 h-full px-5 py-2 flex items-center justify-between">
        <div>
          <div className="font-bold text-2xl mb-2">{work.title}</div>
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
            href={`works/${work._id}`}
            className="px-4 py-2 rounded font-light hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-800 bg-gradient-to-r from-orange-600 to-pink-600 text-center mt-5 w-1/3"
          >
            View Details
          </Link>
        </div>
        <div>
          <Image
            className="rounded w-full"
            src={work.imageSrc}
            alt={'work'}
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
