$(document).ready( function(){
	$(".js-back").ready(function(){
		$(".icon-arrow-left-alt").hide();
	});

function printNews(){
	$("#nueva").append("Nuevas Recetas"); //Se crea función que en el parrafo muestre el texto indicado
}
printNews(); //Se llama a la función

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	renderActivities(activitiesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	//console.log('Recipes: ', recipesArray);
	recipesArray.forEach(function(e){
		// console.log (e); // Mostrando elementos
		if (e.highlighted == true){
			// console.log ("+1"); //Probando si pasa
			renderRecipe(e);
		} 
	})
}

/*
* Función que se encarga de pintar UNA 
recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/

function renderRecipe(recipe) {
    console.log('Voy a pintar la receta: ', recipe);
    $(".list-recipes").append("$('a').addClass('item-recipe').attr('href','#').text('hola');" + //<a class='item-recipe' href='#'>" +
                                      "<span class='attribution'>" +
                                        "<span class='title-recipe'>" + recipe.title + "</span>" +
                                        "<span class='metadata-recipe'>" +
                                              "<span class='author-recipe'>" + recipe.source.name + " </span>" +
                                              "<span class='bookmarks-recipe'>" +
                                                   "<span class='icon-bookmark'></span>" +
                                              "</span>" +
                                        "</span>" +
                                    "</span>" +
                                    "<img src='img/recipes/640x800/" + recipe.name + ".jpg'>" +
                                "</a>");
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {

		console.log('Activities: ', activitiesArray);
	
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


