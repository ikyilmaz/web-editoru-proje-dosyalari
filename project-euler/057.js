const compute = () => {
	const LIMIT = 1000
	let ans = 0
	let numer = 0
    let denom = 1
    
    for (let i = 0; i < LIMIT; i++) {
        numer = denom
        denom = denom * 2 + numer

		// Now numer/denom is the i'th (0-based) continued fraction approximation of sqrt(2) - 1
		if ((numer + denom).toString().length > denom.toString().length) {
            ans += 1
        }
    }		
    
	return ans.toString()

}

console.log("Sonuç --> ", compute())