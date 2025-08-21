import PageHeaderIntegrations from '../../components/PageHeaderIntegrations';
import Integrations from '../../components/Integrations';
import Partners from '../../components/Partners';

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen">
      <section id="page-header" className="scroll-mt-16">
        <PageHeaderIntegrations />
      </section>
      <section id="integrations" className="scroll-mt-16">
        <Integrations />
      </section>
      <section id="partners" className="scroll-mt-16">
        <Partners />
      </section>
    </main>
  );
}