import {ComponentIfft, ComponentWithResponse} from "./componentClasses.js";
import express from "express"
import * as cmp from './components.js'

const app = express();
app.use(express.json());

var IfftComponents = []
var Components = []
var test = new ComponentWithResponse("Test","ed",Components)

var temp = new cmp.temper("temp","hi",Components,app)
var bedLight = new ComponentIfft("https://maker.ifttt.com/trigger/BedLight/with/key/rP-pT_POA4xBce0AkUK8p","BedLight",IfftComponents,app)

//READ Request Handlers

app.get('/', (req, res) => {
  res.send("Welcome to Eduard's IOT plaatfom");
});


IfftComponents.forEach((item, i) => {
  app.get(item.toggle, (req, res) => {
    item.onToggle()
    res.send(item.response)
  });
});
Components.forEach((item, i) => {
  app.get(item.link, (req, res) => {
    res.send(item.response)
    item.onRequest()
  });
});
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}..`));
