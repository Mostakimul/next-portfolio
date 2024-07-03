import PageTitle from '@/components/common/PageTitle';
import WorkCard from '@/components/common/WorkCard';
import { MdOutlineWorkOutline } from 'react-icons/md';

const myWorks = [
  {
    imageSrc: '/assets/nuxt.png',
    title: 'Nuxt App',
    badges: [{ link: '', title: 'Github' }],
    link: '12',
  },
  {
    imageSrc: '/assets/nuxt.png',
    title: 'Nuxt App',
    badges: [{ link: '', title: 'Github' }],
    link: '13',
  },
  {
    imageSrc: '/assets/nuxt.png',
    title: 'Nuxt App',
    badges: [{ link: '', title: 'Github' }],
    link: '14',
  },
  {
    imageSrc: '/assets/nuxt.png',
    title: 'Nuxt App',
    badges: [{ link: '', title: 'Github' }],
    link: '15',
  },
  {
    imageSrc: '/assets/nuxt.png',
    title: 'Nuxt App',
    badges: [{ link: '', title: 'Github' }],
    link: '16',
  },
  {
    imageSrc: '/assets/nuxt.png',
    title: 'Nuxt App',
    badges: [{ link: '', title: 'Github' }],
    link: '17',
  },
];

const Works = () => {
  return (
    <main>
      <div className="bg-gray-900 rounded w-full h-full p-10">
        <PageTitle title="Portfolio" icon={<MdOutlineWorkOutline />} />

        <section>
          <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {myWorks.map((wk) => (
              <WorkCard
                key={wk.link}
                imageSrc={wk.imageSrc}
                title={wk.title}
                badges={wk.badges}
                link={wk.link}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Works;
