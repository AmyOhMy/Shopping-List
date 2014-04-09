//This is what the li will look like:
//

$(document).ready(function() {



//This stops the page from refreshing on Submit
$("form").submit(function(e){
        e.preventDefault();
    });

function updateItemStatus(){
	var cbId = this.id.replace("cb_", "");//this is refering to a click on the checkbox input
	var itemText= document.getElementById("item_" + cbId);

	if (this.checked){
	itemText.style.textDecoration = "line-through";
	itemText.style.colof = "c00";
	itemText.style.fontWeight = "800";//all this styling isn't a good idea in js. Better to create .clicked in css.
	} else { itemText.style.textDecoration = "none"; 
		}
}


function addNewItem(list,itemText){
	totalItems++;

	var listItem = document.createElement("li");//you call the element in a string.
	var checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	checkBox.id = "cb_" + totalItems;
	checkBox.onclick = updateItemStatus;

	var span = document.createElement("span");
	span.id = "item_" + totalItems;
	span.innerText = itemText;

	listItem.appendChild(checkBox);
	listItem.appendChild(span);

	list.appendChild(listItem);// take the list and appendChild and pass it the listItem li created above. 

}

var totalItems = 0;
var inItemText = document.getElementById("inItemText");
	inItemText.focus();
	inItemText.onkeyup = function(event) {

	//Event.which (13) -> ENTER
	//only proceed if key pressed is ENTER key	
	if (event.which == 13) {
	var itemText = inItemText.value;
		} else { 
			return false;
			}

	//if(itemText == "" || " ") {
	//	return false;
	//}  <-- The code to not allow space or empty field is breaking this for some reason. Probably because there is no else.
		

	addNewItem(document.getElementById("ShoppingList"),itemText);//only put the name of the function with no (). That would call the return value of that funct.
	inItemText.focus(); //focuses just incase it's not focues
	inItemText.select();//then selects all the text so that you can just keep writing.
	};

});

