import { BlogCardProps } from '@/types/common';
import Link from 'next/link';

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div
      className="rounded w-full overflow-hidden shadow-lg bg-white border border-transparent bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/blog.png')" }}
    >
      <div className="bg-gray-600 bg-opacity-75 p-4">
        <div className="relative font-bold text-xl mb-3 text-white">
          {blog.title}
          <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></span>
        </div>
        <p className="text-gray-50 text-base">
          {blog.content.substring(0, 50)}...
        </p>
        <div className="my-4">
          <span className="text-gray-50 text-sm">By {blog.author}</span>
          <span className="text-gray-50 text-sm float-right">
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>
        </div>
        <Link
          href={`/blogs/${blog._id}`}
          className="px-4 py-2 rounded font-light hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-800 bg-gradient-to-r from-orange-600 to-pink-600 text-center mt-5 w-1/3"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
