import AdminEndpoint from './admin/admin.endpoint'
import InvestmentsEndpoint from './investments/investments.endpoint'
import investorsEndpoint from './investors/investors.endpoint'
import RoiEndpoint from './roi/roi.endpoint'
import TransactionsEndpoint from './transactions/transactions.endpoint'
import workersEndpoint from './workers/workers.endpoint'

export default [
  ...investorsEndpoint,
  ...workersEndpoint,
  ...AdminEndpoint,
  ...InvestmentsEndpoint,
  ...TransactionsEndpoint,
  ...RoiEndpoint
]
