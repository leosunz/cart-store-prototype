/**
 * This is the entry file where you start your magic.
 *
 * It's currently a .js-file but feel free to use TypeScript
 * instead if you're comfortable with it.
 *
 * To transpile you just need to type `$ npm start` or `$ yarn start`. This
 * will start the mocked API server and bundling.
 */

import { createRoot } from 'react-dom/client'
import { App } from './App'

const container = document.getElementById('app') as HTMLElement
const root = createRoot(container)
root.render(
  <App />
)
