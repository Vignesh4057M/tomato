import React, { useContext, useState, useEffect } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = () => {
  const { food_list } = useContext(StoreContext)

  const [category, setCategory] = useState('all')
  const [allFood, setAllFood] = useState([])

  // Load frontend data only
  useEffect(() => {
    setAllFood(food_list)
  }, [food_list])

  // UNIQUE categories
  const categories = [
    'all',
    ...new Set(allFood.map(item => item.category.toLowerCase()))
  ]

  // FILTER LOGIC
  const filteredFood =
    category === 'all'
      ? allFood
      : allFood.filter(
          item => item.category.toLowerCase() === category
        )

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>

      {/* CATEGORY DROPDOWN */}
      <select
        className="select-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat.toUpperCase()}
          </option>
        ))}
      </select>

      {/* FOOD LIST */}
      <div className="food-display-list">
        {filteredFood.map(item => (
          <FoodItem
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default FoodDisplay
