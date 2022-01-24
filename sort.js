function sortalpha(array)
{
	let array2 = array.sort();
	let array3 = [];
	for(let i = 0 ; i<array2.length ; i++)
	{
		if(array2[i]!=null || array2[i]!="#")
		{
			array3.push(array2[i])
		}
	}

	

	console.log(array3);
}


//sort an array alphabetically so that "null" Or "#" values always come last
let theArray = [null,"a","b",null,"d","#","+",3];

sortalpha(theArray);