import Oven from "./Oven"
import Stove
 from "./Stove"
const Kitchen = () => {
  return (
    <div id="kitchen">
      <Oven />
      <Stove />
      <h2>Kitchen</h2>
    </div>
  )
}

export default Kitchen