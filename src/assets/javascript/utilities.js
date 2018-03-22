const getNumberRange = (min, max, storage) => {
  if (storage.length > (max - min)) {
    return storage.map(num => num.toString())
  }
  let newNumber = min + storage.length
  storage.push(newNumber)
  return getNumberRange(min, max, storage)
}

export default getNumberRange
