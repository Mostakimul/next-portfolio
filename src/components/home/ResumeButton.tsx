'use client';
import { BsArrowDownCircle } from 'react-icons/bs';

const ResumeButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/Resume_of_Mostakimul_Karim.pdf';
    link.download = 'Mostakimul_Karim_Resume.pdf';
    link.click();
  };
  return (
    <button onClick={handleDownload} className="btn-gradient-reverese text-2xl">
      <BsArrowDownCircle /> Download Resume
    </button>
  );
};

export default ResumeButton;
