function forTest(n) {
    const arr = Array.from({length: n}, (_,i)=>i);
    let sum = 0;
    for(j=0; j<n; j++) {
        switch (i%2) {
            case 0:
                sum += i;
                break;
            case 1:
                sum -= i;
                break;
        }
    }
    return sum/n;
}
    
function forEachTest(n) {
    const arr = Array.from({length: n}, (_,i)=>i);
    let sum = 0;
    arr.forEach( (_,i)=>{
        switch (i%2) {
            case 0:
                sum += i;
                break;
            case 1:
                sum -= i;
                break;
        }
    });
    return sum/n;
}
   function forMapTest(n) {
    const arr = Array.from({length: n}, (_,i)=>i);
    let sum = 0;
    arr.map( (_,i)=>{
        switch (i%2) {
            case 0:
                sum += i;
                break;
            case 1:
                sum -= i;
                break;
        }
    });
    return sum/n;
} 
function main(n) {

    let forEff = 0;
    let forEachEff = 0;
    let forMapEff = 0;
    for(i=0;i<100;i++) {
        const t1 = performance.now();
        forTest(n);
        const t2 = performance.now();

        forEff += t2-t1;
    }

    for(i=0;i<100;i++) {
        const t1 = performance.now();
        forEachTest(n);
        const t2 = performance.now();

        forEachEff += t2-t1;
    }

    for(i=0;i<100;i++) {
        const t1 = performance.now();
        forMapTest(n);
        const t2 = performance.now();

        forMapEff += t2-t1;
    }

    console.log("repeat: " + n)
    console.log("forEff: " + forEff / 100);
    console.log("forEachEff: " + forEachEff / 100);
    console.log("forMapEff: " + forMapEff/100);
}

main(10000000)
