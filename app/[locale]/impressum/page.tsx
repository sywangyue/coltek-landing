import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ImpressumPage() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-white py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-foreground mb-8">Impressum</h1>

          <div className="prose prose-sm max-w-none text-foreground-muted space-y-6">
            <section>
              <p className="text-sm text-foreground-muted mb-4">Angaben gemäß § 5 TMG:</p>

              <div className="space-y-4">
                <div>
                  <h2 className="text-base font-semibold text-foreground">Coltek Robotics GmbH</h2>
                  <p className="text-sm">
                    [Address to be provided]<br />
                    Plinganserstraße 150, 81369 München, Germany<br />
                    Tel: +49 151 20266740
                  </p>
                </div>

                <div>
                  <h2 className="text-base font-semibold text-foreground">Sunova Innovation B.V.</h2>
                  <p className="text-sm">
                    [Address to be provided]<br />
                    Rotterdam, Netherlands<br />
                    Tel: +31 645402151
                  </p>
                </div>
              </div>
            </section>

            <section>
              <p className="text-sm">
                E-Mail:{' '}
                <a href="mailto:support@sunova-innovation.nl" className="text-primary hover:underline">
                  support@sunova-innovation.nl
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-1">Vertreten durch:</h2>
              <p className="text-sm">[To be provided — Managing Director name]</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-1">Registereintrag:</h2>
              <p className="text-sm">
                Registergericht: [To be provided]<br />
                Registernummer: [To be provided]
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-1">Umsatzsteuer-ID:</h2>
              <p className="text-sm">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                [To be provided]
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-1">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
              </h2>
              <p className="text-sm">[To be provided]</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-1">Haftungsausschluss:</h2>
              <p className="text-sm text-foreground-muted">
                [Standard disclaimer text — to be reviewed by legal counsel]
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
