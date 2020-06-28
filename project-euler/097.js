const compute = () => {
    const MOD = 10**10
    const pow =  Math.pow(2, 7830457)
    const ans = (28433 * pow + 1) % MOD

    return ans.toString()
}

console.log("Sonuc --> ", compute())

