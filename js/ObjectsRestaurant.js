//Importamos las excepciones que necesitemos
import {
  BaseException,
  InvalidAccessConstructorException,
  EmptyValueException,
  InvalidValueException,
} from "./exceptions.js";

//Creamos la clase Dish
class Dish {
  #name;
  #description;
  #ingredients;
  #image;
  constructor(name) {
    if (!new.target) throw new InvalidAccessConstructorException();
    if (!name) throw new EmptyValueException("name");

    this.#name = name;
    this.#description = "";
    this.#ingredients = [];
    this.#image = "";

    Object.defineProperty(this, "name", {
      enumerable: true,
      get() {
        return this.#name;
      },
      set(value) {
        if (!value) throw new EmptyValueException("name");
        this.#name = value;
      },
    });

    Object.defineProperty(this, "description", {
      enumerable: true,
      get() {
        return this.#description;
      },
      set(value) {
        if (!value) throw new EmptyValueException("description");
        this.#description = value;
      },
    });

    Object.defineProperty(this, "ingredients", {
      enumerable: true,
      get() {
        return this.#ingredients;
      },
      set(value) {
        if (!value) throw new EmptyValueException("ingredients");
        if (!(value instanceof Array))
          throw new InvalidValueException("ingredients", value);
        this.#ingredients = value;
      },
    });

    Object.defineProperty(this, "image", {
      enumerable: true,
      get() {
        return this.#image;
      },
      set(value) {
        if (!value) throw new EmptyValueException("image");
        this.#image = value;
      },
    });
  }

  toString() {
    return (
      this.#name +
      " " +
      this.#description +
      " " +
      this.#ingredients +
      " " +
      this.#image
    );
  }
}

//Creamos la clase Category
class Category {
  #name;
  #description;
  constructor(name) {
    if (!new.target) throw new InvalidAccessConstructorException();
    if (!name) throw new EmptyValueException("name");
    this.#name = name;
    this.#description = "";

    Object.defineProperty(this, "name", {
      enumerable: true,
      get() {
        return this.#name;
      },
      set(value) {
        if (!value) throw new EmptyValueException("name");
        this.#name = value;
      },
    });

    Object.defineProperty(this, "description", {
      enumerable: true,
      get() {
        return this.#description;
      },
      set(value) {
        if (!value) throw new EmptyValueException("description");
        this.#description = value;
      },
    });
  }

  toString() {
    return this.#name + " " + this.#description;
  }
}

//Creamos la clase Allergen
class Allergen {
  #name;
  #description;
  constructor(name) {
    if (!new.target) throw new InvalidAccessConstructorException();
    if (!name) throw new EmptyValueException("name");
    this.#name = name;
    this.#description = "";

    Object.defineProperty(this, "name", {
      enumerable: true,
      get() {
        return this.#name;
      },
      set(value) {
        if (!value) throw new EmptyValueException("name");
        this.#name = value;
      },
    });

    Object.defineProperty(this, "description", {
      enumerable: true,
      get() {
        return this.#description;
      },
      set(value) {
        if (!value) throw new EmptyValueException("description");
        this.#description = value;
      },
    });
  }

  toString() {
    return this.#name + " " + this.#description;
  }
}

//Creamos la clase Menu
class Menu {
  #name;
  #description;
  constructor(name) {
    if (!new.target) throw new InvalidAccessConstructorException();
    if (!name) throw new EmptyValueException("name");
    this.#name = name;
    this.#description = "";

    Object.defineProperty(this, "name", {
      enumerable: true,
      get() {
        return this.#name;
      },
      set(value) {
        if (!value) throw new EmptyValueException("name");
        this.#name = value;
      },
    });

    Object.defineProperty(this, "description", {
      enumerable: true,
      get() {
        return this.#description;
      },
      set(value) {
        if (!value) throw new EmptyValueException("description");
        this.#description = value;
      },
    });
  }

  toString() {
    return this.#name + " " + this.#description;
  }
}

//Creamos la clase Restaurant
class Restaurant {
  #name;
  #description;
  #location;
  constructor(name, location = "") {
    if (!new.target) throw new InvalidAccessConstructorException();
    if (!name) throw new EmptyValueException("name");
    if (location) {
      if (!(location instanceof Coordinate)) {
        throw new InvalidValueException("location", value);
      }
    }
    this.#name = name;
    this.#description = "";
    this.#location = location;

    Object.defineProperty(this, "name", {
      enumerable: true,
      get() {
        return this.#name;
      },
      set(value) {
        if (!value) throw new EmptyValueException("name");
        this.#name = value;
      },
    });

    Object.defineProperty(this, "description", {
      enumerable: true,
      get() {
        return this.#description;
      },
      set(value) {
        if (!value) throw new EmptyValueException("description");
        this.#description = value;
      },
    });

    Object.defineProperty(this, "location", {
      enumerable: true,
      get() {
        return this.#location;
      },
      set(value) {
        if (!(value instanceof Coordinate))
          throw new InvalidValueException("location", value);
        this.#location = value;
      },
    });
  }

  toString() {
    return this.#name + " " + this.#description + " " + this.#location;
  }
}

//Creamos la clase Coordinate
class Coordinate {
  #latitude;
  #longitude;
  constructor(latitude, longitude) {
    if (!new.target) throw new InvalidAccessConstructorException();
    if (!latitude) throw new EmptyValueException("latitude");
    if (!longitude) throw new EmptyValueException("longitude");
    this.#latitude = latitude;
    this.#longitude = longitude;

    Object.defineProperty(this, "latitude", {
      enumerable: true,
      get() {
        return this.#latitude;
      },
      set(value) {
        if (!value) throw new EmptyValueException("latitude");
        this.#latitude = value;
      },
    });

    Object.defineProperty(this, "longitude", {
      enumerable: true,
      get() {
        return this.#longitude;
      },
      set(value) {
        if (!value) throw new EmptyValueException("longitude");
        this.#longitude = value;
      },
    });
  }

  toString() {
    return this.#latitude + " " + this.#longitude;
  }
}

//Exportamos las clases
export { Dish, Category, Allergen, Restaurant, Menu, Coordinate };
export default Coordinate;
