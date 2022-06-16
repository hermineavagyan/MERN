function isMonotonic(array) {
  let first = array[0]
  let last = array[array.length-1]
  if (array.length === 1 || array.length === 0){
    return true;
  }
  if (first === last)
  for (let i = 0; i < array.length-1; i++){
    if (array[i+1] !== array[i]) {
      return false}
  }
  else if (first < last)
  for (let i = 0; i < array.length-1; i++){
    if (array[i] > array[i+1]) {
      return false}
  }
  // if (first > last)
  else 
  for (let i = 0; i < array.length-1; i++){
    if (array[i+1] > array[i]) {
      return false}
  }
  return true
}
