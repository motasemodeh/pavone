
import { Heart } from 'lucide-react';
import './ProductGrid.css';

// Import assets
import p1 from '../assets/WhatsApp Image 2026-04-28 at 02.31.32 (3).jpeg';
import p2 from '../assets/WhatsApp Image 2026-04-28 at 02.31.32 (4).jpeg';
import p3 from '../assets/WhatsApp Image 2026-04-28 at 02.31.32 (5).jpeg';
import p4 from '../assets/WhatsApp Image 2026-04-28 at 02.31.32 (6).jpeg';
import p5 from '../assets/WhatsApp Image 2026-04-28 at 02.31.32.jpeg';
import p6 from '../assets/WhatsApp Image 2026-04-28 at 02.31.31 (1).jpeg'; // Reusing some
import p7 from '../assets/WhatsApp Image 2026-04-28 at 02.31.31 (2).jpeg';
import p8 from '../assets/WhatsApp Image 2026-04-28 at 02.31.31 (3).jpeg';

const products = [
  { id: 1, title: 'Premium Red', price: '$80', stock: '20 left', img: p1, likes: 50 },
  { id: 2, title: 'Gold Reserve', price: '$120', stock: '12 left', img: p2, likes: 80 },
  { id: 3, title: 'Silver Mist', price: '$50', stock: '11 left', img: p3, likes: 97 },
  { id: 4, title: 'Dark Habano', price: '$250', stock: '5 left', img: p4, likes: 73 },
  { id: 5, title: 'Menthol Breeze', price: '$65', stock: '20 left', img: p5, likes: 70 },
  { id: 6, title: 'Classic White', price: '$35', stock: '25 left', img: p6, likes: 45 },
  { id: 7, title: 'Vintage Cohiba', price: '$450', stock: '3 left', img: p7, likes: 16 },
  { id: 8, title: 'Limited Edition', price: '$85', stock: '14 left', img: p8, likes: 94 },
];

const ProductCard = ({ product, onContact }: { product: any, onContact: any }) => (
  <div className="product-card">
    <div className="product-image">
      <img src={product.img} alt={product.title} />
      <div className="product-badge">Top Quality</div>
      <div className="product-author-avatar">
        <img src={`https://i.pravatar.cc/150?u=${product.id}`} alt="author" />
        <div className="verify-badge">✓</div>
      </div>
    </div>
    <div className="product-content">
      <div className="product-header">
        <h4>{product.title}</h4>
        <div className="product-menu">...</div>
      </div>
      <div className="product-price">
        <span>{product.price}</span>
        <span>{product.stock}</span>
      </div>
      <div className="product-footer">
        <button className="contact-link" onClick={() => onContact(product)}>Contact</button>
        <div className="product-likes">
          <Heart size={14} />
          <span>{product.likes}</span>
        </div>
      </div>
    </div>
  </div>
);

const ProductGrid = ({ onContact, title = "Featured Products", limit, searchQuery = "" }: any) => {
  let displayProducts = products;
  
  if (searchQuery) {
    displayProducts = displayProducts.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }
  
  if (limit) {
    displayProducts = displayProducts.slice(0, limit);
  }

  return (
    <section className="product-section" id="products">
      <div className="container">
        <h2 className="section-title">
          {title} {searchQuery && <span style={{ color: 'var(--text-muted)', fontSize: '1.2rem', fontWeight: 500 }}>for "{searchQuery}"</span>}
        </h2>
        
        {displayProducts.length > 0 ? (
          <div className="product-grid">
            {displayProducts.map(product => (
              <ProductCard key={product.id} product={product} onContact={onContact} />
            ))}
          </div>
        ) : (
          <div className="no-products" style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>No products found</h3>
            <p style={{ marginTop: '10px' }}>Try searching for a different term.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
