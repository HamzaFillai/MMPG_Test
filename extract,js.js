function extract(Artisan){
	let array = Artisan.split(' ');
	let array2 = [];
	for(let i = 0 ; i<array.length ; i++)
	{
		if(array[i].length>=4)
		{
			array2.push(array[i]);
		}
	}

	console.log(array2);
}










let str = “Artisan is the command-line interface included with Laravel. It provides a number of helpful commands that can assist you while you build 
your application. To view a list of all available Artisan commands, you may use the list command:”;
check for the most frequent strings in the string 