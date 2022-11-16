//Crear el array de objetos "Pizzas". 🍕
//👉 Debemos crear 6 objetos como mínimo.
//👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, 
//ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

//🔥 Utilizando métodos de array e iterando sobre el array de pizzas, 
//realizar las siguientes actividades, imprimiendo en consola:
//a)  Las pizzas que tengan un id impar.
//b) ¿Hay alguna pizza que valga menos de $600?
//c) El nombre de cada pizza con su respectivo precio.
//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los
// ingredientes de la pizza actual). Ayuda: van a tener que realizar dos 
// recorridos, ya que cada pizza del array de pizzas tiene un array de 
// ingredientes.

//TODAS  las respuestas deben ser USER-FRIENDLY. 
//Si (como en el punto B), la respuesta es un booleano (true o false), 
//no imprimir el booleano , imprimir en consola una respuesta que toda persona
// pueda entender, sepa o no de programación (Es decir, no podemos imprimir 
//    un array o un objeto en consola, por ejemplo).

//Manejemos cada respuesta, pensando en que un usuario promedio va a leer
// eso. 
 
//Un ejemplo de lo que sería una repuesta "user-friendly": "La pizza X, 
//tiene un valor de $XXXX”. 💸

let pizzas = [
    {
        id: 1,
        nombre: "La Mr. Pit",
        ingredientes: ["Muzza",
                       " aceitunas", 
                       " huevo duro"],
        precio: 350,
    },

    {
        id: 2,
        nombre: "Q jamone",
        ingredientes: ["Jamon crudo", 
                       " rúcula", 
                       " provolone"],
        precio: 350,
    },
    {
        id: 3,
        nombre: "La Charly",
        ingredientes: ["Doble tomate", 
                       " muzza doble", 
                       " finas hierbas"],
        precio: 380,
    },
    {
        id: 4,
        nombre: "La Maradona",
        ingredientes: ["Jamon cocido", 
                       " muzza", 
                       " queso azul", 
                       " aceitunas"],
        precio: 450,
    },
    {
        id: 5,
        nombre: "Picantovich",
        ingredientes: ["Mix de ajies", 
                       " doble tomate", 
                       " doble muzza", 
                       " finas hierbas"],
        precio: 750,
    },
    {
        id: 6,
        nombre: "La Hasbulla",
        ingredientes: ["Jamon cocido", 
                       " doble muzza", 
                       " huevo frito", 
                       " queso cheddar"],
        precio: 850,
    },    
    {
        id: 7,
        nombre: "Leo messi",
        ingredientes: ["Cantimpalo", 
                       " doble muzza", 
                       " finas hierbas"],
        precio: 800,
    },    
    {
        id: 8,
        nombre: "Nicki Gi",
        ingredientes: ["Mix de verduras", 
                       " doble muzza", 
                       " huevo duro"],
        precio: 700,
    },    

]

//🔥 Utilizando métodos de array e iterando sobre el array de pizzas, 
//realizar las siguientes actividades, imprimiendo en consola:
//a)  Las pizzas que tengan un id impar.
console.log("a)");
const idimpar = pizzas.filter((pizza) => {
    return pizza.id % 2 === 1;
});

idimpar.forEach((pizza) => {
    console.log(`La pizza "${pizza.nombre}" tiene id impar`);
});

//b) ¿Hay alguna pizza que valga menos de $600?
console.log("b)");
const hayPizzasConPrecioMenorA = (precio) => {
    return pizzas.some((pizza) => { 
        return pizza.precio < precio;
    })
        ? console.log(`Hay pizzas cuyo precio es menor que $${precio}`)
        : console.log(`No Hay pizzas cuyo precio es menor que $${precio}`);
};

hayPizzasConPrecioMenorA(600);


//c) El nombre de cada pizza con su respectivo precio.
console.log("c)");
const pizzaPrecio = pizzas.map((pizza) => {
    return { ...pizza, precio: pizza.precio };
});

pizzaPrecio.forEach((pizza) => {
    console.log(`La pizza "${pizza.nombre}" tiene un precio de $${pizza.precio}`);
});

//d) Todos los ingredientes de cada pizza
console.log("d)");
const pizzaIngredientes = pizzas.map((pizza) => {
    return { ...pizza, ingredientes: pizza.ingredientes};
});
pizzaIngredientes.forEach(( pizza ) => {
      pizza.ingredientes.forEach(Element => {
        console.log(`la pizza "${pizza.nombre}" tiene como ingredientes:
         ${pizza.ingredientes}`);
    }); 
    });

