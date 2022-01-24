function duplicate(str)
{
	let array = str.split(' ');
	let c= 0;
	let count = 0;
	for(let i = 0;i<array.length ; i++)
	{	
		for(let j = 0;i<array.length ; j++)
		{	
			if(array[i]==array[j])
			{
				c++;
			}
		}
	}

	console.log(c);
}



let str = "Artisan is the command-line interface included with Laravel. It provides a number of helpful commands that can assist you while you build your application. To view a list of all available Artisan commands, you may use the list command";
duplicate(str)