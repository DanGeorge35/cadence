import farmerControler from "./farmers.controller";

import { Authorization } from "../../libs/utils/app.helper";

const ENDPOINT_URL = "/api/v1/farmers";

const managerEndpoint = [
  {
    path: `${ENDPOINT_URL}/`,
    method: "post",
    handler: [Authorization, farmerControler.createFarmer],
  },
  {
    path: `${ENDPOINT_URL}/`,
    method: "get",
    handler: [Authorization, farmerControler.getAllFarmers],
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: "get",
    handler: [Authorization, farmerControler.getAllFarmers],
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: "patch",
    handler: [Authorization, farmerControler.updateFarmer],
  },
  {
    path: `${ENDPOINT_URL}/:id`,
    method: "delete",
    handler: [Authorization, farmerControler.deleteFarmer],
  },
];

export default managerEndpoint;
