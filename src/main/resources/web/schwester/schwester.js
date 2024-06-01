let nextPrime = function(n) {
    for( let i=2; i<n/2; i++ ) {
        if( n % i === 0 ) {
            return nextPrime(i);
        }
    }
    return n;
}

let factor = function(n) {
    let factors = [];
    do {
        let f = nextPrime(n);
        factors.push(f);
        n = n/f;
    } while( n !== 1 );
    return factors;
}

// set up todays public key
let hauptmodul = document.getElementById("hauptmodul");
hauptmodul.value = 632579;
let exponent = document.getElementById("exponent");
exponent.value = 5;

// set up live encoding
let message = document.getElementById("message");
let code = document.getElementById("code");
message.addEventListener( "keyup", () => {
    let c = message.value.toUpperCase();
    c = c.replaceAll( " ", "*" );
    // split to four-character blocks
    let codes = [];
    for( let i=1; i<=Math.ceil( c.length / 4 ); i++ ) {
        let word = [];
        for( let j=(i-1)*4; j<(i-1)*4+4; j++ ) {
            let codePoint = c.codePointAt(j) - 64;
            if( codePoint >= 1  &&  codePoint <= 26 ) {
                word.push(codePoint);
            } else {
                word.push(0);
            }
        }
        let n = word[0]*27*27*27 + word[1]*27*27 + word[2]*27 + word[3];
        let hm = hauptmodul.value, ex = exponent.value;
        if( isFinite(hm)  &&  isFinite(ex) ) {
            codes.push( BigInt(n) ** BigInt(ex) % BigInt(hm) );
        }
    }
    code.value = codes.join("\n");
});