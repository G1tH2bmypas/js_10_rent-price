function rentPrice(days) {
	if (days <= 3) {
		days = days * 25;
	} else if (days >= 4 && days <= 7) {
		days = (days - 3) * 20 + (3 * 25);
	} else {
		days = (days - 7) * 15 + 3 * 25 + 4 * 20;
	}
	return days;
}

module.exports = rentPrice;