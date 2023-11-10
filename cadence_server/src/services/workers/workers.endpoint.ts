import WorkersController from './workers.controller'
import { Authorization } from '../../libs/utils/app.utility'

const ENDPOINT_URL = '/api/v1/workers'
const WorkersEndpoint = [
  {
    path: `${ENDPOINT_URL}/`,
    method: 'post',
    handler: [Authorization, WorkersController.createWorkers]
  },
  {
    path: `${ENDPOINT_URL}/login`,
    method: 'post',
    handler: [WorkersController.login]
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: 'patch',
    handler: [Authorization, WorkersController.updateWorkers]
  },
  {
    path: `${ENDPOINT_URL}/`,
    method: 'get',
    handler: [WorkersController.getallWorkers]
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: 'get',
    handler: [WorkersController.getSingleWorkers]
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: 'delete',
    handler: [Authorization, WorkersController.deleteWorkers]
  }
]

export default WorkersEndpoint
