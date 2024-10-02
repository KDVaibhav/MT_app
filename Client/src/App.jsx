import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [colorCode, setColorCode] = useState('#FFFFFF');

  useEffect(() => {
    async function fetchTenantData() {
      try {
        const response = await axios.get('/api/restaurants');
        setRestaurants(response.data.restaurants);
        setColorCode(response.data.colorCode);
      } catch (error) {
        console.error('Error fetching tenant data', error);
      }
    }

    fetchTenantData();
  }, []);

  return (
    <div style={{ backgroundColor: colorCode, padding: '20px' }}>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant._id}>
            {restaurant.restaurantName} - {restaurant.cuisine}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
