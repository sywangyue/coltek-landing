import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isDE = locale === 'de';

  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-white py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {isDE ? (
            <>
              <h1 className="font-display text-3xl font-bold text-foreground mb-8">Impressum</h1>
              <div className="prose prose-sm max-w-none text-foreground-muted space-y-6">
                <section>
                  <p className="text-sm text-foreground-muted mb-4">Angaben gemäß § 5 TMG:</p>
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-base font-semibold text-foreground">Coltek Robotics GmbH</h2>
                      <p className="text-sm">
                        Plinganserstraße 150, 81369 München, Deutschland<br />
                        Tel:{' '}
                        <a href="tel:+4915120266740" className="text-primary hover:underline">
                          +49 151 20266740
                        </a>
                      </p>
                    </div>
                    <div>
                      <h2 className="text-base font-semibold text-foreground">Sunova Innovation B.V.</h2>
                      <p className="text-sm">
                        Rotterdam, Niederlande<br />
                        Tel:{' '}
                        <a href="tel:+31645402151" className="text-primary hover:underline">
                          +31 645402151
                        </a>
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
              </div>
            </>
          ) : (
            <>
              <h1 className="font-display text-3xl font-bold text-foreground mb-8">Imprint</h1>
              <div className="prose prose-sm max-w-none text-foreground-muted space-y-6">
                <section>
                  <p className="text-sm text-foreground-muted mb-4">
                    Information in accordance with § 5 TMG:
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-base font-semibold text-foreground">Coltek Robotics GmbH</h2>
                      <p className="text-sm">
                        Plinganserstraße 150, 81369 Munich, Germany<br />
                        Tel:{' '}
                        <a href="tel:+4915120266740" className="text-primary hover:underline">
                          +49 151 20266740
                        </a>
                      </p>
                    </div>
                    <div>
                      <h2 className="text-base font-semibold text-foreground">Sunova Innovation B.V.</h2>
                      <p className="text-sm">
                        Rotterdam, Netherlands<br />
                        Tel:{' '}
                        <a href="tel:+31645402151" className="text-primary hover:underline">
                          +31 645402151
                        </a>
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
              </div>
            </>
          )}

        </div>
      </div>
      <Footer />
    </main>
  );
}
