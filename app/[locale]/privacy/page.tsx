import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-white py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-sm text-foreground-muted mb-8">Last updated: [Date]</p>

          <div className="space-y-8 text-sm text-foreground-muted leading-relaxed">

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">1. Introduction</h2>
              <p>
                We take your privacy seriously. This policy describes how Coltek Robotics GmbH and
                Sunova Innovation B.V. collect, use, and protect your personal data in accordance
                with the General Data Protection Regulation (GDPR).
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">2. Data Controller</h2>
              <p>
                Coltek Robotics GmbH, Plinganserstraße 150, 81369 München, Germany<br />
                Sunova Innovation B.V., Rotterdam, Netherlands<br />
                Email:{' '}
                <a href="mailto:support@sunova-innovation.nl" className="text-primary hover:underline">
                  support@sunova-innovation.nl
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">3. Data We Collect</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Contact form submissions (name, company, email, message)</li>
                <li>Newsletter subscriptions (email address)</li>
                <li>Cookie data (with your consent)</li>
                <li>Website usage data (via Vercel Analytics, anonymized)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">4. How We Use Your Data</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>To respond to your inquiries</li>
                <li>To send product updates (if subscribed)</li>
                <li>To improve our website experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">
                5. Legal Basis (GDPR Art. 6)
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Consent (Art. 6(1)(a)) for cookies and newsletter</li>
                <li>Legitimate interest (Art. 6(1)(f)) for website analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">6. Data Retention</h2>
              <p>
                We retain contact form data for 24 months. You can request deletion at any time by
                contacting us at{' '}
                <a href="mailto:support@sunova-innovation.nl" className="text-primary hover:underline">
                  support@sunova-innovation.nl
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">7. Your Rights</h2>
              <p>
                Under GDPR, you have the right to: access, rectification, erasure, restriction,
                portability, and objection. To exercise your rights, please contact us directly.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">8. Contact</h2>
              <p>
                For data protection inquiries:{' '}
                <a href="mailto:support@sunova-innovation.nl" className="text-primary hover:underline">
                  support@sunova-innovation.nl
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">9. Updates</h2>
              <p>
                We may update this policy. Changes will be posted on this page with an updated
                revision date.
              </p>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
