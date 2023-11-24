import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Characterbody from './characterSelect.jsx';

function CharacterRouter({ characters }) {
  return (
    <Router>
      <Switch>
        {characters.map((character, index) => (
          <Route key={index} path={`/character/${character.Character_Name}`} element={<Characterbody value={character} />} />
        ))}
      </Switch>
    </Router>
  );
}

export default CharacterRouter;
