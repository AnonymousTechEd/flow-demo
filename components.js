import {ComponentIfft, ComponentWithResponse} from "./componentClasses.js";

export class temper extends ComponentWithResponse {
  constructor(componentName, response, addto,app) {
    super(componentName, response, addto, app)
    this.response = {
      humidity: 20,
      temperature: 50,
    }
    this.app.post('/temp/temperature', (req, res) => {this.response.temperature = req.body[0]; res.send("Temperature Updated")});
    this.app.post('/temp/humidity', (req, res) => {this.response.humidity = req.body[0]; res.send("Humidity Updated")});
  }
}
