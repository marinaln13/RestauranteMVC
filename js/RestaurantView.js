const EXCECUTE_HANDLER = Symbol("excecuteHandler");

class RestaurantView {
  constructor() {
    this.content = document.getElementById("content");
    this.categories = document.getElementById("categories");
    this.dropcat = document.getElementsByClassName("dropcat-item");
    this.droprest = document.getElementsByClassName("droprest-item");
    this.dropdowncat = document.getElementById("dropdown-categories");
    this.dropdownrest = document.getElementById("dropdown-rest");
    this.main = document.getElementById("dishes");
    this.navcatdrop = document.getElementById("nav-cate");
    this.navrestdrop = document.getElementById("nav-rest");
    this.cont = 0;
    this.array = [];

    this.elemWindow = null;
  }

  [EXCECUTE_HANDLER](
    handler,
    handlerArguments,
    scrollElement,
    data,
    url,
    event
  ) {
    handler(...handlerArguments);
    const scroll = document.querySelector(scrollElement);
    //console.log(scroll);
    if (scroll) scroll.scrollIntoView();
    //$(scrollElement).get(0).scrollIntoView();
    history.pushState(data, null, url);
    event.preventDefault();
  }

  init() {
    this.content.replaceChildren();
    this.content.insertAdjacentHTML(
      "afterbegin",
      `<ul class="breadcrumb" id="breadcrumb"> 
          <li class="breadcrumb-item"><a id="init-bread" href="#"> Inicio </a></li>
       </ul>
       </div>
       <div id="content__title" class="content__title"><h1>~~ Cocina Tradicional Española ~~</h1></div>
        `
    );

    this.categories.replaceChildren();
    const contentCategories = document.createElement("div");
    contentCategories.id = "list-categories";

    contentCategories.insertAdjacentHTML(
      "afterbegin",
      `
        <div class="category">
          <a data-category="Entrantes" href="#single-allergen"><h1>Entrantes</h1>
        </div>
        <div class="category">
          <a data-category="Platos Principales" href="#single-allergen"><h1>Platos Principales</h1>
        </div>
        <div class="category">
          <a data-category="Postres" href="#single-allergen"><h1>Postres</h1>
        </div>
        `
    );
    this.categories.append(contentCategories);
  }

  ShowCategories(cats) {
    this.content.replaceChildren();
    this.content.insertAdjacentHTML(
      "afterbegin",
      `<ul class="breadcrumb" id="breadcrumb"> 
          <li class="breadcrumb-item"><a id="init-bread" href="#"> Inicio </a></li>
          <li class="breadcrumb-item"><a id="cate-bread" href="#"> Categorías </a></li>
       </ul>
       </div>
       <div id="content__title" class="content__title"><h1>~~ Categorías ~~</h1></div>
        `
    );
    this.main.replaceChildren();
    this.main.insertAdjacentHTML(
      "beforeend",
      `<figure class="dib dib-cat">
        <img src="./img/mesa-restaurante.png"></img>
      </figure>
      <figure class="dib dib-cat">
        <img src="./img/mesa-restaurante.png"></img>
      </figure>
      <figure class="dib dib-cat">
        <img src="./img/mesa-restaurante.png"></img>
      </figure>
      `
    );
    this.categories.replaceChildren();

    const contentCategories = document.createElement("div");
    contentCategories.id = "list-categories";
    for (const cat of cats) {
      contentCategories.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="category">
          <a data-category="${cat[0]}" href="#single-allergen"><h1>${cat[0]}</h1>
        </div>
        `
      );
    }
    this.categories.append(contentCategories);
  }

  DropdownCategories(categories) {
    this.dropdowncat.replaceChildren();
    this.dropdowncat.style.zIndex = 10;
    for (const category of categories) {
      this.dropdowncat.insertAdjacentHTML(
        "beforeEnd",
        `<div><p><a href="#" class="dropcat-item" data-category="${category[0]}"> 
          ${category[0]}
          </a></p>
        </div>`
      );
    }
  }

  DropdownRestaurants(rests) {
    this.dropdownrest.replaceChildren();

    for (const rest of rests) {
      this.dropdownrest.insertAdjacentHTML(
        "beforeEnd",
        `<div ><p><a href="#" class="droprest-item" data-rest="${rest[0]}"> 
          ${rest[0]}
          </a></p>
        </div>`
      );
    }
    this.dropdownrest.style.display = "block";
  }

  ShowAllergens(allergens) {
    this.categories.replaceChildren();
    this.content.replaceChildren();
    this.content.insertAdjacentHTML(
      "afterbegin",
      `<ul id="breadcrumb" class="breadcrumb"> 
          <li class="breadcrumb-item"><a id="init-bread" href="#"> Inicio </a></li>
          <li class="breadcrumb-item"><a id="allergen-bread" href="#"> Alérgenos </a></li>
       </ul>
       </div>
       <div id="content__title" class="content__title"><h1>~~ Alérgenos ~~</h1></div>
        `
    );

    this.main.replaceChildren();
    const contentAllergen = document.createElement("div");
    contentAllergen.id = "list-allergens";
    for (const al of allergens) {
      contentAllergen.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="allergen">
          <a data-allergen="${al[0]}" href="#single-allergen"><h1>${al[0]}</h1>
        </div>
        `
      );
    }
    this.main.append(contentAllergen);

    this.main.insertAdjacentHTML(
      "beforeend",
      `<figure class="dib"><img src="./img/libre-de-alergenos.png"
      </figure>`
    );
  }

  ShowMenus(menus) {
    this.categories.replaceChildren();
    this.content.replaceChildren();
    this.content.insertAdjacentHTML(
      "afterbegin",
      `<ul id="breadcrumb" class="breadcrumb"> 
          <li class="breadcrumb-item"><a id="init-bread" href="#"> Inicio </a></li>
          <li class="breadcrumb-item"><a id="menu-bread" href="#"> Menú </a></li>
       </ul>
       </div>
       <div id="content__title" class="content__title"><h1>~~ Menú ~~</h1></div>
        `
    );

    this.main.replaceChildren();
    const contentMenu = document.createElement("div");
    contentMenu.id = "list-menus";
    for (const m of menus) {
      contentMenu.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="menu">
          <a data-menu="${m[0]}" href="#single-menu"><h1>${m[0]}</h1>
        </div>
        `
      );
    }
    this.main.append(contentMenu);
    this.main.insertAdjacentHTML(
      "beforeend",
      `<figure class="dib"><img src="./img/menu.png"
      </figure>`
    );
  }

  ShowRestaurants(rests) {
    this.categories.replaceChildren();
    this.content.replaceChildren();
    this.content.insertAdjacentHTML(
      "afterbegin",
      `<ul id="breadcrumb" class="breadcrumb"> 
          <li class="breadcrumb-item"><a id="init-bread" href="#"> Inicio </a></li>
          <li class="breadcrumb-item"><a id="rest-bread" href="#"> Restaurantes </a></li>
       </ul>
       </div>
       <div id="content__title" class="content__title"><h1>~~ Restaurantes ~~</h1></div>
        `
    );

    this.main.replaceChildren();
    const contentRest = document.createElement("div");
    contentRest.id = "list-rests";
    for (const r of rests) {
      contentRest.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="rest">
          <a data-rest="${r[0]}" href="#single-rest"><h1>${r[0]}</h1>
        </div>
        `
      );
    }
    this.main.append(contentRest);
    this.main.insertAdjacentHTML(
      "beforeend",
      `<figure class="dib"><img src="./img/restaurante.png"
      </figure>`
    );
  }

  ShowRandomDishes(dishes) {
    this.main.replaceChildren();
    this.main.id = "dishes-random";
    const arrDishes = Array.from(dishes);

    for (let index = 0; index < 3; index++) {
      let elem = arrDishes.splice(
        Math.floor(Math.random() * arrDishes.length),
        1
      );
      this.main.insertAdjacentHTML(
        "afterbegin",
        ` 
      </figure>
        <div class="dish">
          <figure class="dish-image">
            <a data-dish="${elem[0][1].dish.name}" "href="#single-product">
              <img src="./img/${elem[0][1].dish.image}" alt="Imagen de un plato de ${elem[0][1].dish.name}" />
              <figcaption class="dish__name">
                <h1>${elem[0][1].dish.name}</h1>
              </figcaption>
            </a> 
          </figure>`
      );
    }
  }

  dishesInCategory(dishes, cat) {
    const bread = document.getElementById("breadcrumb");
    const li = document.createElement("li");
    li.id = "category-bread";
    li.innerText = cat;
    const elem = document.getElementById("category-bread");

    elem ? elem.replaceWith(li) : bread.append(li);

    const title = document.getElementById("content__title");
    const newtitle = document.createElement("div");
    newtitle.id = "cate-title";
    newtitle.classList.add("title-cate");
    const h1 = document.createElement("h2");
    h1.innerText = "~~ " + cat + " ~~";
    newtitle.append(h1);
    newtitle.style.textAlign = "center";

    document.getElementById("cate-title")
      ? title.lastChild.replaceWith(newtitle)
      : title.append(newtitle);

    this.main.replaceChildren();
    this.main.id = "dishes-category";

    /*if (this.categories.children.length > 1)
      this.categories.children[1].remove();*/

    for (const d of dishes) {
      const contentDishes = document.createElement("div");
      contentDishes.classList = "cate-dish";
      contentDishes.insertAdjacentHTML(
        "beforeend",
        `<figure class="dish-image">
          <a data-dish="${d.name}" href="#single-product" >
             <img src="./img/${d.image}" />
              <figcaption class="dish__name">
                <h1>${d.name}<h1>
              </figcaption>
              
          </a> 
          
          </figure>`
      );
      this.main.append(contentDishes);
    }
  }

  showInfoDish(dish) {
    const info = document.createElement("div");
    info.id = "info-dish";
    const h3 = document.createElement("h3");
    h3.innerText = dish.dish.name;
    info.append(h3);
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    info.insertAdjacentHTML(
      "beforeend",
      `
    <p>Descripción: ${dish.dish.description} </p>
    Ingredientes: `
    );

    dish.dish.ingredients.forEach((ing) => {
      p.innerText += ing + " ";
    });
    info.append(p);
    p2.innerText += "Categoría: ";

    for (const c of dish.categories.keys()) {
      p2.innerText += c + " ";
    }
    info.append(p2);
    p3.innerText += "Alérgenos: ";
    for (const a of dish.allergens.values()) {
      p3.innerText += a.name + " ";
    }
    info.append(p3);
    info.insertAdjacentHTML(
      "beforeend",
      `<div class="btn-container">
      <button id="btn-dish" class="bOpen" data-dish="${dish.dish.name}"> +Info </button>
       </div>`
    );

    if (document.getElementById("info-dish")) {
      document.getElementById("info-dish").replaceWith(info);
    } else {
      this.main.append(info);
    }
  }

  showElemDish(dish) {
    const info = document.createElement("div");
    info.id = "info-dish";
    const h3 = document.createElement("h3");
    h3.innerText = dish.dish.name;
    info.append(h3);

    info.insertAdjacentHTML(
      "beforeend",
      `<figure><img src="./img/${dish.dish.image}"</figure>`
    );
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    info.insertAdjacentHTML(
      "beforeend",
      `
    <p>Descripción: ${dish.dish.description} </p>
    Ingredientes: `
    );

    dish.dish.ingredients.forEach((ing) => {
      p.innerText += ing + " ";
    });
    info.append(p);
    p2.innerText += "Categoría: ";

    for (const c of dish.categories.keys()) {
      p2.innerText += c + " ";
    }
    info.append(p2);
    p3.innerText += "Alérgenos: ";
    for (const a of dish.allergens.values()) {
      p3.innerText += a.name + " ";
    }
    info.append(p3);

    if (document.getElementById("info-dish")) {
      document.getElementById("info-dish").replaceWith(info);
    } else {
      this.main.append(info);
    }
  }

  showInfoAllergen(al, dishes) {
    if (document.getElementById("info-dish")) {
      document.getElementById("info-dish").replaceChildren();
    }
    const bread = document.getElementById("breadcrumb");
    const li = document.createElement("li");
    li.id = "allergen-bread";
    li.innerText = al.name;

    document.getElementById("allergen-bread")
      ? bread.lastChild.replaceWith(li)
      : bread.append(li);

    const info = document.createElement("div");
    info.id = "info-allergen";
    const h3 = document.createElement("h3");
    h3.innerText = al.name;
    info.append(h3);
    const p = document.createElement("p");
    info.insertAdjacentHTML(
      "beforeend",
      `<p>Descripción:  + ${al.description}</p>
       <p>Listado de Platos con este alérgeno: `
    );
    info.append(p);
    for (const d of Array.from(dishes)) {
      info.insertAdjacentHTML(
        "beforeend",
        `<a href="#" data-dish="${d.name}"><p> - ${d.name}<p></a>
         `
      );
    }

    info.insertAdjacentHTML(
      "beforeend",
      `<div class="btn-container">
            <button id="btn-allergen" class="bOpen" data-allergen="${al.name}"> + Info </button>
          </div>`
    );
    if (document.getElementById("info-allergen")) {
      document.getElementById("info-allergen").replaceWith(info);
    } else {
      this.main.append(info);
    }
  }

  showInfoMenu(m) {
    if (document.getElementById("info-dish")) {
      document.getElementById("info-dish").replaceChildren();
    }
    const bread = document.getElementById("breadcrumb");
    const li = document.createElement("li");
    li.id = "menu-bread";
    li.innerText = m.menu.name;

    document.getElementById("menu-bread")
      ? bread.lastChild.replaceWith(li)
      : bread.append(li);

    const info = document.createElement("div");
    info.id = "info-menu";
    const h3 = document.createElement("h3");
    h3.innerText = m.menu.name;
    info.append(h3);
    const p = document.createElement("p");
    info.insertAdjacentHTML(
      "beforeend",
      `<p>Descripción: ${m.menu.description}</p>
       <p>Listado de Platos en el menú: </p>`
    );
    info.append(p);
    for (const d of m.dishes) {
      info.insertAdjacentHTML(
        "beforeend",
        `<a href="#" data-dish="${d.name}"><p> - ${d.name}<p></a>
         `
      );
    }

    info.insertAdjacentHTML(
      "beforeend",
      `<div class="btn-container">
            <button id="btn-menu" class="bOpen" data-menu="${m.menu.name}"> + Info </button>
          </div>`
    );
    if (document.getElementById("info-menu")) {
      document.getElementById("info-menu").replaceWith(info);
    } else {
      this.main.append(info);
    }
  }

  showInfoRestaurant(r) {
    const bread = document.getElementById("breadcrumb");
    const li = document.createElement("li");
    li.id = "rest-bread";
    li.innerText = r.name;

    document.getElementById("rest-bread")
      ? bread.lastChild.replaceWith(li)
      : bread.append(li);

    const info = document.createElement("div");
    info.id = "info-rest";
    const h3 = document.createElement("h3");
    h3.innerText = r.name;
    info.append(h3);
    const p = document.createElement("p");
    info.insertAdjacentHTML(
      "beforeend",
      `<p>Descripción: ${r.description}</p>
    <p>Localización: ${r.location}`
    );

    info.insertAdjacentHTML(
      "beforeend",
      `<div class="btn-container">
            <button id="btn-rest" class="bOpen" data-rest="${r.name}"> + Info </button>
          </div>`
    );

    info.append(p);
    if (document.getElementById("info-rest")) {
      document.getElementById("info-rest").replaceWith(info);
    } else {
      this.main.append(info);
    }
  }

  showDishInNewWindow(dish) {
    const main = this.elemWindow.document.querySelector("main");

    main.replaceChildren();

    const info = document.createElement("div");
    info.id = "info-dish";
    const h3 = document.createElement("h3");
    h3.innerText = dish.dish.name;
    info.append(h3);
    const p = document.createElement("p");

    info.insertAdjacentHTML(
      "beforeend",
      `<figure class="newW-figure"><img src="./img/${dish.dish.image}" /></figure>
    <p>Descripción: ${dish.dish.description}</p>
    <p>Ingredientes</p>
    <p></p>
    <p></p>
    <p></p>`
    );

    dish.dish.ingredients.forEach((ing) => {
      p.innerText += ing + " ";
    });
    info.append(p);

    const p2 = document.createElement("p");
    p2.innerText += "Categoría: ";
    for (const c of dish.categories.keys()) {
      p2.innerText += c + " ";
    }
    info.append(p2);

    const p3 = document.createElement("p");
    p3.innerText += "Alérgenos: ";
    for (const a of dish.allergens.values()) {
      p3.innerText += a.name + " ";
    }
    info.append(p3);

    main.append(info);
  }

  showMenuInNewWindow(m) {
    const main = this.elemWindow.document.querySelector("main");

    main.replaceChildren();
    const info = document.createElement("div");
    info.id = "info-menu";
    const h3 = document.createElement("h3");
    h3.innerText = m.menu.name;
    info.append(h3);
    const p = document.createElement("p");
    info.insertAdjacentHTML(
      "beforeend",
      `<p>Descripción: ${m.menu.description}</p>
     <p>Listado de Platos en el menú: </p>`
    );
    info.append(p);
    for (const d of m.dishes) {
      info.insertAdjacentHTML(
        "beforeend",
        `<a href="#" data-dish="${d.name}"><p> - ${d.name}<p></a>
         `
      );
    }

    main.append(info);
  }

  showAllergenInNewWindow(al, dishes) {
    const main = this.elemWindow.document.querySelector("main");
    main.replaceChildren();

    const info = document.createElement("div");
    info.id = "info-allergen";
    const h3 = document.createElement("h3");
    h3.innerText = al.name;
    info.append(h3);
    const p = document.createElement("p");
    info.insertAdjacentHTML(
      "beforeend",
      `<p>Descripción:  + ${al.description}</p>
     <p>Listado de Platos con este alérgeno: </p>`
    );

    info.append(p);

    for (const d of Array.from(dishes)) {
      info.insertAdjacentHTML(
        "beforeend",
        `<a href="#" data-dish="${d.name}"><p> - ${d.name}<p></a>
         `
      );
    }

    main.append(info);
  }

  showRestInNewWindow(r) {
    const main = this.elemWindow.document.querySelector("main");
    main.replaceChildren();
    const info = document.createElement("div");
    info.id = "info-rest";
    const h3 = document.createElement("h3");
    h3.innerText = r.name;
    info.append(h3);
    const p = document.createElement("p");
    info.insertAdjacentHTML(
      "beforeend",
      `<p>Descripción: ${r.description}</p>
    <p>Localización: ${r.location}`
    );

    main.append(info);
  }

  closeWindows() {
    for (let index = 0; index < this.array.length; index++) {
      this.array[index].close();
    }
  }

  bindShowElemInNewWindow(handler) {
    const bOpens = document.getElementsByClassName("bOpen");

    for (const b of bOpens) {
      b.addEventListener("click", (event) => {
        let wName = "window" + this.cont;

        this.cont++;

        this.elemWindow = window.open(
          "auxPage.html",
          wName,
          "width=800, height=600, top=250, left=250, titlebar=yes, toolbar=no, menubar=no, location=no"
        );

        this.array.push(this.elemWindow);

        this.elemWindow.addEventListener("DOMContentLoaded", () => {
          if (event.target.dataset.dish) handler(event.target.dataset.dish);
          if (event.target.dataset.rest) handler(event.target.dataset.rest);
          if (event.target.dataset.menu) handler(event.target.dataset.menu);
          if (event.target.dataset.allergen)
            handler(event.target.dataset.allergen);
          this.elemWindow.focus();
        });
      });
    }
  }

  bindInit(handler) {
    document.getElementById("init").addEventListener("click", (event) => {
      this[EXCECUTE_HANDLER](
        handler,
        [],
        "body",
        { action: "init" },
        "#",
        event
      );
    });
    document.getElementById("logo").addEventListener("click", (event) => {
      this[EXCECUTE_HANDLER](
        handler,
        [],
        "body",
        { action: "init" },
        "#",
        event
      );
    });
    document.getElementById("init-foot").addEventListener("click", (event) => {
      this[EXCECUTE_HANDLER](
        handler,
        [],
        "body",
        { action: "init" },
        "#",
        event
      );
    });
    document.getElementById("init-bread").addEventListener("click", (event) => {
      this[EXCECUTE_HANDLER](
        handler,
        [],
        "body",
        { action: "init" },
        "#",
        event
      );
    });
  }

  bindCategoryNav(handler) {
    document.getElementById("nav-cate").addEventListener("click", (event) => {
      this[EXCECUTE_HANDLER](
        handler,
        [],
        "nav",
        { action: "showCategories" },
        "#Categories",
        event
      );
    });
  }

  bindSingleCategory(handler) {
    const cats = document.getElementById("list-categories");
    const links = cats.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        const { category } = event.currentTarget.dataset;
        this[EXCECUTE_HANDLER](
          handler,
          [category],
          "nav",
          { action: "showSingleCategory", category },
          "#category-list",
          event
        );
      });
    }
  }

  bindDishInCategory(handler) {
    const dishes = document.getElementById("dishes-category");
    const links = dishes.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        const { dish } = event.currentTarget.dataset;
        this[EXCECUTE_HANDLER](
          handler,
          [dish],
          "main",
          { action: "showDishInCategory", dish },
          "#DishInCategory",
          event
        );
      });
    }
  }

  bindDishRandom(handler) {
    const dishes = document.getElementById("dishes-random");
    const links = dishes.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        const { dish } = event.currentTarget.dataset;
        this[EXCECUTE_HANDLER](
          handler,
          [dish],
          "main",
          { action: "showDishRandom", dish },
          "#DishInCategory",
          event
        );
      });
    }
  }

  bindAllergenDish(handler) {
    const dishes = document.getElementById("info-allergen");
    const links = dishes.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        const { dish } = event.currentTarget.dataset;
        this[EXCECUTE_HANDLER](
          handler,
          [dish],
          "content",
          { action: "showAllergenDish", dish },
          "#",
          event
        );
      });
    }
  }

  bindMenuDish(handler) {
    const dishes = document.getElementById("info-menu");
    const links = dishes.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        const { dish } = event.currentTarget.dataset;
        this[EXCECUTE_HANDLER](
          handler,
          [dish],
          "content",
          { action: "showMenuDish", dish },
          "#",
          event
        );
      });
    }
  }

  bindAllergen(handler) {
    document
      .getElementById("nav-allergen")
      .addEventListener("click", (event) => {
        this[EXCECUTE_HANDLER](
          handler,
          [],
          "nav",
          { action: "showAllergens" },
          "#Allergens",
          event
        );
      });
  }

  bindSingleAllergen(handler) {
    const als = document.getElementById("list-allergens");
    const links = als.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        const { allergen } = event.currentTarget.dataset;

        this[EXCECUTE_HANDLER](
          handler,
          [allergen],
          "nav",
          { action: "showSingleAllergen", allergen },
          "#single-allergen",
          event
        );
      });
    }
  }

  bindMenu(handler) {
    document.getElementById("nav-menu").addEventListener("click", (event) => {
      this[EXCECUTE_HANDLER](
        handler,
        [],
        "nav",
        { action: "showMenus" },
        "#Menus",
        event
      );
    });
  }

  bindRestaurant(handler) {
    document.getElementById("nav-rest").addEventListener("click", (event) => {
      this[EXCECUTE_HANDLER](
        handler,
        [],
        "nav",
        { action: "showRestaurants" },
        "#Restaurants",
        event
      );
    });
  }

  bindSingleMenu(handler) {
    const menus = document.getElementById("list-menus");

    const links = menus.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        const { menu } = event.currentTarget.dataset;

        this[EXCECUTE_HANDLER](
          handler,
          [menu],
          "nav",
          { action: "showSingleMenu", menu },
          "#single-menu",
          event
        );
      });
    }
  }

  bindSingleRestaurant(handler) {
    const rests = document.getElementById("list-rests");

    const links = rests.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        const { rest } = event.currentTarget.dataset;

        this[EXCECUTE_HANDLER](
          handler,
          [rest],
          "nav",
          { action: "showSingleRestaurant", rest },
          "#single-rest",
          event
        );
      });
    }
  }

  bindCloseWindows(handler) {
    document.getElementById("nav-close").addEventListener("click", (event) => {
      this[EXCECUTE_HANDLER](
        handler,
        [],
        "nav",
        { action: "closeWindows" },
        "#Categories",
        event
      );
    });
  }

  mouseenterCategories(handler) {
    this.navcatdrop.addEventListener("mouseenter", (event) => {
      handler();
    });
    this.dropdowncat.addEventListener("mouseenter", (event) => {
      handler();
    });
  }

  mouseleaveCategories() {
    const navC = document.getElementById("nav-categories");
    navC.addEventListener("mouseleave", (event) => {
      this.dropdowncat.style.display = "none";
    });
  }

  mouseenterRestaurants(handler) {
    this.navrestdrop.addEventListener("mouseenter", (event) => {
      handler();
    });
    this.dropdownrest.addEventListener("mouseenter", (event) => {
      handler();
    });
  }

  mouseleaveRestaurants() {
    const navR = document.getElementById("nav-restaurants");

    navR.addEventListener("mouseleave", (event) => {
      this.dropdownrest.style.display = "none";
    });
    /*
    navR.firstElementChild.addEventListener("mouseleave", (event) => {
      this.HideDropRest();
    });*/
  }

  bindCategoryDrop(handler) {
    for (const link of this.dropcat) {
      link.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.category);
      });
    }
  }

  bindRestaurantDrop(handler) {
    for (const link of this.droprest) {
      link.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.restaurant);
      });
    }
  }
}

export default RestaurantView;
