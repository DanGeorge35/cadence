import fs from 'fs'
import investorsEndpoint from './investors/investors.endpoint'
import workersEndpoint from './workers/workers.endpoint'

const dir = '../../public'
if (!fs.existsSync(`.${dir}`)) {
  fs.mkdirSync(`.${dir}`)
}

export default [
  ...investorsEndpoint,
  ...workersEndpoint
]
