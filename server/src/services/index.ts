import fs from "fs";

let dir = "./public";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

dir = "./public/uploads";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

dir = "./public/fieldagents";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

dir = "./public/Staff";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

dir = "./public/Demoplot";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

dir = "./public/InputDistribution";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

dir = "./public/AsstAgent";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

import userEndpoint from "./user/user.endpoint";
import managerEndpoint from "./farmers/farmer.endpoint";
import trainingEndpoint from "./training/traning.endpoint";

export default [
  ...userEndpoint,
  ...trainingEndpoint,
  ...managerEndpoint
];