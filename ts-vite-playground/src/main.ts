import { version } from '../package.json';
import { sum } from './util/math';

const app = document.querySelector<HTMLDivElement>('#app')!;
const result = sum(5,4);

app.innerHTML = `
    <h1>TS Playground</h1>
    <p>Edit <code>src/main.ts</code> and save to test HMR</p>
    <p>App Version: ${version}</p>
    <code>Using math lib: 5 + 4 = ${result}</code>
`;