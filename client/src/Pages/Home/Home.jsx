import { useState } from "react"
import ExploreMenu from "../../Components/ExploreMenu"
import FoodDisplay from "../../Components/FoodDisplay"
import HomeHeader from "../../Components/HomeHeader"

const Home = () => {
  const [category, setCategory]=useState("All")

  return (
    <div>
      <HomeHeader/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
