import PageHeaderResources from '../../components/PageHeaderResources';
import Blog from '../../components/Blog';
import Faq from '../../components/Faq';

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <section id="page-header" className="scroll-mt-16">
        <PageHeaderResources />
      </section>
      <section id="blog" className="scroll-mt-16">
        <Blog />
      </section>
      <section id="faq" className="scroll-mt-16">
        <Faq />
      </section>
    </main>
  );
}