import BlogCard from '@/components/common/BlogCard';
import PageTitle from '@/components/common/PageTitle';
import { RiBloggerLine } from 'react-icons/ri';

const blogs = [
  {
    id: '1',
    title: 'Understanding JavaScript Closures',
    author: 'Mostakimul Karim',
    content: 'A deep dive into closures in JavaScript and how they work.',
    createdAt: '2nd April, 23',
  },
  {
    id: '2',
    title: 'Getting Started with React',
    author: 'Jane Doe',
    content: 'An introductory guide to building applications with React.',
    createdAt: '15th May, 23',
  },
  {
    id: '3',
    title: 'Mastering CSS Grid',
    author: 'John Smith',
    content: 'Learn how to create complex layouts with CSS Grid.',
    createdAt: '30th June, 23',
  },
  {
    id: '4',
    title: 'A Guide to TypeScript',
    author: 'Mostakimul Karim',
    content: 'An overview of TypeScript and how it enhances JavaScript.',
    createdAt: '7th July, 23',
  },
  {
    id: '5',
    title: 'Building APIs with Node.js',
    author: 'Emily Johnson',
    content:
      'Step-by-step instructions for building RESTful APIs using Node.js.',
    createdAt: '20th August, 23',
  },
  {
    id: '6',
    title: 'Introduction to MongoDB',
    author: 'Michael Brown',
    content: "A beginner's guide to using MongoDB for data storage.",
    createdAt: '12th September, 23',
  },
  {
    id: '7',
    title: 'Understanding Promises in JavaScript',
    author: 'Sarah Lee',
    content:
      'A comprehensive look at promises and how to use them effectively.',
    createdAt: '25th October, 23',
  },
  {
    id: '8',
    title: 'Building Responsive Websites',
    author: 'David Wilson',
    content: 'Techniques and tips for creating responsive web designs.',
    createdAt: '10th November, 23',
  },
  {
    id: '9',
    title: 'Exploring Vue.js',
    author: 'Mostakimul Karim',
    content: 'An introduction to Vue.js and its core concepts.',
    createdAt: '5th December, 23',
  },
  {
    id: '10',
    title: 'Deploying Applications with Netlify',
    author: 'Laura Martinez',
    content: 'A guide to deploying web applications using Netlify.',
    createdAt: '22nd December, 23',
  },
];

const Blogs = () => {
  return (
    <main>
      <div className="bg-gray-900 rounded w-full h-full p-10">
        <PageTitle title="Blogs" icon={<RiBloggerLine />} />

        <section>
          <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogs.map((bl) => (
              <BlogCard key={bl.id} blog={bl} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Blogs;
