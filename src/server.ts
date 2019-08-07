import app from "./app";
import { successChalk } from "./utils/logHelper";

const TAG = "server ====> ";

const PORT = process.env.PORT || 3010;

const MODE = process.env.ENVIRONMENT || "local";

/* Server startup */
const server = app.listen(PORT, () => {
  successChalk(TAG + "App  is running  at port %d in %s mode ", PORT, MODE);
});

export default server;
