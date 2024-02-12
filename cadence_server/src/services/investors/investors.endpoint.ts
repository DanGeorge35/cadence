import InvestorsController from './investors.controller'
import { Authorization } from '../../libs/utils/app.utility'

const ENDPOINT_URL = '/api/v1/investors'
const InvestorsEndpoint = [
  {
    path: `${ENDPOINT_URL}/`,
    method: 'post',
    handler: [InvestorsController.createInvestors]
  },
  {
    path: `${ENDPOINT_URL}/create`,
    method: 'post',
    handler: [InvestorsController.createInvestors2]
  },
  {
    path: `${ENDPOINT_URL}/login`,
    method: 'post',
    handler: [InvestorsController.login]
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: 'patch',
    handler: [Authorization, InvestorsController.updateInvestors]
  },
  {
    path: `${ENDPOINT_URL}/`,
    method: 'get',
    handler: [Authorization, InvestorsController.getallInvestors]
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: 'get',
    handler: [Authorization, InvestorsController.getSingleInvestors]
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: 'delete',
    handler: [Authorization, InvestorsController.deleteInvestors]
  }
]

export default InvestorsEndpoint
