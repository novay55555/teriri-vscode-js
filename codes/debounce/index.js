function debounce(func, wait, immediate) {
	let timeout;
	return function(...args) {
		clearTimeout(timeout);
		if (immediate && !timeout)
			func.apply(this, args);
		timeout = setTimeout(() => {
			func.apply(this, args);
		}, wait);
	};
}