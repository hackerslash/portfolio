/**
 * Format a date string into a more readable format
 * @param {string} dateString - Date string in YYYY-MM-DD format
 * @returns {string} Formatted date string (e.g., "May 15, 2024")
 */
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
