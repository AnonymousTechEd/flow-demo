import fetch from 'cross-fetch';
class Component {
  constructor(app) {
    this.app = app
    this.onStart()
  }
  onStart() {

  }
}



class ComponentIfft extends Component {
  constructor(IfftLink,componentName,IfftComponents,app) {
    super(app)
    this.IfftLink = IfftLink
    this.toggle = "/toggle/" + componentName
    this.response = componentName +" Toggled"
    IfftComponents.push(this)
  }
  sendGetRequest(link) {
    fetch(link)
  }
  onToggle() {
    this.sendGetRequest(this.IfftLink)
  }
}
class ComponentWithResponse extends Component {
  constructor(componentName, response, addto,app) {
    super(app)
    this.link = "/" + componentName
    this.response = response

    addto.push(this)
  }
  onRequest() {

  }
}
export {ComponentIfft, ComponentWithResponse}
