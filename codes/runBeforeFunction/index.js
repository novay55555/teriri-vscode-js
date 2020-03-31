function runBeforeFunction(fn, beforeFns) {
	return function(...args) {
		beforeFns.forEach(beforeFn => beforeFn.apply(this, args));
		return fn.apply(this, args);
	};
}