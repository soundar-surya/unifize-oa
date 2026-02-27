import EmptyState from './EmptyState';

export default function ProductGrid({ products, loading }) {
  if (loading) {
    return (
      <div className="product-grid">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    );
  }

  if (products.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="product-grid" aria-label="Product listing results">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="product-card" tabIndex={0} role="article">
      <img src={product.thumbnail} alt={product.name} />
      <div className="product-card-content">
        <div className="product-card-info">
          <p className="product-card-category">
            {product.category.toUpperCase()}
          </p>
          <p className="product-card-title">
            {product.title}
          </p>
          <p className="product-card-description">
            {product.description}
          </p>
        </div>
        <div className="divider" />
        <div className="product-card-secondary-info">
          <div className="product-card-price-stock">
            <p className="product-card-price">
              ${product.price}
            </p>
            <p className="product-card-stock">
              In stock: {product.stock}
            </p>
          </div>
          <span className="product-card-rating">
            ⭐️ {product.rating}
          </span>
        </div>
      </div>
    </div>
  );
}

function ShimmerCard() {
  return (
    <div className="product-card shimmer-card">
      <div className="shimmer-image" />
      <div className="product-card-content">
        <div className="product-card-info">
          <div className="shimmer-line shimmer-category" />
          <div className="shimmer-line shimmer-title" />
          <div className="shimmer-line shimmer-description-1" />
        </div>
        <div className="divider" />
        <div className="product-card-secondary-info">
          <div className="product-card-price-stock">
            <div className="shimmer-line shimmer-price" />
            <div className="shimmer-line shimmer-stock" />
          </div>
          <div className="shimmer-line shimmer-rating" />
        </div>
      </div>
    </div>
  );
}