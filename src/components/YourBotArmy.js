import React, {useState} from "react";
import BotCard from "./BotCard";

function YourBotArmy({bot, selectedBot, onBotClick}) {
  //your bot army code here...

  if(!selectedBot) return <div>select</div>



  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
        {
          <BotCard bot={selectedBot} onClick={() => onBotClick(bot)}/>
        }
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
