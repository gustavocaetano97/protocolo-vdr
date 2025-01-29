/**
 * Utility functions for formatting data
 */

/**
 * Formats a price number to Brazilian Real currency
 * @param {number} value - The price value to format
 * @returns {string} - Formatted price string
 */
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

/**
 * Formats a number to include thousand separators
 * @param {number} value - The number to format
 * @returns {string} - Formatted number string
 */
export const formatNumber = (value) => {
  return new Intl.NumberFormat('pt-BR').format(value);
};