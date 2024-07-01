import PageTitle from '@/components/common/PageTitle';
import Image from 'next/image';
import { CiMobile2 } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import ProfilePhoto from '../../../public/assets/profile.jpeg';

const About = () => {
  return (
    <main>
      <div className="bg-gray-900 rounded w-full h-full p-10">
        <PageTitle title="About Me" icon={<IoPersonOutline />} />

        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image div */}
            <div className="p-5">
              <Image
                src={ProfilePhoto}
                alt="Profile photo"
                height={300}
                width={100}
                className="rounded-lg w-full"
              />
            </div>

            {/* Info */}
            <div className="p-5">
              <div className="mb-10">
                <h3 className="text-3xl font-medium pb-3">Who Am I?</h3>
                <p className="text-lg pb-2 text-gray-400">
                  I am a passionate software engineer completed Master of
                  Professional Studies in Software Engineering at the University
                  of Maryland, Baltimore County (UMBC). My professional
                  experience includes roles such as Software Developer at KNOBS
                  Srl, Junior Web Developer at Sooneat Srl, and Full Stack
                  Developer at AAK Tele-science, INC, where I specialized in
                  developing innovative web applications and enhancing user
                  experiences.
                </p>
                <p className="text-lg pb-2 text-gray-400">
                  Proficient in technologies like JavaScript, TypeScript, HTML,
                  CSS, PHP, and Node.js, I have extensive experience with
                  frameworks including React, Next.js, and Express.js. My skills
                  extend to database management with MongoDB, MySQL, PostgreSQL,
                  and DynamoDB, and I am adept with tools like Prisma, Git,
                  Firebase, and Supabase. I hold certifications in Complete Web
                  Development and Web Development, showcasing my commitment to
                  continuous learning.
                </p>
                <p className="text-lg text-gray-400">
                  In addition to my technical expertise, I have held leadership
                  roles such as Treasurer of UIU Sports Club and Campus
                  Ambassador for Creative IT. These experiences have honed my
                  organizational and communication skills, enabling me to
                  balance technical and soft skills effectively. I am excited to
                  bring my expertise to new challenges and innovative projects.
                  Explore my portfolio to see my work and get in touch to
                  discuss potential collaborations.
                </p>
              </div>
              <div className="">
                <h3 className="text-3xl font-medium pb-3">Personal Info</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex items-center gap-2">
                    <div className="btn-gradient p-2 font-bold text-2xl rounded-full">
                      <CiMobile2 />
                    </div>
                    <div>
                      <p className="font-thin">Phone</p>
                      <p className="font-semibold">+1 667-678-0823</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="btn-gradient p-2 font-bold text-2xl rounded-full">
                      <MdOutlineEmail />
                    </div>
                    <div>
                      <p className="font-thin">Email</p>
                      <p className="font-semibold">mostakimulkarim@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
