const json = { name: 'AA', age: 14 }
Object.keys(json).forEach(key => {
    console.info(key + ':', json[key])
})