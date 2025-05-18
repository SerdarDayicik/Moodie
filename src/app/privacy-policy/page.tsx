import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#111] text-white flex flex-col">
      {/* Navigation */}
      <nav className="p-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">Moodi</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-grow max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy for Moodi</h1>
        <p className="text-gray-400 italic mb-8">Last Update: May 17, 2025</p>
        
        <div className="space-y-8 text-gray-300">
          <div className="space-y-6">
            <p>
              Moodi does not collect or store any personally identifiable information. The app allows users to take or upload photos of their rooms to generate AI-powered design suggestions. All image processing is performed either locally or via third-party AI services, without collecting personal information.
            </p>

            <p>
              We do not use tracking technologies, and we do not display personalized ads. Moodi may use anonymous usage statistics (such as feature usage frequency or crash data) solely to improve the app's performance and user experience.
            </p>

            <p>
              If you have any questions regarding this Privacy Policy, feel free to contact us at support@moodiapp.com.
            </p>

            <p>
              This policy may be updated from time to time. Continued use of the app constitutes acceptance of the latest version.
            </p>
          </div>

          <div className="mt-12">
            <p className="text-teal-500">Moodi Team</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-10 bg-[#1a1a1a] mt-auto">
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