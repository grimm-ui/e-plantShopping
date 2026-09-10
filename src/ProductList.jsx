import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

const ProductList = () => {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        { name: 'Snake Plant', image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg', description: 'Produces oxygen at night, improving air quality.', cost: 15 },
        { name: 'Spider Plant', image: 'https://cdn.pixabay.com/photo/2018/07/15/20/21/chlorophytum-3530413_1280.jpg', description: 'Filters formaldehyde and xylene from air.', cost: 12 },
        { name: 'Peace Lily', image: 'https://cdn.pixabay.com/photo/2019/06/05/13/03/peace-lilies-4269365_1280.jpg', description: 'Removes mold spores and purifies the air.', cost: 18 },
        { name: 'Boston Fern', image: 'https://cdn.pixabay.com/photo/2020/04/20/15/08/boston-fern-5114414_1280.jpg', description: 'Adds moisture to the air, natural humidifier.', cost: 20 },
        { name: 'Cerus Rubber Plant', image: 'https://cdn.pixabay.com/photo/2020/02/15/11/41/flower-4850729_1280.jpg', description: 'Easy to grow plant with large, glossy leaves.', cost: 17 },
        { name: 'Aloe Vera', image: 'https://cdn.pixabay.com/photo/2018/04/05/09/29/leaf-3283175_1280.jpg', description: 'Packed with mang minerals good for skin and air.', cost: 14 }
      ]
    },
    {
      category: 'Aromatic Fragrant Plantq',
      plants: [
        { name: 'Lavender', image: 'https://images.unsplash.com/photo-1589296986498-28cd9406425d?w=500&q=80', description: 'Calming scent that helps reduce stress.', cost: 20 },
        { name: 'Jasmine', image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?w=500&q=80', description: 'Sweet fragrance to freshen up rooms.', cost: 18 },
        { name: 'Rosemary', image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg', description: 'Invigorating aroma often used in cooking.', cost: 15 },
        { name: 'Mint', image: 'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg', description: 'Fresh crisp scent great for beverages.', cost: 10 },
        { name: 'Lemon Balm', image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg', description: 'Citrus-scented herb used for relaxation.', cost: 16 },
        { name: 'Catnip', image: 'https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg', description: 'Sweet minty fragrance loved by felines.', cost: 13 }
      ]
    },
    {
      category: 'Medicinal Plants',
      plants: [
        { name: 'Echinacea', image: 'https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg', description: 'Boosts immunity and fights colds.', cost: 16 },
        { name: 'Peppermint', image: 'https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg', description: 'Aids in digestion and provides relief.', cost: 12 },
        { name: 'Chamomile', image: 'https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg', description: 'Soothes and promotes better sleep.', cost: 15 },
        { name: 'Calendula', image: 'https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg', description: 'Soothes skin irritations and wounds.', cost: 12 },
        { name: 'Basil', image: 'https://cdn.pixabay.com/photo/2015/09/09/17/38/basil-932079_1280.jpg', description: 'Antioxidant-rich and promotes healthfilness.', cost: 11 },
        { name: 'Marigold', image: 'https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg', description: 'Anti-bacterial properties used in remedies.', cost: 10 }
      ]
    }
  ];

  const calculateTotalQuantity = () => {
    return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart(prevState => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      <div className="navbar">
        <div className="tag">
          <div className="luxury">
            <img src="https://cdn.pixabay.com/photo/2012/04/18/14/06/leaf-37145_1280.png" alt="" />
            <a href="/" style={{ textDecoration: 'none' }}>
              <div>
                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                <i style={{ whiteSpace: 'nowrap', color: 'white' }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '300px' }}>
          <div>
            <a href="#" onClick={handlePlantsClick} style={{ color: 'white', fontSize: '20px', textDecoration: 'none' }}>
              Plants
            </a>
          </div>
          <div>
            <a href="#" onClick={handleCartClick} style={{ textDecoration: 'none' }}>
              <h1 className="cart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="68" width="68">
                  <rect width="156" height="156" fill="none"></rect>
                  <circle cx="80" cy="216" r="12"></circle>
                  <circle cx="184" cy="216" r="12"></circle>
                  <path d="M42,80H215a8,8,0,0,1,7.9,6.9l-16,96a8,8,0,0,1-7.9,7.1H71.2a8,8,0,0,1-7.9-7.1L43.2,40H24a8,8,0,0,1,0-16h20a8,8,0,0,1,7.9,6.9L54.8,80Z" fill="none" stroke="#fff" stroke-width="2"></path>
                </svg>
                <span className="cart_quantity_count">{calculateTotalQuantity()}</span>
              </h1>
            </a>
          </div>
        </div>
      </div>

      <div className="product-grid">
        {!showCart ? (
          <div>
            {plantsArray.map((category, index) => (
              <div key={index}>
                <h1 style={{ textAlign: 'center', margin: '20px 0' }}>{category.category}</h1>
                <div className="product-list">
                  {category.plants.map((plant, plantIndex) => {
                    const isAdded = addedToCart[plant.name] || cartItems.some(item => item.name === plant.name);
                    return (
                      <div className="product-card" key={plantIndex}>
                        <img className="product-image" src={plant.image} alt={plant.name} />
                        <div className="product-title">{plant.name}</div>
                        <div className="product-description">{plant.description}</div>
                        <div className="product-cost">${plant.cost}</div>
                        <button
                          className={`product-button ${isAdded ? "disabled" : ""}`}
                          disabled={isAdded}
                          onClick={() => handleAddToCart(plant)}
                        >
                          {isAdded ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <CartItem onContinueShopping={handleContinueShopping} />
        )}
      </div>
    </div>
  );
};

export default ProductList;
