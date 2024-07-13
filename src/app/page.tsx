import Profile from '@/components/home/Profile';

export const metadata = {
  title: "Mostakimul's Portfolio",
  description: 'Discover About Mostakimul Karim',
};

export default function Home() {
  return (
    <main>
      <div className="h-full">
        <Profile />
      </div>
    </main>
  );
}
