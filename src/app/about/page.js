import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="bg-gray-100 p-16">
        <div className="flex flex-row items-start justify-center max-w-5xl mx-auto space-x-12">
          <Image
            src="/6cartoon.png"
            alt="Profile picture"
            width={192} // Replace with actual width
            height={192} // Replace with actual height
            className="rounded-full mt-8"
          />

          <div>
            <h1 className="text-4xl font-bold text-pink-400">About Me</h1>
            <p className="text-lg text-gray-800 mt-4 max-w-2xl">
              As a data scientist and lifelong learner, I&apos;m currently completing my
              Masters in Data Intelligence and Machine Learning at Mercer University.
              I&apos;m passionate about transforming complex data into visually compelling
              stories, and I thrive on tackling new challenges.
            </p>
            <p className="text-lg text-gray-800 mt-4 max-w-2xl">
              When I&apos;m not immersed in code or charts, you&apos;ll find me at the gym,
              enjoying a good book at a coffee shop, or diving into a new hobby for
              the sheer joy of it.
            </p>
            <p className="text-lg text-gray-800 mt-4 max-w-2xl">
              Fueled by a genuine curiosity and a drive to understand the &quot;why&quot; behind
              everything, I&apos;m constantly exploring—whether it&apos;s in data, in life, or
              anywhere in between.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}