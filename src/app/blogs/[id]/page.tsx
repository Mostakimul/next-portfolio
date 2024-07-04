import PageTitle from '@/components/common/PageTitle';

// async function fetchBlog(id: string): Promise<Blog> {
//   const res = await fetch(`https://api.example.com/blogs/${id}`);
//   if (!res.ok) {
//     throw new Error('Failed to fetch the blog data');
//   }
//   return res.json();
// }

const SingleBlog = async ({ params }: { params: { id: string } }) => {
  // const blog = await fetchBlog(params.id);
  return (
    <main>
      <div className="bg-gray-900 rounded w-full  p-10 text-white">
        <PageTitle title={params.id} />

        <section className="mt-5">
          <div className="mb-4">
            <p className="text-gray-400">{`By ${'Mohit'} on ${'blog.createdAt'}`}</p>
          </div>
          <div className="text-gray-300">
            <p>{'blog.content'}</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SingleBlog;
