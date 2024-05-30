
import MarketplaceCard from "./components/MarketplaceCard";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <MarketplaceCard 
        image="https://via.placeholder.com/150" 
        title="Product Title" 
        description="This is a short description of the product." 
        price="$49.99"
        buttonText="Buy Now"
      />
    </div>
  );
}

export default App;

