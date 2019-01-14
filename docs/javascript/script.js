function displayMetaData(state, element)
{

	var metaRowStates = document.getElementsByClassName("row")

	metaRowStates[element].style.display = "block"


	// Apply triangle using state
}

function hideAllMetaData()
{

	var metaRows;

	metaRows = document.getElementsByClassName("row")

	for(var j = 0; j < metaRows.length; j++)
	{
		metaRows[j].style.display = "none"
	}

}