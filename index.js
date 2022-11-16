function rentPrice(days) {
	return days <= 3 ? days * 25 : days >= 4 && days <= 7 ? (days - 3) * 20 + (3 * 25) : (days - 7) * 15 + 3 * 25 + 4 * 20;
}

module.exports = rentPrice;