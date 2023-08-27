import { API_BASE_URL } from './constants';
import { EndPoint } from './endpoint';
import { GoToTop } from './goToTop';
import { Menu } from './menu';

export function App(): JSX.Element {
  return (
    <>
      <div className="main">
        <h1>Between Worlds public API documentation</h1>
        <p>
          The API's base url is <span className="mono mono-inline">{API_BASE_URL}</span> and the current version is{' '}
          <span className="mono mono-inline">v1</span>.
        </p>
        <p>
          To access the API you must provide the API key which you generated in-game, passed as a query parameter named{' '}
          <span className="mono mono-inline">apiKey</span>, and your auth id (your in-game name), passed as a query parameter named{' '}
          <span className="mono mono-inline">authId</span>.
        </p>
        <p>The API replies with JSON.</p>
        <Menu />
        <EndPoint path="v1/users" />
        <EndPoint path="v1/npcs" />
        <EndPoint path="v1/items" />
        <EndPoint path="v1/skills" />
        <EndPoint path="v1/leaderboards" />
      </div>
      <GoToTop />
    </>
  );
}
