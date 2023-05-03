import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import Bath from "./Bath"
import LivingRoom from "./LivingRoom"



const FloorPlan = () => {
  
  return (
    <>
      <Bedroom bedNum = {1} />
        <LivingRoom />
        <Kitchen />
        <Bath size = {'Full'}/>
        <Bedroom bedNum = {2} />
        <Bath size = {'Half'}/>
        <Bedroom bedNum = {3} />
    </>
  )
}

export default FloorPlan