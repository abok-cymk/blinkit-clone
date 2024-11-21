/**
 * Formats a number into Kenyan Shillings currency format.
 * Handles edge cases like negative values and zero.
 * 
 * @param {number} amount - The amount to format.
 * @returns {string} - The formatted currency string (e.g., "Ksh 1,234" or "Ksh -1,234").
 */
function formatCurrencyToKsh(amount) {
    if (typeof amount !== "number" || isNaN(amount)) {
        throw new Error("Invalid input: amount must be a valid number");
    }

    if (amount === 0) {
        return "Ksh 0"; // Special case for zero
    }

    // Determine if the value is negative
    const isNegative = amount < 0;

    // Convert the absolute value of the number to a formatted string
    const formattedAmount = Math.abs(amount).toLocaleString("en-KE", {
        minimumFractionDigits: 0, // No decimals
        maximumFractionDigits: 0,
    });

    // Return the result with a "Ksh" prefix, adding a negative sign if needed
    return isNegative ? `Ksh -${formattedAmount}` : `Ksh ${formattedAmount}`;
}

export default formatCurrencyToKsh;