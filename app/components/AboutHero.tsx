
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[400px] w-full">
      {/* Background Image */}
      <Image
        src="/ah3.jfif"
        alt="About SHEE-MG"
        fill
        className="object-cover"
        priority
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-blue-900/50" />

      {/* Text on top */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-white">About Us</h1>
      </div>
    </section>
  );
}

