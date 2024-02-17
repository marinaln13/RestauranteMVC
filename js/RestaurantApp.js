//Importamos los módulos necesarios
import RestaurantsManager, {
  Dish,
  Category,
  Allergen,
  Restaurant,
  Menu,
  Coordinate,
} from "./RestaurantModel.js";
import RestaurantController from "./RestaurantController.js";
import RestaurantView from "./RestaurantView.js";

const RestaurantApp = new RestaurantController(
  RestaurantsManager.getInstance(),
  new RestaurantView()
);

export default RestaurantApp;
