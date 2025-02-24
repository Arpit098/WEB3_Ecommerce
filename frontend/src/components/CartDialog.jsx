const CartDialog = ({ cartItems, onRemoveItem, onClearCart }) => {
  const totalETH = cartItems
    .reduce((sum, item) => sum + item.eth, 0)
    .toFixed(3);
  const totalUSD = cartItems
    .reduce((sum, item) => sum + item.usd, 0)
    .toFixed(2);

  return (
    <div className="fixed top-10 right-10 bg-white shadow-lg rounded-2xl p-4 w-80 border border-gray-200">
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-lg font-semibold">Cart ({cartItems.length})</h2>
        <button className="text-sm text-gray-500" onClick={onClearCart}>
          Clear items
        </button>
      </div>
      <div className="mt-3 space-y-2 max-h-60 overflow-y-auto">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 bg-gray-100 rounded-lg"
          >
            <div className="flex items-center space-x-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-md"
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">{item.eth} ETH</p>
              <p className="text-xs text-gray-500">${item.usd}</p>
              <button
                className="text-red-500 text-xs mt-1"
                onClick={() => onRemoveItem(index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t pt-2 mt-2">
        <div className="flex justify-between text-sm font-medium">
          <span>Total</span>
          <span>{totalETH} ETH</span>
        </div>
        <p className="text-xs text-gray-500 text-right">${totalUSD}</p>
        <button className="mt-3 w-full py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-purple-700">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartDialog;
