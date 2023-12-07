import React, {useState} from "react";
import BotCard from "./BotCard";

function YourBotArmy() {
  //your bot army code here...

  const [myArmy, setMyArmy] = useState([]);

  function handleAddToArmy(bot){

    if (!myArmy.find((b) => b.id === bot.id))

    setMyArmy([...myArmy, bot])

  }


  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
        {myArmy.map((bot) => (
          <BotCard key={bot.id} 
          bot={bot} 
          onAddToArmy={() => handleAddToArmy(bot)} />
        ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
