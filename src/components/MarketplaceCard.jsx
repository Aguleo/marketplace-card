

const MarketplaceCard = (image, title, description, price, buttonText) => {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-auto" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">{price}</span>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceCard;
