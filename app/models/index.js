import user from "./nosql/user.js";
import track from "./nosql/track.js";
import storage from "./nosql/storage.js";

const models = {
  usersModel: user,
  tracksModel: track,
  storageModel: storage,
};

export default models;
