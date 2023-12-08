import React, {useState, useEffect} from "react";
import BotCard from './BotCard'

function BotCollection({bots, onBotClick}) {
  // Your code here

  

  return (
    <div className="ui four column grid">
      <div className="row">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onClick={() => onBotClick(bot)} />
      ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
