import PageHeaderProducts from '../../components/PageHeaderProducts';
import Products from '../../components/Products';
import ProductShowcase from '../../components/ProductShowcase';
import Pricing from '../../components/Pricing';
import Cta from '../../components/Cta';

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <section id="page-header" className="scroll-mt-16">
        <PageHeaderProducts />
      </section>
      <section id="products" className="scroll-mt-16">
        <Products />
      </section>
      <section id="product-showcase" className="scroll-mt-16">
        <ProductShowcase />
      </section>
      <section id="pricing" className="scroll-mt-16">
        <Pricing />
      </section>
      <section id="cta" className="scroll-mt-16">
        <Cta />
      </section>
    </main>
  );
}