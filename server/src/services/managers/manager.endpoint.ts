import managerControler from "./manager.controller";

import { Authorization } from "../../libs/utils/app.helper";

const ENDPOINT_URL = "/api/v1/user";

const managerEndpoint = [
  {
    path: `${ENDPOINT_URL}/`,
    method: "post",
    handler: [Authorization, managerControler.createManagerOnboarding],
  },
];

export default managerEndpoint;
