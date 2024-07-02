import PageTitle from '@/components/common/PageTitle';
import SkillCard from '@/components/common/SkillCard';
import SubTitle from '@/components/common/SubTitle';
import { GrCertificate } from 'react-icons/gr';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { IoBriefcaseOutline } from 'react-icons/io5';
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

const experiences = [
  {
    timeFrame: 'March 2022 - August 2022',
    role: 'Software Developer',
    company: 'KNOBS Srl',
    location: 'Milan, Italy',
  },
  {
    timeFrame: 'Dec 2021 - February 2022',
    role: 'Junior Web Developer',
    company: 'Sooneat Srl',
    location: 'Milan, Italy',
  },
  {
    timeFrame: 'March 2021 - June 2021',
    role: 'Web Developer',
    company: 'AAK-Telescience INC',
    location: 'Davis, California (Remote)',
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

const skills = [
  {
    skill: 'HTML',
    icon: '/assets/skill/html.png',
  },
  {
    skill: 'CSS',
    icon: '/assets/skill/css.png',
  },
  {
    skill: 'Javascript',
    icon: '/assets/skill/js.png',
  },
  {
    skill: 'React',
    icon: '/assets/skill/react.png',
  },
  {
    skill: 'Node',
    icon: '/assets/skill/node.png',
  },
  {
    skill: 'Express Js',
    icon: '/assets/skill/express.png',
  },
  {
    skill: 'Next Js',
    icon: '/assets/skill/nextjs.png',
  },
  {
    skill: 'Tailwind',
    icon: '/assets/skill/tailwind.png',
  },
  {
    skill: 'Prisma',
    icon: '/assets/skill/prisma.png',
  },
  {
    skill: 'Mongo DB',
    icon: '/assets/skill/mongo.png',
  },
  {
    skill: 'PostGreSql',
    icon: '/assets/skill/postgres.png',
  },
  {
    skill: 'GraphQL',
    icon: '/assets/skill/graphql.png',
  },
];

const Resume = () => {
  return (
    <main>
      <div className="bg-gray-900 rounded w-full h-full p-10">
        <PageTitle title="Resume" icon={<HiOutlineBookOpen />} />

        <section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Experience */}
            <div>
              <SubTitle icon={<IoBriefcaseOutline />} title="Experience" />
              {experiences.map((ex) => (
                <div
                  key={ex.timeFrame}
                  className="border border-b-2 border-gray-600 p-3 mb-5 rounded-md space-y-2"
                >
                  <p className="font-light">{ex.timeFrame}</p>
                  <p className="text-xl font-semibold">{ex.role}</p>
                  <p className="text-lg font-light">{ex.company}</p>
                  <p>{ex.location}</p>
                </div>
              ))}
            </div>

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

        <section className="bg-gray-800 py-10 px-5 mt-5 rounded-lg">
          <div>
            <SubTitle title="Working Skills" />
            <div className="grid sm:grid-cols-2 sm:grid-rows-6 md:grid-cols-3 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-3 gap-5">
              {skills.map((sk) => (
                <SkillCard key={sk.skill} icon={sk.icon} skill={sk.skill} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Resume;
