import InvestmentsController from './investments.controller'
import { Authorization } from '../../libs/utils/app.utility'

const ENDPOINT_URL = '/api/v1/investments'
const InvestmentsEndpoint = [
  {
    path: `${ENDPOINT_URL}/approve`,
    method: 'post',
    handler: [Authorization, InvestmentsController.approveInvestment]
  },
  {
    path: `${ENDPOINT_URL}/reject`,
    method: 'post',
    handler: [Authorization, InvestmentsController.rejectInvestment]
  },
  {
    path: `${ENDPOINT_URL}/`,
    method: 'post',
    handler: [Authorization, InvestmentsController.createInvestments]
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: 'patch',
    handler: [Authorization, InvestmentsController.updateInvestments]
  },

  {
    path: `${ENDPOINT_URL}/`,
    method: 'get',
    handler: [InvestmentsController.getallInvestments]
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: 'get',
    handler: [InvestmentsController.getSingleInvestments]
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: 'delete',
    handler: [Authorization, InvestmentsController.deleteInvestments]
  }
]

export default InvestmentsEndpoint
