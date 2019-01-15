function displayMetaData(element)
{
	var metaRows = document.getElementsByClassName("row")
	var currentElement = metaRows[element]

	currentElement.style.display = "block"
}

function toggleMetaData(element)
{
	var metaRows = document.getElementsByClassName("row")

	if (metaRows[element].style.display != "block")
	{
		for(var i = 0; i < metaRows.length; i++)
		{
			var currentElement = metaRows[i]
			currentElement.style.display = "none"	
		}
		displayMetaData(element)
	}
	else
	{
		for(var i = 0; i < metaRows.length; i++)
		{
			var currentElement = metaRows[i]
			currentElement.style.display = "none"	
		}
	}

}