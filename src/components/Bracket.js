import React from 'react';
import '../css/Bracket.css';

const Bracket = () => {
  return (
    <div>
      <div className="header-logo">
        <img
          className="img-header"
          src={`https://images.tbs.com/tbs/$dyna_params/https%3A%2F%2Fi.cdn.tbs.com%2Fassets%2Fimages%2F2018%2F10%2FPostseason2018-Logo-900x360.png`}
          alt="Logo"
        />
      </div>

      <div className="bracket-schedule">
        <div className="wildcard-left">
          <div className="wildcard-one-top" />

          <div className="winner-bracket-arrow">
            <img
              className="bracket-logo top-alds"
              src={`https://securea.mlb.com/assets/images/3/4/6/294481346/cuts/150x150/cut.png`}
              alt="Logo"
            />
            ALDS
            <img
              className="bracket-logo-top bottom-alds"
              src={`http://www.capsinfo.com/images/MLB_Team_Logos/Houston_Astros.png`}
              alt="Logo"
            />
          </div>
          <div className="alcs-bracket-top" />
        </div>

        <div className="wildcard-left">
          <div className="wildcard-one">
            <img
              className="bracket-logo wild-alds"
              src={`http://www.capsinfo.com/images/MLB_Team_Logos/Oakland_Athletics.png`}
              alt="Logo"
            />
            <img
              className="bracket-logo wild-al"
              src={`http://www.capsinfo.com/images/MLB_Team_Logos/NewYork_Yankees.png`}
              alt="Logo"
            />
          </div>
          <div className="winner-bracket-arrow">
            <img
              className="bracket-logo top-alds"
              src={`http://www.capsinfo.com/images/MLB_Team_Logos/NewYork_Yankees.png`}
              alt="Logo"
            />
            ALDS
            <img
              className="bracket-logo bottom-alds"
              src={`http://www.capsinfo.com/images/MLB_Team_Logos/Boston_Redsox.png`}
              alt="Logo"
            />
          </div>
          <div className="alcs-bracket" />
          <span>
            <span className="series-id">
              ALCS
              <img
                className="bracket-logo"
                src={`http://www.capsinfo.com/images/MLB_Team_Logos/Boston_Redsox.png`}
                alt="Logo"
              />
            </span>
            <img
              className="bracket-logo bottom-cs"
              src={`http://www.capsinfo.com/images/MLB_Team_Logos/Boston_Redsox.png`}
              alt="Logo"
            />
          </span>
          <span>
            <img
              className="bracket-logo-top top-cs"
              src={`http://www.capsinfo.com/images/MLB_Team_Logos/Houston_Astros.png`}
              alt="Logo"
            />
          </span>
        </div>
      </div>
      <div className="nlcs-bracket" />
      <span className="nlcs-id">
        NLCS
        <img
          className="bracket-logo"
          src={`https://securea.mlb.com/assets/images/0/1/8/296837018/cuts/150x150/cut.png`}
          alt="Logo"
        />
      </span>
      <img
        className="bracket-logo bottom-nlcs "
        src={`https://securea.mlb.com/assets/images/0/6/0/296816060/cuts/150x150/cut.png`}
        alt="Logo"
      />
      <img
        className="bracket-logo top-nlcs "
        src={`https://securea.mlb.com/assets/images/0/1/8/296837018/cuts/150x150/cut.png`}
        alt="Logo"
      />
      <div className="nlds-bottom-bracket" />
    </div>
  );
};

export default Bracket;
