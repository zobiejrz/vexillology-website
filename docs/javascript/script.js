function displayMetaData(state, row)
{

	var metaDataRowName = "row-" + row

	var i
	var metaRowStates = document.getElementsByClassName(metaDataRowName)

	metaRowStates[state].style.display = "block"
	// console.log(metaRowStates[state] + " is set to display:block")

}

function hideAllMetaData()
{

	var metaRows;

	for(var i = 0; i < totalMetaRows; i++)
	{
		var rowName = "row-" + i

		metaRows = document.getElementsByClassName(rowName)

		for(var j = 0; j < metaRows.length; j++)
		{
			metaRows[j].style.display = "none"
		}
	}

}