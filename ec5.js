let x  = 1;
let y = 3;
let z = 5;
function foo(a, y) {
	x = x + 5;
	y = 15;
	console.log(x, y);
	bar(x, y);
	function bazz(arg1, arg2, arg3) {
		x = arg1 + 10;
		y = arg2 + 10;
		z = 10 + z;
		console.log(x, y, z, arg3);
	}
	let f = () => {console.log(x, y, z)}
	bazz(x, y, f, 10);
	console.log(x, y, z);
}
function bar(arg1, arg2, arg3) {
	console.log(arg1, arg2, arg3);
	x = arg1 + 10;
	y = arg2 + 20;
	console.log(x, y, arg3);
}

foo();
console.log(x, y, z);
