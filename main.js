const obj = {
    name:'xyz'
}

function grettings(greet){
    return console.log(`${greet} ${this.name}` )
}

grettings.call(obj, 'hi')
grettings.apply(obj, ['hello'])
const tempFunc = grettings.bind(obj, 'hello')
tempFunc()