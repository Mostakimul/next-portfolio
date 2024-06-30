import Image from 'next/image';
import { BsArrowDownCircle } from 'react-icons/bs';
import { CiLinkedin } from 'react-icons/ci';
import { LuTwitter } from 'react-icons/lu';
import { VscGithubInverted } from 'react-icons/vsc';
import profileImage from '../../../public/assets/profile2.jpg';

const Profile = () => {
  return (
    <section className="grid place-items-center h-full w-full">
      {/* Image section */}
      <div className="grid place-items-center">
        <div className="mb-5">
          <Image
            src={profileImage}
            alt="profile"
            height={300}
            width={300}
            className="rounded-full"
          />
        </div>
        <div className="grid place-items-center space-y-5">
          {/* Name */}
          <h1 className="text-gray-50 font-semibold text-3xl md:text-6xl mb-3">
            Mostakimul Karim
          </h1>
          <p className="btn-gradient text-xl">Fullstack Developer</p>

          {/* Social Icons */}
          <div className="text-gray-50 flex justify-center items-center gap-3 text-3xl">
            <a
              className="bg-gray-800 p-1 rounded"
              href="https://www.linkedin.com/in/mostakimul/"
              target="_blank"
            >
              <CiLinkedin />
            </a>
            <a
              className="bg-gray-800 p-1 rounded"
              href="https://github.com/Mostakimul"
              target="_blank"
            >
              <VscGithubInverted />
            </a>
            <a
              className="bg-gray-800 p-1 rounded"
              href="https://x.com/mostakimulkarim"
              target="_blank"
            >
              <LuTwitter />
            </a>
          </div>
          {/* Resume download button */}
          <button className="btn-gradient-reverese text-2xl">
            <BsArrowDownCircle /> Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
