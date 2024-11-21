/**
 * Formats a number into Kenyan Shillings currency format.
 * 
 * @param {number} amount - The amount to format.
 * @returns {string} - The formatted currency string (e.g., "Ksh 1,234").
 */
function formatCurrencyToKsh(amount) {
    if (isNaN(amount)) {
        throw new Error("Invalid input: amount must be a number");
    }
    
    // Convert the number to a string with thousand separators
    const formattedAmount = amount.toLocaleString("en-KE", {
        minimumFractionDigits: 0, // No decimals
        maximumFractionDigits: 0,
    });
    
    return `Ksh ${formattedAmount}`;
}

export default formatCurrencyToKsh;
