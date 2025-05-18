import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111] text-white">
      {/* Navigation */}
      <nav className="p-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Moodie Logo"
              width={70}
              height={70}
              className="rounded-lg"
            />
            <span className="text-xl font-bold">Moodie</span>
          </div>
          <a
            href="#download"
            className="px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Transform Your Room <br />
          <span className="text-blue-500">With Moodie</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          Redesign your space instantly with our AI-powered room transformation app.
          Just snap a photo, choose your style, and watch the magic happen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition"
          >
            <Image
              src="/app-store.svg"
              alt="App Store"
              width={24}
              height={24}
            />
            Download on App Store
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Redesign Your Space in 3 Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/camera-icon.svg"
                  alt="Take Photo"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Snap a Photo</h3>
              <p className="text-gray-400">
                Take a picture of your room from any angle
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/style-icon.svg"
                  alt="Choose Style"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Pick Your Style</h3>
              <p className="text-gray-400">
                Choose from modern, minimalist, vintage, and more
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/magic-icon.svg"
                  alt="AI Transform"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Watch the Magic</h3>
              <p className="text-gray-400">
                Our AI transforms your room in seconds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Program */}
      <section className="px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Beta Program</h2>
          <p className="text-gray-400 mb-8">
            Be among the first to try our revolutionary AI room design technology.
            Limited spots available.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition"
          >
            Join the Beta
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Moodie"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className="font-bold">Moodie</span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white">
              Terms of Use
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>
          <p className="text-gray-400">© 2025 Moodie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
