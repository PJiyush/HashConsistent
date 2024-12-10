export function hashFunc(value: string | number){
    value = value.toString()
    let hashInit = 0;
    let primeNum = 113;
    for(let i=0; i<value.length; i++){
        hashInit += value.charCodeAt(i) * Math.pow(primeNum, value.length-i-1)
        hashInit = hashInit % 100
    }
    return hashInit;
}