import groceriesList from "./9-groceries_list";

console.log(groceriesList());

console.log(groceriesList() instanceof Map)

const result = groceriesList().get('Apples')
console.log(result)
