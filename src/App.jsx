import { toTemporalInstant } from '@js-temporal/polyfill';

// polyfill Date with temporal
Date.prototype.toTemporalInstant = toTemporalInstant;

import './App.css'

import { Stamper } from './Stamper'

function App() {
  return (
    <Stamper />
  )
}

export default App
