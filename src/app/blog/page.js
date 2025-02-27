export default function Blog() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-10">
        <h1 className="text-4xl font-bold text-pink-600">Blog</h1>
        <p className="text-lg text-gray-700 mt-4 text-center max-w-2xl">
          Exploring the intersection of AI, digital pathology, and biotech innovation.
        </p>
  
        {/* Blog Post Preview */}
        <div className="mt-10 w-full max-w-3xl">
          <article className="border-b pb-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">How AI is Transforming Digital Pathology</h2>
            <p className="text-gray-600 mt-2">
              Digital pathology combined with AI is revolutionizing diagnostics by improving efficiency, accuracy, and patient outcomes.
            </p>
            <a href="/blog/ai-digital-pathology" className="text-pink-600 mt-3 inline-block hover:underline">
              Read More →
            </a>
          </article>
        </div>
      </main>
    );
  }
  