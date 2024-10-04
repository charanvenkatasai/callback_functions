function operation(n1,n2,callback){
    callback(n1,n2)
}
function addition (n1,n2){
    console.log(n1+n2)
}
const sub=(n1,n2) => {
    console.log(n1-n2)
}
const mul=(n1,n2) => {
    console.log(n1*n2)
}
const div=(n1,n2) => {
    console.log(n1/n2)
}
const mod=(n1,n2) => {
    console.log(n1%n2)
}
operation(7,2,addition)

operation(5,1,sub)

operation(7,3,mul)

operation(5,2,div)

operation(5,2,mod)