const petnames = [
  {name: 'Bear', genus: 'Canis', friendly: 'very'},
  {name: 'Meownzie', genus: 'Felis', friendly: 'mostly'},
  {name: 'Nemo', genus: 'Anemonefishes', friendly: 'very'},
  {name: 'Bruce', genus: 'Isurus', friendly: 'doubtful'},
  {name: 'Yogi', genus: 'Ursus', friendly: 'not when hungry'},
  {name: 'Jerry', genus: 'Mus', friendly: 'appears top be'},
  {name: 'Tom', genus: 'Felis', friendly: 'to lazy to be'},
  {name: 'Scooby', genus: 'canine', friendly: 'Always'}
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, petnames)
    // deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export {
  find
}