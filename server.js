import { Server } from "https://code4sabae.github.io/js/Server.js";
import { push } from "./push_cmd.js";

class MyServer extends Server {
  api(path, req) {
    if (req) {
      const d = req; // .data;
      push(d.deviceToken, d.title, d.body)
      return { res: "ok" };
    }
    return { res: "err" };
  }
}
new MyServer(8883);

/*
http://localhost:8883/
http://localhost:8883/api/?{deviceToken:"abc",title:"title",body:"body"}
*/
