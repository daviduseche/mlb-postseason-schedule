import React from 'react';
import moment from 'moment';
import images from './images';
import '../css/PostSchedule.css';

const Series = ({ games }) => {
  return games.map(game => {
    const homeTeam = game.teams.home.team.name;
    const awayTeam = game.teams.away.team.name;
    const homeScore = game.teams.home.score;
    const awayScore = game.teams.away.score;
    const result = game.seriesStatus.result;
    return (
      <div className="ui grid" key={game.gameDate}>
        <div className="six column row">
          <div className="column">
            <p>
              Gm {game.seriesGameNumber}
              <br />
              {moment(game.gameDate).format('MMMM Do YYYY')}
            </p>
          </div>
          <div className="column">
            <img
              src={`http://www.capsinfo.com/images/MLB_Team_Logos/${
                images[homeTeam]
              }.png`}
              alt="Logo"
            />
            <span className="team">
              {homeTeam}: {homeScore}
            </span>
          </div>
          <div className="column">
            <img
              src={`http://www.capsinfo.com/images/MLB_Team_Logos/${
                images[awayTeam]
              }.png`}
              alt="Logo"
            />
            <span className="team">
              {awayTeam}: {awayScore}
            </span>
          </div>
          <div className="column">{result}</div>
        </div>
      </div>
    );
  });
};

export default Series;
