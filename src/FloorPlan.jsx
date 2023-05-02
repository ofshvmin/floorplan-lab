import Bedroom1 from "./Bedroom1"
import Kitchen from "./Kitchen"
import FullBath from "./FullBath"
import Bedroom2 from "./Bedroom2"
import LivingRoom from "./LivingRoom"
import HalfBath from "./HalfBath"
import Bedroom3 from "./Bedroom3"

const FloorPlan = () => {
  return (
    <>
      <h1>Floor Plan</h1>
        <Bedroom1 />   
        <Kitchen />
        <FullBath />
        <Bedroom2 />
        <LivingRoom />
        <HalfBath />
        <Bedroom3 />
    </>
  )
}

export default FloorPlan