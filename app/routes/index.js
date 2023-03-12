import { Router } from "express";
import { readdirSync } from "fs";
import fileDirName from "../utils/file-dir-name.js";

const PATH_ROUTER = fileDirName(import.meta).__dirname;
const router = Router();
console.log(PATH_ROUTER);

const cleanFileName = (fileName) => {
  const file = fileName.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleaName = cleanFileName(fileName);

  if (cleaName !== "index") {
    import(`./${cleaName}.js`).then((moduleRouter) => {
      router.use(`/${cleaName}`, moduleRouter.router);
    });
  }
});

export default router;
