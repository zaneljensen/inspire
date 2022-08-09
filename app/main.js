// import { ValuesController } from "./Controllers/ValuesController.js";

import { BackgroundController } from "./Controllers/BackgroundController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { ToDosController } from "./Controllers/ToDosController.js";


class App {
  // valuesController = new ValuesController();
  backgroundcontroller = new BackgroundController()
  quotesController = new QuotesController()
  toDosController = new ToDosController()

}

window["app"] = new App();
