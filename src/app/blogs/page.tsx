import BlogSec from '@/components/BlogSec';
import PageTitle from '@/components/common/PageTitle';
import { RiBloggerLine } from 'react-icons/ri';

const Blogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/blogs`);
  const blogs = await res.json();

  return (
    <main>
      <div className="bg-gray-900 rounded w-full h-full p-10">
        <PageTitle title="Blogs" icon={<RiBloggerLine />} />

        {blogs.data && <BlogSec blogs={blogs.data} />}
      </div>
    </main>
  );
};

export default Blogs;
