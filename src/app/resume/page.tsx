import PageTitle from '@/components/common/PageTitle';
import SubTitle from '@/components/common/SubTitle';
import Experiences from '@/components/Experiences';
import Skills from '@/components/Skills';
import { sortExperiences } from '@/utils/sortTimeFrame';
import { GrCertificate } from 'react-icons/gr';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { LiaGraduationCapSolid } from 'react-icons/lia';

const educations = [
  {
    subject: 'Msc in Software Engineering',
    year: '2022 - 2024',
    institution: 'University Of Maryland Baltimore County',
    location: 'Maryland, USA',
  },
  {
    subject: 'Bsc in Computer Science & Engineering',
    year: '2017 - 2021',
    institution: 'United International University',
    location: 'Dhaka, Bangladesh',
  },
  {
    subject: 'Higher Secondary Certificate',
    year: '2014 - 2016',
    institution: 'Govt. Science College',
    location: 'Dhaka, Bangladesh',
  },
];

const certifications = [
  {
    title: 'Level 2 Fullstack Developer',
    institution: 'Programming Hero',
  },
  {
    title: 'Web Development (PHP & Laravel)',
    institution: 'Creative IT',
  },
  {
    title: 'Complete Web Development',
    institution: 'Programming Hero',
  },
];

// const skills = [
//   {
//     skill: 'HTML',
//     icon: '/assets/skill/html.png',
//   },
//   {
//     skill: 'CSS',
//     icon: '/assets/skill/css.png',
//   },
//   {
//     skill: 'Javascript',
//     icon: '/assets/skill/js.png',
//   },
//   {
//     skill: 'React',
//     icon: '/assets/skill/react.png',
//   },
//   {
//     skill: 'Node',
//     icon: '/assets/skill/node.png',
//   },
//   {
//     skill: 'Express Js',
//     icon: '/assets/skill/express.png',
//   },
//   {
//     skill: 'Next Js',
//     icon: '/assets/skill/nextjs.png',
//   },
//   {
//     skill: 'Tailwind',
//     icon: '/assets/skill/tailwind.png',
//   },
//   {
//     skill: 'Prisma',
//     icon: '/assets/skill/prisma.png',
//   },
//   {
//     skill: 'Mongo DB',
//     icon: '/assets/skill/mongo.png',
//   },
//   {
//     skill: 'PostGreSql',
//     icon: '/assets/skill/postgres.png',
//   },
//   {
//     skill: 'GraphQL',
//     icon: '/assets/skill/graphql.png',
//   },
// ];

const Resume = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/experiences`);
  const experiences = await res.json();

  const res_skill = await fetch(
    `${process.env.NEXT_PUBLIC_APP_API_URL}/skills`,
  );
  const skills = await res_skill.json();

  return (
    <main>
      <div className="bg-gray-900 rounded w-full h-full p-10">
        <PageTitle title="Resume" icon={<HiOutlineBookOpen />} />

        <section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Experience */}

            {experiences.data && (
              <Experiences experiences={sortExperiences(experiences.data)} />
            )}

            {/* Certification */}
            <div>
              <SubTitle icon={<GrCertificate />} title="Certifications" />
              {certifications.map((cr) => (
                <div
                  key={cr.title}
                  className="border border-b-2 border-gray-600 p-3 mb-5 rounded-md space-y-2"
                >
                  <p className="text-xl font-semibold">{cr.title}</p>
                  <p className="font-light">{cr.institution}</p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div>
              <div>
                <SubTitle icon={<LiaGraduationCapSolid />} title="Education" />
                {educations.map((ed) => (
                  <div
                    key={ed.subject}
                    className="border border-b-2 border-gray-600 p-3 mb-5 rounded-md space-y-2"
                  >
                    <p className="font-light">{ed.year}</p>
                    <p className="text-xl font-semibold">{ed.subject}</p>
                    <p className="text-lg font-light">{ed.institution}</p>
                    <p>{ed.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {skills && <Skills skills={skills.data} />}
      </div>
    </main>
  );
};

export default Resume;
