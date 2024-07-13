import PageTitle from '@/components/common/PageTitle';
import Projects from '@/components/Projects';
import { MdOutlineWorkOutline } from 'react-icons/md';

const Works = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/projects`, {
    cache: 'no-store',
  });
  const works = await res.json();

  return (
    <main>
      <div className="bg-gray-900 rounded w-full h-full p-10">
        <PageTitle title="Portfolio" icon={<MdOutlineWorkOutline />} />

        {works.data && <Projects works={works.data} />}
      </div>
    </main>
  );
};

export default Works;
