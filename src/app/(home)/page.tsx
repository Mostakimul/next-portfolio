import Header from '@/components/home/Header';
import Profile from '@/components/home/Profile';

export const metadata = {
  title: 'Home-2 || Bostami - Professional portfolio NextJS Template',
  description:
    'Discover Botami,the most impressive portfolio template for work showcase, blog',
};
export default function MyHome() {
  return (
    <div className="h-full">
      <Header />
      <Profile />
    </div>
  );
}
