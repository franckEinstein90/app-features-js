require('module-alias/register')

let verifyUser = function(user){
    let userList = ['jon', 'suzie', 'pat']
    return userList.includes(user)
}

const app = {}
require('@features').addFeatureSystem(app)

app.addComponent({ label: 'security' })
app.security.addFeature({
    label: 'verifyUser', 
    method: verifyUser
})

console.log(app.security.verifyUser('jon')) //true
console.log(app.security.verifyUser('linda')) //false
