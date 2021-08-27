/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { render } from 'preact';
import { App } from './app';
import './index.css';

render(<App />, document.getElementById('app')!);
