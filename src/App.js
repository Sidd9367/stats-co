import React from 'react';
import './App.css';
import Index from './components/Index' ;
import chest_img from "./homechest.png";
import battle_img from "./homebattle.png";
import tournament_img from "./hometournament.png";


function App() {
  return (
    <div className="Homepage">
      <Index/>
    <div className="App">
      <div className="home">
        <label className="home_label1">RoyalStats</label>
        <label className="home_label2">Eat Sleep Clash Repeat...</label>
             <select className="home_select1">
              <option value="Player">Player</option>
              <option value="Clan">Clan</option>
              </select>
              <input type="text" className="home_text1" placeholder="TAG #XXXXXX "></input>
              <button className=" home_button1 ">🔍 Search</button>
              </div>
        
        </div>
   <div className="home_info">
   <label className="home_label3">Features</label>
   <div className="home_features">
   <div className="home_chest">
   <img src={chest_img} alt=""/>
   <label className="home_label4">Upcoming Chest</label>
   <p className="feature_info" >  
   Wondering when that Legendary chest is coming? We got you covered.
   </p>
     </div>   
     <div className="home_tournament">
   <img src={tournament_img} alt=""  />
   <label className="home_label4">Tournament</label>
   <p className="feature_info">
   Check out our tournaments page to find free open tournaments.
   </p>
     </div>   
     <div className="home_battle">
   <img src={battle_img} alt=""  />
   <label className="home_label4">Battle</label>
   <p className="feature_info">   
   Wondering when that Legendary chest is coming? We got you covered.
   </p>
     </div> 
     </div>
     </div>   
     <div className="footer">
      <p className="footer_title">RoyalStats</p>
      </div>
    </div>
  
  );
}

export default App;
