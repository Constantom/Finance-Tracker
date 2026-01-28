function formatCurrency(amount) {
  const symbol = localStorage.getItem("currency") || "₦";
  return `${symbol}${Number(amount).toLocaleString()}`;
}
  