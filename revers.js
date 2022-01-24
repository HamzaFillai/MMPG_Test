function reverse(Artisan){
	let array = Artisan.split(' ');
	//console.log(array);
	let T = [];
	for(let i = 0; i<array.length ; i++)
	{
		T[i] = array[array.length-i-1];
	}

	console.log(T.join(' '));
}


let str = "Artisan is the command-line interface included with Laravel. It provides a number of helpful commands that can assist you while you build your application. To view a list of all available Artisan commands, you may use the list command";

console.log(reverse(str));