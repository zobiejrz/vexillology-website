function displayMetaData(element)
{
	var metaRows = document.getElementsByClassName("row")
	var currentElement = metaRows[element]

	currentElement.style.display = "block"
	currentElement.style.visibility = "visible"
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
			currentElement.style.visibilty = "none"	
		}
		displayMetaData(element)
	}
	else
	{
		for(var i = 0; i < metaRows.length; i++)
		{
			var currentElement = metaRows[i]
			currentElement.style.display = "none"	
			currentElement.style.visibility = "hidden"
		}
	}

}


$("#button").click(function() {
	$('.transform').toggleClass('transform-active');
  });