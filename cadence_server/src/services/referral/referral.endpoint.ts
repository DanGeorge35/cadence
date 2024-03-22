import ReferralController from './referral.controller'
import { Authorization } from '../../libs/utils/app.utility'

const ENDPOINT_URL = '/api/v1/referral'
const ReferralEndpoint = [
  {
    path: `${ENDPOINT_URL}/check`,
    method: 'post',
    handler: [ReferralController.checkReferralacccount]
  },
  {
    path: `${ENDPOINT_URL}/`,
    method: 'post',
    handler: [ReferralController.createReferral]
  },
  {
    path: `${ENDPOINT_URL}/login`,
    method: 'post',
    handler: [ReferralController.login]
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: 'patch',
    handler: [Authorization, ReferralController.updateReferral]
  },
  {
    path: `${ENDPOINT_URL}/verify/:email/:token?`,
    method: 'get',
    handler: [ReferralController.verifyaccount]
  },
  {
    path: `${ENDPOINT_URL}/`,
    method: 'get',
    handler: [ReferralController.getallReferral]
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: 'get',
    handler: [ReferralController.getSingleReferral]
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: 'delete',
    handler: [Authorization, ReferralController.deleteReferral]
  }
]

export default ReferralEndpoint
