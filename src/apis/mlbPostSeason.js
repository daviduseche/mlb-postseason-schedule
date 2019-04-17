import axios from 'axios';

export default axios.create({
  baseURL:
    'http://statsapi.mlb.com/api/v1/schedule/postseason/series?sportId=1&season=2018&hydrate=team,broadcasts(all),seriesStatus(useOverride=true),decisions,person,probablePitcher,linescore(matchup)'
});
