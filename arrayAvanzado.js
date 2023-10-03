// Ejercicio 1: Filtrar y Mapear
// Dado el siguiente array de objetos que representan productos:

const products = [
   { id: 1, name: "Camisa", price: 25 },
   { id: 2, name: "Pantalón", price: 40 },
   { id: 3, name: "Zapatos", price: 60 },
   { id: 4, name: "Bufanda", price: 15 },
   { id: 5, name: "Gorra", price: 10 },
];
// Crea una función llamada expensiveProducts que tome el array de productos y devuelva un nuevo array con solo los productos que tienen un precio mayor a 30 euros.
let expensiveProducts= products.filter(function(producto){  
    if (producto.price>30){
        return true;
    } else {
        return false;
    }
})
console.log(expensiveProducts);
// Luego, crea una función llamada productsName que tome el array de productos y devuelva un nuevo array con solo los nombres de los productos.
function productsName(product){
    let soloNombre=[];
    product.forEach(element => {
        soloNombre.push(element.name);
    });
    return soloNombre;
}
console.log(productsName(products));

// Ejercicio 2: Reducir y Calcular Totales
// Utilizando el array de productos del ejercicio anterior, crea una función llamada calculateTotal que calcule el precio total de todos los productos en el array.
function calculateTotal(productos){
    let resultado=0;
    productos.forEach(producto=> {
        resultado+=producto.price;
    })
    return resultado;
}
console.log(calculateTotal(products));

// Ejercicio 3: Encontrar y Modificar

// Dado el siguiente array de objetos que representan estudiantes:

const students = [
   { id: 1, name: "Carlos", age: 22 },
   { id: 2, name: "Ana", age: 20 },
   { id: 3, name: "Luis", age: 25 },
   { id: 4, name: "Elena", age: 18 },
   { id: 5, name: "María", age: 21 },
];
// Crea una función llamada findStudents que tome el array de estudiantes y un ID como argumento y devuelva el objeto del estudiante con ese ID.
function findStudents(estudiantes,id){
    let resultado = {};
    estudiantes.forEach(estudiante => {
        if(id==estudiante.id){
            resultado=estudiante;
        }
    })
    return resultado;
}
console.log(findStudents(students,3));
// Luego, crea una función llamada increaseAge que tome el array de estudiantes y aumente en 1 año la edad de cada estudiante.
let increaseAge= students.map(estudiante => estudiante.age+1);

console.log(increaseAge);

// Ejercicio 4: Programación Funcional Completa
// Dado el siguiente array de transacciones bancarias, donde cada objeto representa una transacción con un monto y un tipo (ingreso o egreso):

const transactions = [
   { type: "ingreso", amount: 1000 },
   { type: "egreso", amount: 500 },
   { type: "ingreso", amount: 200 },
   { type: "ingreso", amount: 300 },
   { type: "egreso", amount: 150 },
];
// Realiza las siguientes operaciones utilizando programación funcional:

// Utiliza map para crear un nuevo array con los montos de todas las transacciones, pero negativos en caso de egresos.
let montos = transactions.map(transaction=> {
    if(transaction.type=="egreso"){
        transaction.amount=-transaction.amount;
    }
    return transaction;
});
console.log(montos);
// Utiliza filter para obtener un nuevo array con todas las transacciones de tipo "ingreso".
let ingreso = transactions.filter(function(transaction){
    let ing="";
    if(transaction.type=="ingreso"){
        ing= transaction;
    }
    return ing;
})
console.log(ingreso);
// Utiliza reduce para calcular el saldo resultante después de todas las transacciones.
let totalSaldo = transactions.reduce((total,transaction)=> total+=transaction.amount);
console.log(totalSaldo);

// Ejercicio 5: Sets y Eliminación de Duplicados
// Dado el siguiente array de objetos, donde cada objeto representa una persona:
const persons = [
   { name: "Juan", age: 25 },
   { name: "Ana", age: 30 },
   { name: "Luis", age: 25 },
   { name: "María", age: 35 },
   { name: "Luis", age: 25 },
];
// Crea una función llamada removeDuplicates que tome el array de personas y devuelva un nuevo array con las personas únicas basadas en su nombre y edad.
function removeDuplicates(personas){
    return new Set(personas);
}
// Utiliza la función removeDuplicates para obtener el array sin personas duplicadas.
console.log(removeDuplicates(persons));
// Ejercicio 6: Manipulación Avanzada de Cadenas

// Dado el siguiente array de nombres completos:

const fullNames = [
   "John Smith",
   "Alice Johnson",
   "Michael Brown",
   "Emily Davis",
   "David Johnson",
];
// Crea una función llamada getInitials que tome el array de nombres completos y devuelva un nuevo array con las iniciales de cada nombre completo. Las iniciales deben estar en mayúsculas y separadas por un punto. Por ejemplo, "John Smith" se convertiría en "J.S".
function getInitials(nombres){
    let iniciales=[];
    nombres.forEach(nombre=>{
        let ini="";
        for(let i=1;i<nombre.length;i++){
            if(nombre.charAt(i-1)==" "){
                ini=nombre.charAt(0)+"."+nombre.charAt(i);
            }
        }
        iniciales.push(ini);
    })
    return iniciales;
}
console.log(getInitials(fullNames));
// Luego, crea una función llamada getLongestName que tome el array de nombres completos y devuelva el nombre completo más largo en el array.
function getLongestName(nombres){
    let max=0;
    let resultado="";
    nombres.forEach(nombre=>{
        if(nombre.length>max){
            max=nombre.length
            resultado=nombre;
        }

    })
    return resultado;
}
console.log(getLongestName(fullNames));
// Finalmente, crea una función llamada findNamesStartingWith que tome el array de nombres completos y una letra como argumento, y devuelva un nuevo array con todos los nombres completos que comienzan con la letra proporcionada. Asegúrate de que la comparación sea insensible a mayúsculas/minúsculas.
function findNamesStartingWith(nombres,letra){
    let resultado=[];
    nombres.forEach(nombre=>{
        if(nombre.charAt(0)==letra.toUpperCase()){
            resultado.push(nombre);
        }
    })
    return resultado;
}
console.log(findNamesStartingWith(fullNames,"d"));
// Puedes combinar los conceptos de mapeo, filtrado y manipulación de cadenas para resolver este ejercicio.