import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:8002")
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);
        setItems(result);

        console.log(result)
      });
  }, []);

  



  return (
    <div>
      <YourBotArmy />
      <BotCollection items={items} isLoaded={isLoaded}/>
    </div>
  )
}

export default BotsPage;
