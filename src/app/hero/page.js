import Image from 'next/image';

export default function Hero() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
        Daisha Drayton
      </h1>
      <p className="text-lg md:text-xl text-gray-800 mb-10">
        The Art of Data. The Science of Sight.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Image
          src="/histoclassic.png"
          alt="Data Visual 1"
          width={500} // Replace with actual width
          height={300} // Replace with actual height
          className="rounded-lg shadow-md"
        />
        <Image
          src="/multhisto.png"
          alt="Data Visual 2"
          width={500} // Replace with actual width
          height={300} // Replace with actual height
          className="rounded-lg shadow-md"
        />
        <Image
          src="/residualhisto.png"
          alt="Data Visual 3"
          width={500} // Replace with actual width
          height={300} // Replace with actual height
          className="rounded-lg shadow-md"
        />
        <Image
          src="/residualvsfitted.png"
          alt="Data Visual 4"
          width={500} // Replace with actual width
          height={300} // Replace with actual height
          className="rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}