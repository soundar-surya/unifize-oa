import EmptyStateIcon from '../../assets/EmptyState.svg';

export default function EmptyState() {
  return (
    <div className="empty-state">
      <img 
        src={EmptyStateIcon} 
        alt="No products found" 
        className="empty-state-icon"
      />
      <h2 className="empty-state-title">No Products Found</h2>
      <p className="empty-state-description">
        We couldn't find any products matching your filters. Try adjusting your search or filter criteria.
      </p>
    </div>
  );
}
