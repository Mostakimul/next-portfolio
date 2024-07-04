import PageTitle from '@/components/common/PageTitle';

const SingleWork = ({ params }: { params: { id: string } }) => {
  return (
    <main>
      <div className="bg-gray-900 rounded w-full  p-10 text-white">
        <PageTitle title={params.id} />

        <section className="mt-5">
          <div className="mb-4">
            <p className="text-gray-400">{`By ${'Mohit'} on ${'work.createdAt'}`}</p>
          </div>
          <div className="text-gray-300">
            <p>{'work.content'}</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SingleWork;
