import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  const [bots, setBots] = useState([])
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((response) => response.json())
      .then((data) => {

        // console.log(data)
        setBots(data);


      });

  }, []);


  function handleAddToArmy(bot){

    setSelectedBot((prevSelectedBot) => {
      if (
        prevSelectedBot === bot
      ) {
        return null;
      }else {
        return bot
      }
      
    })

  }

  return (
    <div>
      <YourBotArmy bot={bots} selectedBot={selectedBot} onBotClick={handleAddToArmy}/>
      <BotCollection  bots={bots} onBotClick={handleAddToArmy}/>
    </div>
  )
}

export default BotsPage;
