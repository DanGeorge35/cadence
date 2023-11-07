import trainingControler from "./training.controller";

import { Authorization } from "../../libs/utils/app.helper";

const ENDPOINT_URL = "/api/v1/training";
const trainingEndpoint = [
  {
    path: `${ENDPOINT_URL}/`,
    method: "post",
    handler: [Authorization, trainingControler.createTraining],
  },
  {
    path: `${ENDPOINT_URL}/`,
    method: "get",
    handler: [Authorization, trainingControler.getAllTrainings],
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: "patch",
    handler: [Authorization, trainingControler.updateTraining],
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: "delete",
    handler: [Authorization, trainingControler.deleteTraining],
  },
];

export default trainingEndpoint;
