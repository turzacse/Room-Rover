import { useSearchParams } from "react-router-dom";
import Category from "../../components/Rooms/Categories/Category"
import Room from "../../components/Rooms/Room"

const Home = () => {
  
  return (
    <div>
      {/* category section  */}
      <Category></Category>
      {/* room section  */}
      <Room></Room>
    </div>
  )
}

export default Home
