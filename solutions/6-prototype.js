// BEGIN
function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function() {
  return this.value;
};

Money.prototype.getCurrency = function() {
  return this.currency;
};

Money.prototype.exchangeTo = function(currency) {
  const conversionRates = {
    usd: { eur: 0.7 },
    eur: { usd: 1.2 }
  };
  
  let newValue = this.value;
  
  if (this.currency !== currency) {
    newValue = this.value * conversionRates[this.currency][currency];
  }
  
  return new Money(newValue, currency);
};

Money.prototype.add = function(money) {
  let moneyInCurrentCurrency = money;
  
  if (money.getCurrency() !== this.currency) {
    moneyInCurrentCurrency = money.exchangeTo(this.currency);
  }
  
  const newValue = this.value + moneyInCurrentCurrency.getValue();
  return new Money(newValue, this.currency);
};

Money.prototype.format = function() {
  const currencySymbols = {
    usd: 'USD',
    eur: 'EUR'
  };
  
  return this.value.toLocaleString(undefined, {
    style: 'currency',
    currency: currencySymbols[this.currency]
  });
};

export default Money;
// END
