import React, { Component } from "react";
import trp from "./om.png";
import battle from "./battle 8.png";
import cards from "./image 6.png";
// import ex from "./image 5.png"
import ba from "./image 4.png";
import "../App.css";

export default class Container extends Component {
  render() {
    return (

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <img src={battle} alt="" id="ba" /> Battle
          </h5>
          <h5 className="card-title" id="vord">
            Victory
          </h5>
          <h6 id="score">2 : 0</h6>
          <div className="container" id="Deck">
            <h6 id="player">Player_Name</h6>
            <h6 id="clann">
              Clan_Name <i class="fas fa-chevron-right"></i>
            </h6>
            <div className="line1"></div>
            <h6 id="trp"> <img src={trp} alt="" />  Trophys </h6>
            <img src={cards} alt="" id="ca" />
            <img src={cards} alt="" id="ca" />
            <img src={cards} alt="" id="ca" />
            <img src={cards} alt="" id="ca" />
            <img src={cards} alt="" id="ca" />
            <img src={cards} alt="" id="ca" />
            <img src={cards} alt="" id="ca" />
            <img src={cards} alt="" id="ca" />
            <br />
            <h6 className="Avg-elixir">Average Elixir cost: 4.1</h6>
            <img className="btn" src={ba} alt="" />
          </div>

          <div className="line"></div>
          <h6 id="player1" className="">
            Player_Name
          </h6>
          <h6 id="clann1">
            Clan_Name <i class="fas fa-chevron-right"></i>
          </h6>
          <div className="line2"></div>
          <h6 id="trp1">
            <img src={trp} alt="" />
            Trophys
          </h6>
          <div className="Container" id="Deck1">
            {/* Deck Images */}
            <img src={cards} id="ca1" alt="" />
            <img src={cards} id="ca1" alt="" />
            <img src={cards} id="ca1" alt="" />
            <img src={cards} id="ca1" alt="" />
            <img src={cards} id="ca1" alt="" />
            <img src={cards} id="ca1" alt="" />
            <img src={cards} id="ca1" alt="" />
            <img src={cards} id="ca1" alt="" />
            <br />
            <h6 className="Avg-elixir1">Average Elixir cost: 4.1</h6>

            <img src={ba} className="btn" alt="" />
          </div>
        </div>
      </div>

    );
  }
}
