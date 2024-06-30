import MyHome from './(home)/page';

export default function Home() {
  return (
    <main className="h-screen w-full bg-pattern">
      <div className="p-7 pb-14 h-full">
        <div className="container mx-auto h-full">
          <MyHome />
        </div>
      </div>
    </main>
  );
}
