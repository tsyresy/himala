import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-luxury font-bold text-gold-gradient">
            Privacy Policy
          </h1>
        </div>

        <div className="prose prose-invert prose-gold max-w-none space-y-12 font-light text-white/70 leading-relaxed">
          <section>
            <h2 className="text-2xl font-luxury text-white mb-6 uppercase tracking-widest">Introduction</h2>
            <p>
              Maison Himala ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and engage with our curation services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-luxury text-white mb-6 uppercase tracking-widest">Information Collection</h2>
            <p>
              We collect information that you provide directly to us, such as when you request a private consultation, subscribe to our newsletter, or contact our concierge. This may include your name, email address, phone number, and preferences regarding our collections.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-luxury text-white mb-6 uppercase tracking-widest">Data Usage</h2>
            <p>
              Your data is used exclusively to provide a personalized luxury experience. We use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>Process and manage your private bookings and inquiries.</li>
              <li>Provide technical vetting reports and certification details.</li>
              <li>Send exclusive updates regarding new curated collections.</li>
              <li>Ensure the security and integrity of our digital platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-luxury text-white mb-6 uppercase tracking-widest">Confidentiality</h2>
            <p>
              As a curator of high-value assets, we understand the importance of discretion. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. All inquiries are treated with the highest level of confidentiality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-luxury text-white mb-6 uppercase tracking-widest">Cookies & Tracking</h2>
            <p>
              We use subtle tracking technologies to enhance your browsing experience and analyze site traffic. You can choose to disable cookies through your browser settings, though this may impact certain site features.
            </p>
          </section>

          <section className="pt-12 border-t border-white/10">
            <p className="text-sm italic">
              Last updated: May 2026. For any inquiries regarding your data, please contact our private concierge.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
