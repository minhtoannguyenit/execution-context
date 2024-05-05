let x = 3;
let y = 5;
function foo() {
	let x =10;
	x = y + 10;
	console.log(x, y);
	bar(x, y);
	function baz(arg1, arg2, arg3) {
		console.log(arg1, arg2, arg3);
		x = 10 + y;
		console.log(x, y);
	}
	baz(x,y);
}

function bar(arg1, arg2, arg3) {
	console.log(arg1, arg2, arg3);
	x = 50 + x;
	y = 10 + y;
	console.log(x, y);
}
foo();
console.log(x, y);
