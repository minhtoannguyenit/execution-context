let x = 10;
function foo() {
	let x = 20;
	bar();
}

function bar() {
	y  = 30;
	console.log(x);
}
console.log(foo);
foo();
console.log(x, y);