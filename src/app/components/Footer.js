export default function Footer() {
    return (
      <footer id="contact" className="bg-gray-900 text-pink-400 p-8 text-center">
        <div className="container mx-auto">
          <p className="text-lg font-semibold mb-2">Connect:</p>
          <p>
            Email: <a href="daishadeniz@gmail.com" className="underline">daishadeniz@gmail.com</a>
          </p>
          <p>
            Medium: <a href="https://medium.com/@daishadeniz" className="underline">medium.com/@daishadeniz</a>
          </p>
          <p>
            LinkedIn: <a href="https://www.linkedin.com/in/daishadrayton22" className="underline">linkedin.com/in/daishadrayton22</a>
          </p>
          <p className="mt-4">
            &copy; {new Date().getFullYear()} Daisha Drayton. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }