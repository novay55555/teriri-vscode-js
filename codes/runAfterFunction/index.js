function runAfterFunction(fn, afterFns) {
	return function(...args) {
		const r = fn.apply(this, args);
		afterFns.forEach(afterFn => afterFn.apply(this, args));
		return r;
	};
}