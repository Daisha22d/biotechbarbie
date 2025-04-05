export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="bg-gray-100 p-16"> 
        <div className="flex flex-row items-start justify-center max-w-5xl mx-auto space-x-12">
          <img
            src="/6cartoon.png"
            alt="Profile picture"
            className="rounded-full w-48 h-48 mt-8"
          />

          <div>
            <h1 className="text-4xl font-bold text-pink-400">About Me</h1>
            <p className="text-lg text-gray-800 mt-4 max-w-2xl">
              As a data scientist and lifelong learner, I'm currently completing my
              Master’s in Data Intelligence and Machine Learning at Mercer University.
              I'm passionate about transforming complex data into visually compelling
              stories, and I thrive on tackling new challenges.
            </p>
            <p className="text-lg text-gray-800 mt-4 max-w-2xl">
              When I'm not immersed in code or charts, you'll find me at the gym,
              enjoying a good book at a coffee shop, or diving into a new hobby for
              the sheer joy of it.
            </p>
            <p className="text-lg text-gray-800 mt-4 max-w-2xl">
              Fueled by a genuine curiosity and a drive to understand the "why" behind
              everything, I'm constantly exploring—whether it's in data, in life, or
              anywhere in between.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}