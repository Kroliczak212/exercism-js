/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime) {
  if (remainingTime == 0) {
    return 'Lasagna is done.'
  }else if (remainingTime == undefined) {
    return 'You forgot to set the timer.'
  }else{
    return 'Not done, please wait.'
  }
}
export function preparationTime (layers, time) {
  if (time == undefined) {
    time = 2
  }
  return layers.length * time ?? 2
}
export function quantities (layers) {
  const obj = {
    noodles: 0,
    sauce: 0.0
  }
 for (let x = 0; x < layers.length; x++) {
   if (layers[x] == 'noodles') {
     obj.noodles = obj.noodles + 50
   }else if (layers[x] == 'sauce') {
     obj.sauce += 0.2
   }
 }
  return obj
}
export function addSecretIngredient  (friendsList , myList ) {
  let items = friendsList.length
  myList.push(friendsList[items-1])
}
export function scaleRecipe(recipe, portions = 1) {
  const factor = portions / 2;
  
  return Object.fromEntries(
    Object.entries(recipe).map(([key, value]) => [
      key, 
      typeof value === 'number' ? value * factor : value
    ])
  );
}