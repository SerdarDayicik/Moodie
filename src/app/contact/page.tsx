import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#111] text-white">
      {/* Navigation */}
      <nav className="p-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">Moodi</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
        
        <div className="grid gap-8 max-w-2xl mx-auto">
          {/* Contact Information Cards */}
          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-colors">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Email Us</h2>
            <p className="text-xl text-gray-300">
              hi@synapiq.com
            </p>
            <p className="text-gray-400 mt-2">
              We typically respond within 24 hours
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-colors">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Office Location</h2>
            <p className="text-gray-300">
              71-75 Shelton Street<br />
              Covent Garden<br />
              London WC2H 9JQ<br />
              UNITED KINGDOM
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-colors">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Business Hours</h2>
            <p className="text-gray-300">
              Monday - Friday: 9:00 AM - 6:00 PM (PST)<br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-10 bg-[#1a1a1a] mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold hover:text-blue-500">
              Moodi
            </Link>
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
          <p className="text-gray-400">© 2025 Moodi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 
