import Icons from '../Icons/Icons'
import "./Cards.css";

function Cards({gameEnd, player, onPlay, index}) {
  let icon = <Icons />
  if (player == "O") {
    icon = <Icons name="circle" />
  } else if (player == "X"){
    icon = <Icons name="cross" />
  }

  return (
    <div className="card" onClick={() => !gameEnd && player=="" && onPlay(index)}>
      {icon}
    </div>
  )
}

export default Cards;