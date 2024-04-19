const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 0
});

export function formatCurrency(amount) {
    return CURRENCY_FORMATTER.format(amount);
}

const NUMBER_FORMATTER = new Intl.NumberFormat("en-US")

export function formatNumber(number) {
    return  NUMBER_FORMATTER.format(number);
}