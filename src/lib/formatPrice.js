export function formatPrice(value, currency = "PKR") {
  return `${currency} ${Number(value || 0).toLocaleString("en-PK")}`;
}
