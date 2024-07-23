import Hero from "@/app/Hero";

export default function Home() {
  return (
    <main className="relative bg-blue-400 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="max-w-7xl w-full">
        <Hero/>
      </div>
    </main>
  );
}
