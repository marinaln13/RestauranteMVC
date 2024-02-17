import Coordinate from "./ObjectsRestaurant.js";
const MODEL = Symbol("RestaurantModel");
const VIEW = Symbol("RestaurantView");
const LOAD_MANAGER_OBJECTS = Symbol("Load Manager Objects");

class RestaurantController {
  constructor(modelRestaurant, viewRestaurant) {
    this[MODEL] = modelRestaurant;
    this[VIEW] = viewRestaurant;

    // Eventos iniciales del Controlador
    this.onLoad();
    this.onInit();

    // Enlazamos handlers con la vista
    this[VIEW].bindInit(this.handleInit);
  }

  onLoad = () => {
    this[LOAD_MANAGER_OBJECTS]();
    this[VIEW].mouseenterCategories(this.handleDropCat);
    this[VIEW].mouseleaveCategories();
    this[VIEW].bindCategoryDrop(this.handleShowCategory);
    this[VIEW].mouseenterRestaurants(this.handleDropRest);
    this[VIEW].mouseleaveRestaurants();
    this[VIEW].bindRestaurantDrop(this.handleShowCategory);
    this[VIEW].bindMenu(this.handleMenu);
    this[VIEW].bindCategoryNav(this.handleCategories);
    this[VIEW].bindAllergen(this.handleAllergen);
    this[VIEW].bindRestaurant(this.handleRestaurant);
  };

  onInit = () => {
    this[VIEW].init();
    this[VIEW].ShowRandomDishes(this[MODEL].getDishes());
    this[VIEW].bindSingleCategory(this.handleShowCategory);
    this[VIEW].bindDishRandom(this.handleDishes);
  };

  onMenu = () => {
    this[VIEW].ShowMenus(this[MODEL].getMenus());
    this[VIEW].bindSingleMenu(this.handleShowMenu);
  };

  onCategory = () => {
    this[VIEW].ShowCategories(this[MODEL].getCategories());
    this[VIEW].bindSingleCategory(this.handleShowCategory);
  };

  onAllergen = () => {
    this[VIEW].ShowAllergens(this[MODEL].getAllergens());
    this[VIEW].bindSingleAllergen(this.handleShowAllergen);
  };

  onRestaurant = () => {
    this[VIEW].ShowRestaurants(this[MODEL].getRestaurants());
    this[VIEW].bindSingleRestaurant(this.handleShowRestaurant);
  };

  handleInit = () => {
    this.onInit();
  };

  handleDropCat = () => {
    this[VIEW].DropdownCategories(this[MODEL].getCategories());
  };

  handleDropRest = () => {
    this[VIEW].DropdownRestaurants(this[MODEL].getRestaurants());
  };

  handleMenu = () => {
    this.onMenu();
  };

  handleCategories = () => {
    this.onCategory();
  };

  handleDishes = (title) => {
    const dish = this[MODEL].createDish(title);
    this[VIEW].showInfoDish(dish);
    this[VIEW].bindShowElemInNewWindow(this.handleShowDishInNewWindow);
  };

  handleAllergen = () => {
    this.onAllergen();
  };

  handleRestaurant = () => {
    this.onRestaurant();
  };

  handleCloseWindows = () => {
    this[VIEW].closeWindows();
  };

  handleShowMenu = (title) => {
    this[VIEW].showInfoMenu(this[MODEL].createMenu(title));
    this[VIEW].bindMenuDish(this.handleMenuDish);
    this[VIEW].bindShowElemInNewWindow(this.handleShowMenuInNewWindow);
  };

  handleShowCategory = (title) => {
    this.handleCategories;
    const cat = this[MODEL].createCategory(title);
    this[VIEW].dishesInCategory(this[MODEL].getDishesInCategory(cat), cat.name);
    this[VIEW].bindDishInCategory(this.handleDishes);
  };

  handleShowAllergen = (title) => {
    const al = this[MODEL].createAllergen(title);
    const dishes = this[MODEL].getDishesWithAllergen(al);
    this[VIEW].showInfoAllergen(al, dishes);
    this[VIEW].bindAllergenDish(this.handleAllergenDish);
    this[VIEW].bindShowElemInNewWindow(this.handleShowAllergenInNewWindow);
  };

  handleShowRestaurant = (title) => {
    const r = this[MODEL].createRestaurant(title);
    this[VIEW].showInfoRestaurant(r);
    this[VIEW].bindShowElemInNewWindow(this.handleShowRestaurantInNewWindow);
  };

  handleShowDishInNewWindow = (title) => {
    try {
      const dish = this[MODEL].createDish(title);
      this[VIEW].showDishInNewWindow(dish);
    } catch (error) {
      this[VIEW].showDishInNewWindow(
        null,
        "No existe este producto en la página."
      );
    }
    this[VIEW].bindCloseWindows(this.handleCloseWindows);
  };

  handleShowMenuInNewWindow = (title) => {
    const m = this[MODEL].createMenu(title);
    this[VIEW].showMenuInNewWindow(m);
    this[VIEW].bindCloseWindows(this.handleCloseWindows);
  };

  handleShowAllergenInNewWindow = (title) => {
    const al = this[MODEL].createAllergen(title);
    const dishes = this[MODEL].getDishesWithAllergen(al);
    this[VIEW].showAllergenInNewWindow(al, dishes);
    this[VIEW].bindCloseWindows(this.handleCloseWindows);
  };
  handleShowRestaurantInNewWindow = (title) => {
    const rest = this[MODEL].createRestaurant(title);
    this[VIEW].showRestInNewWindow(rest);
    this[VIEW].bindCloseWindows(this.handleCloseWindows);
  };

  handleAllergenDish = (title) => {
    const dish = this[MODEL].createDish(title);
    this[VIEW].showElemDish(dish);
  };

  handleMenuDish = (title) => {
    const dish = this[MODEL].createDish(title);
    this[VIEW].showElemDish(dish);
  };

  [LOAD_MANAGER_OBJECTS]() {
    const category1 = this[MODEL].createCategory("Entrantes");
    const category2 = this[MODEL].createCategory("Platos Principales");
    const category3 = this[MODEL].createCategory("Postres");

    category1.description = "Listado de platos para ir abriendo boca";
    category2.description =
      "Listado de platos principales, para disfrutar después de los entrantes";
    category3.description = "Listado de postres caseros";

    this[MODEL].addCategory(category1, category2, category3);

    let d1 = this[MODEL].createDish("Paella Valenciana");
    d1.description = "Deliciosa Paella Valenciana , receta original.";
    d1.ingredients = [
      "arroz",
      "azafrán",
      "ajo",
      "pollo",
      "conejo",
      "judías",
      "tomate",
    ];
    d1.image = "paella.avif";

    let d2 = this[MODEL].createDish("Tortilla de Patata");
    d2.description =
      "Tortilla de Patata con cebolla , premio a la mejor tortilla Española. ";
    d2.ingredients = ["huevo", "patata", "cebolla"];
    d2.image = "tortilla.jpg";

    let d3 = this[MODEL].createDish("Croquetas de Jamón");
    d3.description =
      "Croquetas de Jamón , crujientes en el exterior y cremosas por dentro.";
    d3.ingredients = ["jamón", "bechamel", "pan rallado"];
    d3.image = "croquetas.webp";

    let d4 = this[MODEL].createDish("Salmorejo");
    d4.description = "Refrescante salmorejo andaluz.";
    d4.ingredients = ["tomate", "pimiento", "ajo", "jamon", "huevo"];
    d4.image = "salmorejo.jpg";

    let d5 = this[MODEL].createDish("Ensaladilla Rusa");
    d5.description = "Ensaladilla Rusa acompañada con picos ";
    d5.ingredients = ["huevo", "patata", "mayonesa"];
    d5.image = "ensaladilla.jpg";

    let d6 = this[MODEL].createDish("Tarta de Queso");
    d6.description =
      "Tarta de Queso cremosa , con mermelada de frutos del bosque.";
    d6.ingredients = ["huevo", "galleta", "queso crema", "azúcar"];
    d6.image = "tarta.jpg";

    let d7 = this[MODEL].createDish("Coulant de Chocolate");
    d7.description = "Coulant con chocolate fundido en su interior";
    d7.ingredients = ["huevo", "harina", "cacao", "leche", "azúcar"];
    d7.image = "coulant.jpg";

    let d8 = this[MODEL].createDish("Pulpo a la Gallega");
    d8.description = "Pata de pulpo cocinado al estilo gallego ";
    d8.ingredients = ["pulpo", "patata", "ajo", "pimentón"];
    d8.image = "pulpo.jpg";

    let d9 = this[MODEL].createDish("Torrija");
    d9.description =
      "Deliciosa Torrija de pan , crujiente en el exterior y cremosas por dentro.";
    d9.ingredients = ["Pan", "leche", "azúcar"];
    d9.image = "torrija.jpg";

    let d10 = this[MODEL].createDish("Brownie");
    d10.description =
      "Brownie de chocolate y nueces acompañado de una bola de helado";
    d10.ingredients = [
      "huevos",
      "leche",
      "azúcar",
      "harina",
      "mantequilla",
      "cacao",
      "nueces",
    ];
    d10.image = "brownie.jpg";

    let d11 = this[MODEL].createDish("Guiso Tradicional");
    d11.description =
      "Guiso de patata y carne de ternera al estilo tradicional";
    d11.ingredients = [
      "patata",
      "ternera",
      "zanahoria",
      "pimiento",
      "cebolla",
      "tomate",
    ];
    d11.image = "guiso.jpg";

    let d12 = this[MODEL].createDish("Tabla de Ibéricos");
    d12.description = "Tabla de productos ibéricos procedentes de Extremadura";
    d12.ingredients = ["jamón", "chorizo", "salchichón", "lomo"];
    d12.image = "ibericos.jpg";

    this[MODEL].assignCategoryToDish(category1, d2);
    this[MODEL].assignCategoryToDish(category1, d3);
    this[MODEL].assignCategoryToDish(category1, d5);
    this[MODEL].assignCategoryToDish(category1, d12);
    this[MODEL].assignCategoryToDish(category2, d1);
    this[MODEL].assignCategoryToDish(category2, d4);
    this[MODEL].assignCategoryToDish(category2, d8);
    this[MODEL].assignCategoryToDish(category2, d11);
    this[MODEL].assignCategoryToDish(category3, d6);
    this[MODEL].assignCategoryToDish(category3, d7);
    this[MODEL].assignCategoryToDish(category3, d9);
    this[MODEL].assignCategoryToDish(category3, d10);

    let a1 = this[MODEL].createAllergen("Gluten");
    a1.description = "Contiene trazas de trigo";

    let a2 = this[MODEL].createAllergen("Lactosa");
    a2.description = "Contiene lactosa";

    let a3 = this[MODEL].createAllergen("Marisco");
    a3.description = "Contiene marisco";

    let a4 = this[MODEL].createAllergen("Frutos secos");
    a4.description = "Contiene trazas de frutos secos";

    this[MODEL].assignAllergenToDish(a1, d3);
    this[MODEL].assignAllergenToDish(a1, d4);
    this[MODEL].assignAllergenToDish(a1, d7);
    this[MODEL].assignAllergenToDish(a1, d9);
    this[MODEL].assignAllergenToDish(a1, d10);

    this[MODEL].assignAllergenToDish(a2, d3);
    this[MODEL].assignAllergenToDish(a2, d6);
    this[MODEL].assignAllergenToDish(a2, d7);
    this[MODEL].assignAllergenToDish(a2, d9);
    this[MODEL].assignAllergenToDish(a2, d10);

    this[MODEL].assignAllergenToDish(a3, d1);
    this[MODEL].assignAllergenToDish(a3, d5);

    this[MODEL].assignAllergenToDish(a4, d10);
    this[MODEL].assignAllergenToDish(a4, d7);

    let m1 = this[MODEL].createMenu("Vegetariano");
    m1.description =
      "Menú compuesto por un entrante , un plato principal y un postre vegetariano";

    let m2 = this[MODEL].createMenu("De la Casa");
    m2.description =
      "Menú compuesto por un entrante , un plato principal y un postre especiales de la casa";

    let m3 = this[MODEL].createMenu("Gourmet");
    m3.description =
      "Menú compuesto por un entrante , un plato principal y un postre gourmet";

    this[MODEL].assignDishToMenu(m1, d5);
    this[MODEL].assignDishToMenu(m1, d2);
    this[MODEL].assignDishToMenu(m1, d10);

    this[MODEL].assignDishToMenu(m2, d3);
    this[MODEL].assignDishToMenu(m2, d11);
    this[MODEL].assignDishToMenu(m2, d6);

    this[MODEL].assignDishToMenu(m3, d12);
    this[MODEL].assignDishToMenu(m3, d8);
    this[MODEL].assignDishToMenu(m3, d7);

    let cMadrid = new Coordinate("40.419992", "-3.688737");
    let cBarcelona = new Coordinate("41.3902665", "2.1927896");
    let cCR = new Coordinate("39.40532515", "-3.1260274477027");

    let r1 = this[MODEL].createRestaurant("La Virgulilla - Madrid", cMadrid);
    r1.description =
      "Restaurante La Virgulilla en la Puerta de Alcalá de Madrid";

    let r2 = this[MODEL].createRestaurant(
      "La Virgulilla - Barcelona",
      cBarcelona
    );
    r2.description =
      "Restaurante La Virgulilla en la Carrer de Marina de Barcelona";

    let r3 = this[MODEL].createRestaurant("La Virgulilla - Ciudad Real", cCR);
    r3.description =
      "Restaurante La Virgulilla en la Plaza Mayor de Ciudad Real";

    this[MODEL].addRestaurant(r1);
    this[MODEL].addRestaurant(r2);
    this[MODEL].addRestaurant(r3);
  }
}
export default RestaurantController;
