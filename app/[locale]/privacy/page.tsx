import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tFooter = await getTranslations({ locale, namespace: 'footer' });
  const title = tFooter('privacy');

  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-white py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <h1 className="font-display text-3xl font-bold text-foreground mb-2">{title}</h1>
          <p className="text-sm text-foreground-muted mb-10">Last updated: April 2026</p>

          <div className="space-y-8 text-sm text-foreground-muted leading-relaxed">

            <section>
              <p>
                Sunova Innovation B.V. respects your privacy and processes personal data in
                accordance with applicable data protection laws, including the General Data
                Protection Regulation (GDPR).
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">Controller</h2>
              <p>
                The controller for the processing of personal data through this website is:
              </p>
              <div className="mt-2 space-y-0.5">
                <p>Sunova Innovation B.V.</p>
                <p>Rivium 1e straat 67</p>
                <p>2909 LE Capelle aan den IJssel</p>
                <p>The Netherlands</p>
                <p>KVK: 97839140</p>
                <p>VAT ID: NL868254149B01</p>
                <p>
                  Email:{' '}
                  <a href="mailto:support@sunova-innovation.nl" className="text-primary hover:underline">
                    support@sunova-innovation.nl
                  </a>
                </p>
              </div>
              <p className="mt-2">Legal representative / statutory director: Heng Sun</p>
              <p className="mt-2">
                For privacy-related questions or requests, please contact us at{' '}
                <a href="mailto:support@sunova-innovation.nl" className="text-primary hover:underline">
                  support@sunova-innovation.nl
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">Scope of this Privacy Policy</h2>
              <p>This Privacy Policy explains how we process personal data when you:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>visit this website;</li>
                <li>submit an inquiry through our contact form;</li>
                <li>contact us by email;</li>
                <li>access publicly available downloadable materials;</li>
                <li>interact with the website in connection with strictly necessary website functions.</li>
              </ul>
              <p className="mt-2">
                This website is intended as an informational and business inquiry website.
                No direct online sales are made through this website.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">Categories of Personal Data</h2>
              <p>
                Depending on how you interact with the website, we may process the following
                categories of personal data:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>identity and contact details, such as your name and email address;</li>
                <li>company-related information that you choose to provide;</li>
                <li>the content of your message or inquiry;</li>
                <li>
                  technical data, such as IP address, browser type, device information, date and
                  time of access, requested URL, referrer URL, and server log data;
                </li>
                <li>cookie or preference-related data, where applicable.</li>
              </ul>
              <p className="mt-2">
                We do not intentionally collect special categories of personal data through this
                website.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">Purposes of Processing and Legal Bases</h2>
              <p>We process personal data for the following purposes:</p>

              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">a. To respond to inquiries and communicate with you</h3>
                  <p className="mt-1">
                    When you submit a contact form or email us, we use your data to assess and
                    respond to your request and to communicate with you.
                  </p>
                  <p className="mt-1">
                    <span className="font-medium text-foreground">Legal basis:</span> Article 6(1)(b) GDPR, where processing is
                    necessary to take steps at your request prior to entering into a contract,
                    and/or Article 6(1)(f) GDPR, based on our legitimate interest in handling
                    business communications.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">b. To operate, secure, and maintain the website</h3>
                  <p className="mt-1">
                    We process limited technical data to maintain website functionality,
                    availability, performance, and security, including the detection and prevention
                    of abuse, errors, and security incidents.
                  </p>
                  <p className="mt-1">
                    <span className="font-medium text-foreground">Legal basis:</span> Article 6(1)(f) GDPR, based on our
                    legitimate interest in operating a secure and reliable website.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">c. To provide access to publicly available downloadable materials</h3>
                  <p className="mt-1">
                    Where the website offers manuals, brochures, sample files, or similar
                    materials for open download, we process limited technical data required to
                    deliver the files and maintain the security and integrity of the website and
                    hosting environment.
                  </p>
                  <p className="mt-1">
                    <span className="font-medium text-foreground">Legal basis:</span> Article 6(1)(f) GDPR, based on our
                    legitimate interest in making website resources available and protecting our
                    systems.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">d. To comply with legal obligations</h3>
                  <p className="mt-1">
                    We may process personal data where necessary to comply with legal, tax,
                    regulatory, or law-enforcement obligations.
                  </p>
                  <p className="mt-1">
                    <span className="font-medium text-foreground">Legal basis:</span> Article 6(1)(c) GDPR.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">e. To establish, exercise, or defend legal claims</h3>
                  <p className="mt-1">
                    Where necessary, personal data may be used in connection with legal claims,
                    dispute handling, internal record-keeping, or compliance matters.
                  </p>
                  <p className="mt-1">
                    <span className="font-medium text-foreground">Legal basis:</span> Article 6(1)(f) GDPR, based on our
                    legitimate interest in protecting our legal position.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">Source of Personal Data</h2>
              <p>We generally receive personal data directly from you when you:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>fill out our contact form;</li>
                <li>email us;</li>
                <li>use the website.</li>
              </ul>
              <p className="mt-2">
                We may also automatically receive limited technical information from your device
                or browser when you access the website.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">Whether Providing Personal Data is Mandatory</h2>
              <p>
                Providing personal data through the contact form or by email is voluntary.
                However, if you do not provide the information necessary to identify your request
                and contact you, we may not be able to respond properly.
              </p>
              <p className="mt-2">
                Access to publicly available downloadable materials does not require registration
                or the active submission of personal data, unless explicitly stated otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">Recipients or Categories of Recipients</h2>
              <p>We may share personal data, where necessary, with:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>website hosting providers;</li>
                <li>IT and website maintenance providers;</li>
                <li>email or communications service providers;</li>
                <li>legal, tax, or compliance advisers where necessary;</li>
                <li>
                  public authorities, regulators, courts, or law-enforcement agencies, where
                  required by law or necessary to protect legal rights.
                </li>
              </ul>
              <p className="mt-2">We do not sell personal data to third parties.</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">International Transfers</h2>
              <p>
                If personal data is processed by service providers outside the European Economic
                Area (EEA), such processing will only take place where appropriate safeguards are
                in place, such as an adequacy decision by the European Commission or appropriate
                safeguards under Article 46 GDPR, where required.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">Retention Period</h2>
              <p>
                We do not keep personal data longer than necessary for the purposes for which it
                was collected. As a default internal retention approach:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  contact inquiries and related correspondence may be retained for up to 24 months
                  after the last meaningful contact;
                </li>
                <li>
                  technical server logs may be retained for up to 30 days, unless a longer period
                  is necessary for security, fraud prevention, or incident investigation;
                </li>
                <li>
                  records related to legal obligations, disputes, or compliance matters may be
                  retained for a longer period where necessary under applicable law or for the
                  establishment, exercise, or defence of legal claims.
                </li>
              </ul>
              <p className="mt-2">
                Retention periods may be adjusted where required by law or justified by the
                specific nature of the interaction.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">Your Rights</h2>
              <p>Subject to applicable law, you may have the right to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>request access to your personal data;</li>
                <li>request rectification of inaccurate or incomplete personal data;</li>
                <li>request erasure of your personal data;</li>
                <li>request restriction of processing;</li>
                <li>object to processing based on legitimate interests;</li>
                <li>request data portability, where applicable;</li>
                <li>
                  withdraw consent at any time, where processing is based on consent, without
                  affecting the lawfulness of processing before withdrawal.
                </li>
              </ul>
              <p className="mt-2">
                To exercise your rights, please contact:{' '}
                <a href="mailto:support@sunova-innovation.nl" className="text-primary hover:underline">
                  support@sunova-innovation.nl
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">Complaints</h2>
              <p>
                If you believe that your personal data is being processed in violation of
                applicable law, you have the right to lodge a complaint with the Dutch Data
                Protection Authority (Autoriteit Persoonsgegevens) or with the competent
                supervisory authority in your place of residence, place of work, or place of the
                alleged infringement.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">Automated Decision-Making</h2>
              <p>
                We do not use personal data collected through this website for solely automated
                decision-making, including profiling, that produces legal effects concerning you
                or similarly significantly affects you.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">Security</h2>
              <p>
                Sunova Innovation B.V. takes appropriate technical and organisational measures to
                protect personal data against loss, misuse, unauthorised access, disclosure,
                alteration, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">Changes to this Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in the
                website, our services, or applicable legal requirements. The most recent version
                will always be published on this website.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">Contact</h2>
              <p>
                For questions about this Privacy Policy or the processing of personal data,
                please contact:
              </p>
              <div className="mt-2 space-y-0.5">
                <p>Sunova Innovation B.V.</p>
                <p>Rivium 1e straat 67</p>
                <p>2909 LE Capelle aan den IJssel</p>
                <p>The Netherlands</p>
                <p>
                  Email:{' '}
                  <a href="mailto:support@sunova-innovation.nl" className="text-primary hover:underline">
                    support@sunova-innovation.nl
                  </a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
