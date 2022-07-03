import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { render } from "react-dom";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <VictoryChart domainPadding={{ x: 40 }}>
          <VictoryBar
            data={data}
            // data accessor for x values
            x="Coach"
            // data accessor for y values
            y="Appearance"
          />
          <VictoryAxis
            label="Coach"
            style={{
              axisLabel: { padding: 30 },
            }}
          />
          <VictoryAxis
            dependentAxis
            label="Appearance"
            style={{
              axisLabel: { padding: 40 },
            }}
          />
        </VictoryChart>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  const data = [
    {
      FIELD1: 0,
      Coach: "Sir Alex Ferguson",
      Club: "Manchester United FC",
      Appearance: 190,
    },
    {
      FIELD1: 1,
      Coach: "Arsène Wenger",
      Club: "Arsenal FC",
      Appearance: 171,
    },
    {
      FIELD1: 41,
      Coach: "Diego Simeone",
      Club: "Club Atlético de Madrid",
      Appearance: 87,
    },
    {
      FIELD1: 29,
      Coach: "Ottmar Hitzfeld",
      Club: "FC Bayern München",
      Appearance: 76,
    },
    {
      FIELD1: 46,
      Coach: "Marcello Lippi",
      Club: "Juventus",
      Appearance: 76,
    },
    {
      FIELD1: 6,
      Coach: "Carlo Ancelotti",
      Club: "AC Milan",
      Appearance: 73,
    },
    {
      FIELD1: 21,
      Coach: "Mircea Lucescu",
      Club: "FC Shakhtar Donetsk",
      Appearance: 68,
    },
    {
      FIELD1: 34,
      Coach: "Rafael Benítez",
      Club: "Liverpool FC",
      Appearance: 62,
    },
    {
      FIELD1: 38,
      Coach: "Massimiliano Allegri",
      Club: "Juventus",
      Appearance: 62,
    },
    {
      FIELD1: 17,
      Coach: "Josep Guardiola",
      Club: "Manchester City FC",
      Appearance: 60,
    },
    {
      FIELD1: 61,
      Coach: "Vicente del Bosque",
      Club: "Real Madrid CF",
      Appearance: 60,
    },
    {
      FIELD1: 62,
      Coach: "Javier Iruretagoyena Amiano",
      Club: "RC Deportivo La Coruña",
      Appearance: 58,
    },
    {
      FIELD1: 14,
      Coach: "José Mourinho",
      Club: "Chelsea FC",
      Appearance: 57,
    },
    {
      FIELD1: 66,
      Coach: "Oleg Romantsev",
      Club: "FC Spartak Moskva",
      Appearance: 56,
    },
    {
      FIELD1: 40,
      Coach: "Jürgen Klopp",
      Club: "Liverpool FC",
      Appearance: 54,
    },
    {
      FIELD1: 67,
      Coach: "Fatih Terim",
      Club: "Galatasaray AŞ",
      Appearance: 53,
    },
    {
      FIELD1: 68,
      Coach: "Zinédine Zidane",
      Club: "Real Madrid CF",
      Appearance: 53,
    },
    {
      FIELD1: 18,
      Coach: "Josep Guardiola",
      Club: "FC Barcelona",
      Appearance: 49,
    },
    {
      FIELD1: 81,
      Coach: "Nils Arne Eggen",
      Club: "Rosenborg BK",
      Appearance: 49,
    },
    {
      FIELD1: 111,
      Coach: "Thomas Schaaf",
      Club: "SV Werder Bremen",
      Appearance: 40,
    },
    {
      FIELD1: 79,
      Coach: "Jorge Jesus",
      Club: "SL Benfica",
      Appearance: 39,
    },
    {
      FIELD1: 102,
      Coach: "Yuri Semin",
      Club: "FC Lokomotiv Moskva",
      Appearance: 38,
    },
    {
      FIELD1: 19,
      Coach: "Josep Guardiola",
      Club: "FC Bayern München",
      Appearance: 36,
    },
    {
      FIELD1: 27,
      Coach: "Louis van Gaal",
      Club: "FC Barcelona",
      Appearance: 36,
    },
    {
      FIELD1: 60,
      Coach: "Roberto Mancini",
      Club: "FC Internazionale Milano",
      Appearance: 36,
    },
    {
      FIELD1: 91,
      Coach: "Jupp Heynckes",
      Club: "FC Bayern München",
      Appearance: 36,
    },
    {
      FIELD1: 7,
      Coach: "Carlo Ancelotti",
      Club: "Real Madrid CF",
      Appearance: 35,
    },
    {
      FIELD1: 39,
      Coach: "Jürgen Klopp",
      Club: "Borussia Dortmund",
      Appearance: 35,
    },
    {
      FIELD1: 70,
      Coach: "Héctor Cúper",
      Club: "Valencia CF",
      Appearance: 34,
    },
    {
      FIELD1: 13,
      Coach: "José Mourinho",
      Club: "Real Madrid CF",
      Appearance: 32,
    },
    {
      FIELD1: 26,
      Coach: "Louis van Gaal",
      Club: "AFC Ajax",
      Appearance: 32,
    },
    {
      FIELD1: 37,
      Coach: "Massimiliano Allegri",
      Club: "AC Milan",
      Appearance: 32,
    },
    {
      FIELD1: 93,
      Coach: "Guus Hiddink",
      Club: "PSV Eindhoven",
      Appearance: 32,
    },
    {
      FIELD1: 101,
      Coach: "Mauricio Pochettino",
      Club: "Tottenham Hotspur",
      Appearance: 31,
    },
    {
      FIELD1: 63,
      Coach: "Luciano Spalletti",
      Club: "AS Roma",
      Appearance: 30,
    },
    {
      FIELD1: 97,
      Coach: "Laurent Blanc",
      Club: "Paris Saint-Germain",
      Appearance: 30,
    },
    {
      FIELD1: 82,
      Coach: "Claude Puel",
      Club: "Olympique Lyonnais",
      Appearance: 28,
    },
    {
      FIELD1: 107,
      Coach: "Ernesto Valverde",
      Club: "FC Barcelona",
      Appearance: 28,
    },
    {
      FIELD1: 24,
      Coach: "Mircea Lucescu",
      Club: "Galatasaray AŞ",
      Appearance: 26,
    },
    {
      FIELD1: 44,
      Coach: "Fabio Capello",
      Club: "AC Milan",
      Appearance: 26,
    },
    {
      FIELD1: 47,
      Coach: "Ronald Koeman",
      Club: "AFC Ajax",
      Appearance: 26,
    },
    {
      FIELD1: 54,
      Coach: "Manuel Pellegrini",
      Club: "Manchester City FC",
      Appearance: 26,
    },
    {
      FIELD1: 73,
      Coach: "Thomas Tuchel",
      Club: "Paris Saint-Germain",
      Appearance: 25,
    },
    {
      FIELD1: 45,
      Coach: "Fabio Capello",
      Club: "AS Roma",
      Appearance: 24,
    },
    {
      FIELD1: 99,
      Coach: "Didier Deschamps",
      Club: "Olympique de Marseille",
      Appearance: 24,
    },
    {
      FIELD1: 110,
      Coach: "Felix Magath",
      Club: "FC Bayern München",
      Appearance: 24,
    },
    {
      FIELD1: 55,
      Coach: "Manuel Pellegrini",
      Club: "Villarreal CF",
      Appearance: 22,
    },
    {
      FIELD1: 15,
      Coach: "José Mourinho",
      Club: "FC Internazionale Milano",
      Appearance: 21,
    },
    {
      FIELD1: 25,
      Coach: "Louis van Gaal",
      Club: "FC Bayern München",
      Appearance: 21,
    },
    {
      FIELD1: 65,
      Coach: "Luciano Spalletti",
      Club: "FC Zenit",
      Appearance: 21,
    },
    {
      FIELD1: 98,
      Coach: "Didier Deschamps",
      Club: "AS Monaco FC",
      Appearance: 21,
    },
    {
      FIELD1: 43,
      Coach: "Fabio Capello",
      Club: "Juventus",
      Appearance: 20,
    },
    {
      FIELD1: 30,
      Coach: "Ottmar Hitzfeld",
      Club: "Borussia Dortmund",
      Appearance: 19,
    },
    {
      FIELD1: 5,
      Coach: "Carlo Ancelotti",
      Club: "Chelsea FC",
      Appearance: 18,
    },
    {
      FIELD1: 69,
      Coach: "Héctor Cúper",
      Club: "FC Internazionale Milano",
      Appearance: 18,
    },
    {
      FIELD1: 16,
      Coach: "José Mourinho",
      Club: "FC Porto",
      Appearance: 17,
    },
    {
      FIELD1: 72,
      Coach: "Thomas Tuchel",
      Club: "Chelsea FC",
      Appearance: 17,
    },
    {
      FIELD1: 77,
      Coach: "Unai Emery",
      Club: "Paris Saint-Germain",
      Appearance: 16,
    },
    {
      FIELD1: 96,
      Coach: "Laurent Blanc",
      Club: "FC Girondins de Bordeaux",
      Appearance: 16,
    },
    {
      FIELD1: 12,
      Coach: "José Mourinho",
      Club: "Manchester United FC",
      Appearance: 14,
    },
    {
      FIELD1: 32,
      Coach: "Rafael Benítez",
      Club: "Valencia CF",
      Appearance: 14,
    },
    {
      FIELD1: 83,
      Coach: "Claude Puel",
      Club: "LOSC Lille",
      Appearance: 14,
    },
    {
      FIELD1: 100,
      Coach: "Mauricio Pochettino",
      Club: "Paris Saint-Germain",
      Appearance: 14,
    },
    {
      FIELD1: 52,
      Coach: "Ronald Koeman",
      Club: "PSV Eindhoven",
      Appearance: 13,
    },
    {
      FIELD1: 74,
      Coach: "Unai Emery",
      Club: "Valencia CF",
      Appearance: 13,
    },
    {
      FIELD1: 3,
      Coach: "Carlo Ancelotti",
      Club: "FC Bayern München",
      Appearance: 12,
    },
    {
      FIELD1: 10,
      Coach: "Carlo Ancelotti",
      Club: "SSC Napoli",
      Appearance: 12,
    },
    {
      FIELD1: 22,
      Coach: "Mircea Lucescu",
      Club: "FC Dynamo Kyiv",
      Appearance: 12,
    },
    {
      FIELD1: 58,
      Coach: "Roberto Mancini",
      Club: "Manchester City FC",
      Appearance: 12,
    },
    {
      FIELD1: 88,
      Coach: "Claudio Ranieri",
      Club: "Chelsea FC",
      Appearance: 12,
    },
    {
      FIELD1: 49,
      Coach: "Ronald Koeman",
      Club: "FC Barcelona",
      Appearance: 11,
    },
    {
      FIELD1: 92,
      Coach: "Jupp Heynckes",
      Club: "Real Madrid CF",
      Appearance: 11,
    },
    {
      FIELD1: 4,
      Coach: "Carlo Ancelotti",
      Club: "Juventus",
      Appearance: 10,
    },
    {
      FIELD1: 8,
      Coach: "Carlo Ancelotti",
      Club: "Paris Saint-Germain",
      Appearance: 10,
    },
    {
      FIELD1: 50,
      Coach: "Ronald Koeman",
      Club: "SL Benfica",
      Appearance: 10,
    },
    {
      FIELD1: 53,
      Coach: "Manuel Pellegrini",
      Club: "Málaga CF",
      Appearance: 10,
    },
    {
      FIELD1: 71,
      Coach: "Thomas Tuchel",
      Club: "Borussia Dortmund",
      Appearance: 10,
    },
    {
      FIELD1: 75,
      Coach: "Unai Emery",
      Club: "Villarreal CF",
      Appearance: 10,
    },
    {
      FIELD1: 80,
      Coach: "Jorge Jesus",
      Club: "Sporting Clube de Portugal",
      Appearance: 10,
    },
    {
      FIELD1: 42,
      Coach: "Fabio Capello",
      Club: "Real Madrid CF",
      Appearance: 8,
    },
    {
      FIELD1: 56,
      Coach: "Manuel Pellegrini",
      Club: "Real Madrid CF",
      Appearance: 8,
    },
    {
      FIELD1: 85,
      Coach: "Claudio Ranieri",
      Club: "Juventus",
      Appearance: 8,
    },
    {
      FIELD1: 95,
      Coach: "Guus Hiddink",
      Club: "Chelsea FC",
      Appearance: 8,
    },
    {
      FIELD1: 108,
      Coach: "Felix Magath",
      Club: "VfB Stuttgart",
      Appearance: 8,
    },
    {
      FIELD1: 109,
      Coach: "Felix Magath",
      Club: "FC Schalke 04",
      Appearance: 8,
    },
    {
      FIELD1: 2,
      Coach: "Arsène Wenger",
      Club: "AS Monaco FC",
      Appearance: 7,
    },
    {
      FIELD1: 59,
      Coach: "Roberto Mancini",
      Club: "Galatasaray AŞ",
      Appearance: 7,
    },
    {
      FIELD1: 86,
      Coach: "Claudio Ranieri",
      Club: "FC Internazionale Milano",
      Appearance: 7,
    },
    {
      FIELD1: 87,
      Coach: "Claudio Ranieri",
      Club: "AS Roma",
      Appearance: 7,
    },
    {
      FIELD1: 90,
      Coach: "Claudio Ranieri",
      Club: "Leicester City FC",
      Appearance: 7,
    },
    {
      FIELD1: 103,
      Coach: "Yuri Semin",
      Club: "FC Dynamo Kyiv",
      Appearance: 7,
    },
    {
      FIELD1: 9,
      Coach: "Carlo Ancelotti",
      Club: "Parma FC",
      Appearance: 6,
    },
    {
      FIELD1: 20,
      Coach: "Mircea Lucescu",
      Club: "Beşiktaş JK",
      Appearance: 6,
    },
    {
      FIELD1: 28,
      Coach: "Louis van Gaal",
      Club: "Manchester United FC",
      Appearance: 6,
    },
    {
      FIELD1: 31,
      Coach: "Rafael Benítez",
      Club: "SSC Napoli",
      Appearance: 6,
    },
    {
      FIELD1: 33,
      Coach: "Rafael Benítez",
      Club: "Real Madrid CF",
      Appearance: 6,
    },
    {
      FIELD1: 35,
      Coach: "Rafael Benítez",
      Club: "FC Internazionale Milano",
      Appearance: 6,
    },
    {
      FIELD1: 57,
      Coach: "Roberto Mancini",
      Club: "SS Lazio",
      Appearance: 6,
    },
    {
      FIELD1: 64,
      Coach: "Luciano Spalletti",
      Club: "FC Internazionale Milano",
      Appearance: 6,
    },
    {
      FIELD1: 76,
      Coach: "Unai Emery",
      Club: "Sevilla FC",
      Appearance: 6,
    },
    {
      FIELD1: 84,
      Coach: "Claude Puel",
      Club: "AS Monaco FC",
      Appearance: 6,
    },
    {
      FIELD1: 89,
      Coach: "Claudio Ranieri",
      Club: "Valencia CF",
      Appearance: 6,
    },
    {
      FIELD1: 94,
      Coach: "Guus Hiddink",
      Club: "Real Madrid CF",
      Appearance: 6,
    },
    {
      FIELD1: 105,
      Coach: "Ernesto Valverde",
      Club: "Olympiacos FC",
      Appearance: 6,
    },
    {
      FIELD1: 106,
      Coach: "Ernesto Valverde",
      Club: "Athletic Club",
      Appearance: 6,
    },
    {
      FIELD1: 48,
      Coach: "Ronald Koeman",
      Club: "AZ Alkmaar",
      Appearance: 5,
    },
    {
      FIELD1: 78,
      Coach: "Unai Emery",
      Club: "FC Spartak Moskva",
      Appearance: 5,
    },
    {
      FIELD1: 11,
      Coach: "José Mourinho",
      Club: "Tottenham Hotspur",
      Appearance: 4,
    },
    {
      FIELD1: 23,
      Coach: "Mircea Lucescu",
      Club: "FC Internazionale Milano",
      Appearance: 3,
    },
    {
      FIELD1: 51,
      Coach: "Ronald Koeman",
      Club: "Valencia CF",
      Appearance: 3,
    },
    {
      FIELD1: 104,
      Coach: "Ernesto Valverde",
      Club: "Valencia CF",
      Appearance: 2,
    },
    {
      FIELD1: 36,
      Coach: "Rafael Benítez",
      Club: "Chelsea FC",
      Appearance: 1,
    },
  ];
}

export default App;
