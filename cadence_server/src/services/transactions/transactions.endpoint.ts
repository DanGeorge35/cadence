import TransactionsController from './transactions.controller'
import { Authorization } from '../../libs/utils/app.utility'

const ENDPOINT_URL = '/api/v1/transactions'
const TransactionsEndpoint = [
  {
    path: `${ENDPOINT_URL}/`,
    method: 'post',
    handler: [Authorization, TransactionsController.createTransactions]
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: 'patch',
    handler: [Authorization, TransactionsController.updateTransactions]
  },
  {
    path: `${ENDPOINT_URL}/`,
    method: 'get',
    handler: [TransactionsController.getallTransactions]
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: 'get',
    handler: [TransactionsController.getSingleTransactions]
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: 'delete',
    handler: [Authorization, TransactionsController.deleteTransactions]
  }
]

export default TransactionsEndpoint
