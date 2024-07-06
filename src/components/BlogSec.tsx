import { BlogProps } from '@/types/common';
import BlogCard from './common/BlogCard';

const BlogSec = ({ blogs }: BlogProps) => {
  return (
    <section>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.map((bl) => (
          <BlogCard key={bl._id} blog={bl} />
        ))}
      </div>
    </section>
  );
};

export default BlogSec;
