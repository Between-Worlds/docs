export function Menu(): JSX.Element {
  return (
    <nav className="menu">
      <h2>Endpoints:</h2>
      <ul>
        <li>
          <a href="#v1/users">/v1/users</a>
        </li>
        <li>
          <a href="#v1/npcs">/v1/npcs</a>
        </li>
        <li>
          <a href="#v1/items">/v1/items</a>
        </li>
        <li>
          <a href="#v1/skills">/v1/skills</a>
        </li>
        <li>
          <a href="#v1/leaderboards">/v1/leaderboards</a>
        </li>
      </ul>
    </nav>
  );
}
