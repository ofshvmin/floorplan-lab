import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import FullBath from "./FullBath"

import LivingRoom from "./LivingRoom"
import HalfBath from "./HalfBath"


const FloorPlan = () => {
  const bedNums = [1, 2, 3]
  return (
    <>
      <h1>Floor Plan</h1>
        <Bedroom />   
        <Kitchen />
        <FullBath />
        {bedNums.map((bedNum, idx) => 
        <Bedroom key={idx} bedNum = {bedNum}/>
          )}
        <LivingRoom />
        <HalfBath />
        <Bedroom />
    </>
  )
}

export default FloorPlan