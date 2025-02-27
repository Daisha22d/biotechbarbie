export default function BlogPost() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-10">
        <h1 className="text-4xl font-bold text-pink-600">How AI is Transforming Digital Pathology</h1>
        <p className="text-lg text-gray-700 mt-4 text-center max-w-2xl">
          AI-powered digital pathology is unlocking faster, more accurate diagnoses, leading to better patient outcomes.
        </p>
  
        <article className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-semibold text-gray-800">💡 The Future of Pathology is Digital</h2>
          <p className="text-gray-600 mt-2">
            Pathologists have traditionally relied on glass slides and microscopes, but digital pathology is changing that. 
            AI-powered models can now analyze whole slide images (WSIs) to detect patterns, classify diseases, and assist in early diagnosis.
          </p>
  
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">🔬 How AI is Improving Accuracy</h2>
          <p className="text-gray-600 mt-2">
            By training deep learning models on thousands of annotated pathology slides, AI can help flag abnormalities, reducing human error 
            and ensuring **more precise diagnoses**. Some companies, like **PathAI** and **Tempus**, are leading the charge in AI-driven pathology.
          </p>
  
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">🚀 What This Means for the Future</h2>
          <p className="text-gray-600 mt-2">
            AI-assisted pathology doesn’t replace human expertise but enhances it. With AI models handling repetitive tasks, 
            pathologists can focus on complex cases, leading to **faster diagnoses and better patient care**.
          </p>
  
          <p className="text-gray-700 font-semibold mt-6">
            AI + digital pathology is the future of biotech— and I'm here to be part of that transformation.  
          </p>
        </article>
      </main>
    );
  }
  