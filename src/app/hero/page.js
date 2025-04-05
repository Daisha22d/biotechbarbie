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
        <img src="/histoclassic.png" alt="Data Visual 1" className="rounded-lg shadow-md" />
        <img src="/multhisto.png" alt="Data Visual 2" className="rounded-lg shadow-md" />
        <img src="/residualhisto.png" alt="Data Visual 3" className="rounded-lg shadow-md" />
        <img src="/residualvsfitted.png" alt="Data Visual 4" className="rounded-lg shadow-md" />
      </div>
    </section>
  );
}