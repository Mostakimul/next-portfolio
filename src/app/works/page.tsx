import PageTitle from '@/components/common/PageTitle';
import Projects from '@/components/Projects';
import { MdOutlineWorkOutline } from 'react-icons/md';

const myWorks = [
  {
    id: '1',
    imageSrc: '/assets/nuxt.png',
    title: 'Nuxt Blog',
    badges: [
      { link: 'https://github.com/username/nuxt-blog', title: 'Github' },
      { link: 'https://nuxt-blog.example.com', title: 'Live' },
    ],
  },
  {
    id: '2',
    imageSrc: '/assets/nuxt.png',
    title: 'Nuxt E-commerce',
    badges: [
      { link: 'https://github.com/username/nuxt-ecommerce', title: 'Github' },
      { link: 'https://nuxt-ecommerce.example.com', title: 'Live' },
    ],
  },
  {
    id: '3',
    imageSrc: '/assets/nuxt.png',
    title: 'Nuxt Portfolio',
    badges: [
      { link: 'https://github.com/username/nuxt-portfolio', title: 'Github' },
      { link: 'https://nuxt-portfolio.example.com', title: 'Live' },
    ],
  },
  {
    id: '4',
    imageSrc: '/assets/nuxt.png',
    title: 'Nuxt CMS',
    badges: [
      { link: 'https://github.com/username/nuxt-cms', title: 'Github' },
      { link: 'https://nuxt-cms.example.com', title: 'Live' },
    ],
  },
  {
    id: '5',
    imageSrc: '/assets/nuxt.png',
    title: 'Nuxt Dashboard',
    badges: [
      { link: 'https://github.com/username/nuxt-dashboard', title: 'Github' },
      { link: 'https://nuxt-dashboard.example.com', title: 'Live' },
    ],
  },
  {
    id: '6',
    imageSrc: '/assets/nuxt.png',
    title: 'Nuxt Landing Page',
    badges: [
      {
        link: 'https://github.com/username/nuxt-landing-page',
        title: 'Github',
      },
      { link: 'https://nuxt-landing-page.example.com', title: 'Live' },
    ],
  },
];

const Works = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/projects`);
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
