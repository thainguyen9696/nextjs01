// app/page.tsx
import Link from 'next/link';
import './styles/home.scss';

export default function HomePage() {
  return (

    <div className="home">
      <header className="home__header">
        {/* <Menu /> */}
        <h1>Welcome to 3D Print Master</h1>
        <p>
          Discover our cutting-edge 3D printing products and services designed for both personal and business needs.
        </p>
      </header>

      <section className="home__featured">
        <h2>Featured Products</h2>
        <div className="home__featured-products">
          <div className="product">
            <h3>3D Printer Model X</h3>
            <p>Price: $2999</p>
            <Link href="/products/1">Learn More</Link>
          </div>
          <div className="product">
            <h3>3D Printer Model Y</h3>
            <p>Price: $3999</p>
            <Link href="/products/2">Learn More</Link>
          </div>
          <div className="product">
            <h3>3D Printer Model X</h3>
            <p>Price: $2999</p>
            <Link href="/products/3">Learn More</Link>
          </div>
          <div className="product">
            <h3>3D Printer Model X</h3>
            <p>Price: $2999</p>
            <Link href="/products/1">Learn More</Link>
          </div>
          <div className="product">
            <h3>3D Printer Model Y</h3>
            <p>Price: $3999</p>
            <Link href="/products/2">Learn More</Link>
          </div>
          <div className="product">
            <h3>3D Printer Model X</h3>
            <p>Price: $2999</p>
            <Link href="/products/3">Learn More</Link>
          </div>
          {/* Có thể thêm các sản phẩm khác */}
        </div>
      </section>

      <section className="home__services">
        <h2>Our 3D Printing Services</h2>
        <p>
          We offer professional 3D printing services starting at $99. Whether you need prototypes, custom designs, or production parts,
          our expert team is here to help.
        </p>
      </section>

      <section className="home__additional">
        <h2>Why Choose Us?</h2>
        <p>
          Our state-of-the-art technology and experienced professionals ensure high-quality prints with quick turnaround times.
          Explore our range of products and services to see how we can bring your ideas to life!
        </p>
      </section>

      <section className="home__contact">
        <h2>Get in Touch</h2>
        <div className="home__contact-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://zalo.me" target="_blank" rel="noopener noreferrer">Zalo</a>
        </div>
      </section>
    </div>
  );
}
