const ehPrimo = (n: number) => {
    if (n <= 1) return false;

    let i = 2;

    while (i < n) {
        if (n % i === 0) return false;
        i++;
    }
    
    return true;
}