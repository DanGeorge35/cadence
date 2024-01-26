import RoiController from './roi.controller'

const ENDPOINT_URL = '/api/v1/roi'
const RoiEndpoint = [

  {
    path: `${ENDPOINT_URL}/`,
    method: 'get',
    handler: [RoiController.getallRoi]
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: 'get',
    handler: [RoiController.getSingleRoi]
  }
]

export default RoiEndpoint
