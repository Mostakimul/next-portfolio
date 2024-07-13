import PageTitle from '@/components/common/PageTitle';
import parse from 'html-react-parser';
const SingleBlog = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_API_URL}/blogs/${params.id}`,
    {
      cache: 'no-store',
    },
  );
  const blog = await res.json();
  const blogData = blog.data;

  return (
    <main>
      <div className="bg-gray-900 rounded w-full  p-10 text-white">
        {blogData ? (
          <>
            <PageTitle title={blogData?.title} />

            <section className="mt-5">
              <div className="mb-4">
                <p className="text-gray-400">{`By ${
                  blogData?.author
                } on ${new Date(blogData?.createdAt).toLocaleDateString()}`}</p>
              </div>
              <div className="text-gray-300">
                <p>{parse(blogData?.content)}</p>
              </div>
            </section>
          </>
        ) : (
          'Loading....'
        )}
      </div>
    </main>
  );
};

export default SingleBlog;
