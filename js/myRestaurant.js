import RestaurantApp from "./RestaurantApp.js";

window.addEventListener("popstate", (event) => {
  if (event.state) {
    historyActions[event.state.action](event);
  }
});

const historyActions = {
  init: () => {
    RestaurantApp.handleInit();
  },
  showCategories: () => {
    RestaurantApp.handleCategories();
  },
  showCategory: (event) =>
    RestaurantApp.handleShowCategory(event.state.category),
  showAllergens: () => {
    RestaurantApp.handleAllergen();
  },
  showMenus: () => {
    RestaurantApp.handleMenu();
  },
  showRestaurants: () => {
    RestaurantApp.handleRestaurant();
  },
  closeWindows: () => {
    RestaurantApp.handleCloseWindows();
  },
  showDishInCategory: (event) => RestaurantApp.handleDishes(event.state.dish),
  showDishRandom: (event) => RestaurantApp.handleDishes(event.state.dish),
  showSingleAllergen: (event) =>
    RestaurantApp.handleShowAllergen(event.state.allergen),
  showSingleMenu: (event) => RestaurantApp.handleShowMenu(event.state.menu),
  showSingleRestaurant: (event) =>
    RestaurantApp.handleShowRestaurant(event.state.rest),
  showAllergenDish: (event) => RestaurantApp.handleDishes(event.state.dish),

  showMenuDish: (event) => RestaurantApp.handleDishes(event.state.dish),
};

history.replaceState({ action: "init" }, null);
