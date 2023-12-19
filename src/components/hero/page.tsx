import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="bg-red-100 hero-section bg-cover bg-center text-black relative overflow-hidden mb-4">
      <Image
        src="/admin ui/hero/hero-2.png" // Adjust the path based on your project structure
        alt="Hero Section Image"
        layout="responsive"
        width={1200}
        height={800}
        objectFit="cover"
      />

      <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Unleash Innovation in Every Byte.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">
          Explore a World of Cutting-Edge Tech.
        </p>
        <Link href="/Categories">
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm md:text-base lg:text-lg">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

