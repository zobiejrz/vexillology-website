var totalMetaRows = 0

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
	var i;

	// One Variable for each row
	var metaRowStates0 = document.getElementsByClassName("row-0");
	var metaRowStates1 = document.getElementsByClassName("row-1");
	var metaRowStates2 = document.getElementsByClassName("row-2");


	// One loop for each variable
	for(i=0; i < metaRowStates0.length; i++)
	{

		metaRowStates0[i].style.display = "none"

	}

	for(i=0; i < metaRowStates1.length; i++)
	{

		metaRowStates1[i].style.display = "none"
		
	}

	for(i=0; i < metaRowStates2.length; i++)
	{

		metaRowStates2[i].style.display = "none"
		
	}

}