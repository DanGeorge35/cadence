import AdminController from './admin.controller'
import { Authorization } from '../../libs/utils/app.utility'

const ENDPOINT_URL = '/api/v1/admin'
const AdminEndpoint = [
  {
    path: `${ENDPOINT_URL}/`,
    method: 'post',
    handler: [AdminController.createAdmin]
  },
  {
    path: `${ENDPOINT_URL}/login`,
    method: 'post',
    handler: [AdminController.login]
  },
  {
    path: `${ENDPOINT_URL}/datarecord`,
    method: 'get',
    handler: [AdminController.datarecord]
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: 'patch',
    handler: [Authorization, AdminController.updateAdmin]
  },

  {
    path: `${ENDPOINT_URL}/`,
    method: 'get',
    handler: [AdminController.getallAdmin]
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: 'get',
    handler: [AdminController.getSingleAdmin]
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: 'delete',
    handler: [Authorization, AdminController.deleteAdmin]
  }
]

export default AdminEndpoint
