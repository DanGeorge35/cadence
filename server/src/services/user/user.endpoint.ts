import userControler from "./user.controller";

import { Authorization } from "../../libs/utils/app.helper";

const ENDPOINT_URL = "/api/v1/user";
const userEndpoint = [
  {
    path: `${ENDPOINT_URL}/`,
    method: "post",
    handler: [userControler.loginUser],
  },
];

export default userEndpoint;
