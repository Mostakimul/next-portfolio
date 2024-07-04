import ContactForm from '@/components/common/ContactForm';
import PageTitle from '@/components/common/PageTitle';
import { BiMessageDetail } from 'react-icons/bi';

const Contact = () => {
  return (
    <main>
      <div className="bg-gray-900 rounded w-full h-full p-10">
        <PageTitle title="Contact" icon={<BiMessageDetail />} />

        <section className="pb-28">
          <ContactForm />
        </section>
      </div>
    </main>
  );
};

export default Contact;
