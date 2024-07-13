import PageTitle from '@/components/common/PageTitle';
import Image from 'next/image';

const SingleWork = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_API_URL}/projects/${params.id}`,
  );

  const project = await res.json();
  const projectData = project.data;

  return (
    <main>
      <div className="bg-gray-900 rounded w-full p-10 text-white">
        {projectData ? (
          <>
            <PageTitle title={projectData?.title} />

            <section className="mt-5">
              <div className="rounded p-1">
                <Image
                  className="rounded w-full"
                  src={projectData?.imageSrc}
                  alt={'work'}
                  width={80}
                  height={80}
                  style={{
                    width: '100%',
                    height: '500px',
                  }}
                />
                <div className="px-3 py-4">
                  <div className="flex flex-wrap -m-1 mb-5">
                    {projectData?.badges.map(
                      (
                        badge: { link: string; title: string },
                        index: number,
                      ) => (
                        <a
                          href={badge.link}
                          key={index}
                          className="inline-block rounded-full px-3 py-1 text-sm font-semibold m-1 bg-gray-800"
                        >
                          {badge.title}
                        </a>
                      ),
                    )}
                  </div>
                  <p>{projectData?.description}</p>
                </div>
              </div>
            </section>
          </>
        ) : (
          'Loading...'
        )}
      </div>
    </main>
  );
};

export default SingleWork;
