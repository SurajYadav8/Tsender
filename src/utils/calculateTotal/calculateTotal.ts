function calculateTotal(amounts: string): number {
    const amountArray = amounts
       .split(/[\n,]+/)
       .map(amt => amt.trim())
       .filter(amt => amt !== '')
       .map(amt => parseFloat);

    // Sum all valid amount
    return amountArray
        .filter(num => !isNaN(num))
        .reduce((sum, num) => sum + num, 0)
}