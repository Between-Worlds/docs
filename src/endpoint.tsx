import { API_BASE_URL } from './constants';
import { endpoints } from './endpoints';

export function EndPoint({ path }: { path: string }): JSX.Element {
  return (
    <div class="endpoint">
      <h2 id={path}>
        /{path}{' '}
        <a href={`#${path}`} class="hash-link">
          #
        </a>
      </h2>
      <section>
        <h3>Base URL</h3>
        <span class="mono">
          <a href={`${API_BASE_URL}${path}`} rel="noopener" target="_blank">
            {API_BASE_URL}
            {path}
          </a>
        </span>
      </section>
      <section>
        <h3>Allowed Methods</h3>
        {endpoints[path]?.allowedMethods.map((method) => (
          <span class="mono method">{method}</span>
        ))}
      </section>
      {endpoints[path]?.requiredParameters.length > 0 && (
        <section>
          <h3>Required Parameters</h3>
          <p>One or more of the following:</p>
          {endpoints[path]?.requiredParameters.map((param) => (
            <span class="mono parameter">{param}</span>
          ))}
        </section>
      )}
      {endpoints[path]?.optionalParameters.length > 0 && (
        <section>
          <h3>Optional Parameters</h3>
          <p>One or more of the following:</p>
          {endpoints[path]?.optionalParameters.map((param) => (
            <span class="mono parameter">{param}</span>
          ))}
        </section>
      )}
      <section>
        <h3>Examples</h3>
        {endpoints[path]?.examples.map((example) => (
          <>
            <p>{example.description}</p>
            <p>Request:</p>
            <pre>
              <code class="example">{example.url}</code>
            </pre>
            <p>Response:</p>
            <pre>
              <code class="example">{example.response}</code>
            </pre>
          </>
        ))}
      </section>
    </div>
  );
}
