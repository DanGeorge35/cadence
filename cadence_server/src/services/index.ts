import investorsEndpoint from './investors/investors.endpoint'
import workersEndpoint from './workers/workers.endpoint'

export default [
  ...investorsEndpoint,
  ...workersEndpoint
]
