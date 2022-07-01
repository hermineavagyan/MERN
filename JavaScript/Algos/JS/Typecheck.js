function typeCheck(value) {
    if (
        typeof value === "object" || 
        typeof value === "boolean" || 
        typeof value === "number" || 
        typeof value === "bigint" || 
        typeof value === "string" || 
        typeof value === "function"
        )
        return true
    else
        return "undefined"
}

console.log(typeCheck(42))
console.log(typeCheck("false"))
console.log(typeCheck(true))
console.log(typeCheck(3.14))
console.log(typeCheck(""))