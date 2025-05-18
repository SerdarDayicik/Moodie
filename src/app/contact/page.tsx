import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#111] text-white">
      {/* Navigation */}
      <nav className="p-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">RoomAI</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-[#222] border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-[#222] border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 bg-[#222] border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-[#222] border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
              <p className="text-gray-400">
                Choose the most convenient way to get in touch with us. We're here to help!
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400">
                General Inquiries: contact@roomai.com<br />
                Support: support@roomai.com<br />
                Business: business@roomai.com
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Office</h3>
              <p className="text-gray-400">
                123 AI Avenue<br />
                Tech District<br />
                San Francisco, CA 94105<br />
                United States
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Hours</h3>
              <p className="text-gray-400">
                Monday - Friday: 9:00 AM - 6:00 PM (PST)<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-10 bg-[#1a1a1a] mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold hover:text-blue-500">
              RoomAI
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
          <p className="text-gray-400">© 2024 RoomAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 