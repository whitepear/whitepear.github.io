function keyUpSearch(){$.getJSON(searchURL,function(a){$(".suggestContainer").empty();for(var b=a.query.search,c=0;5>c;c++)$(".suggestContainer").append('<p class="suggest">'+b[c].title+"</p>")})}function enterSearch(){$(".resultsContainer").css("opacity","0"),$(".resultsContainer").empty(),$.getJSON(searchURL,function(a){var b=a.query.search;$.each(b,function(a){$(".resultsContainer").append('<a href="https://en.wikipedia.org/wiki/'+b[a].title+'" target="_blank"><div class="returnedResult"><p class="returnedTitle">'+b[a].title+'</p><p class="returnedSnippet">'+b[a].snippet+"...</p></div></a>")}),$(".resultsContainer").css("opacity","1").css("height","auto"),$(".suggestContainer").empty()})}$(".searchBar").val(""),$(".searchBar").disabled=!0;var expanded=!1,movedTop=!1,searchTimeout;$("#searchStart").click(function(){expanded===!1?($(".searchBar").disabled=!1,expanded=!0,$("#randomArticle").fadeOut(100),$(".searchBar").css("width","80%").css("padding-left","2.5%"),$("#searchStart").css("border-top-left-radius","0px").css("border-bottom-left-radius","0px").html('<i class="fa fa-times"></i>'),$(".searchBar").focus()):($(".searchBar").disabled=!0,expanded=!1,movedTop=!1,$("#randomArticle").fadeIn(800),$(".searchBar").val(""),$(".suggestContainer p").fadeOut(50),$(".resultsContainer").css("opacity","0").css("transform","translateY(150px)"),$(".resultsContainer a").fadeOut(500),$(".searchControls").css("transform","translateY(0px) scale(1)"),$(".searchBar").css("width","0%").css("padding-left","0%"),$("#searchStart").css("border-top-left-radius","5px").css("border-bottom-left-radius","5px").html('<i class="fa fa-search"></i>'))});var baseURL="https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&callback=?&srsearch=",searchURL;$(".searchBar").keypress(function(a){13==a.which&&$(".searchBar").val().length>0&&(searchURL=baseURL+$(".searchBar").val(),$(".searchControls").css("transform","translateY(-150px) scale(0.9)"),movedTop=!0,enterSearch(),$(".resultsContainer").css("transform","translateY(-150px)"))}),$(".searchBar").keyup(function(a){13!=a.which&&(searchURL=baseURL+$(".searchBar").val(),clearTimeout(searchTimeout),searchTimeout=setTimeout(function(){keyUpSearch(),1==movedTop&&($(".suggestContainer").css("width","82.5%").css("left","4%"),$(".resultsContainer").css("transform","translateY(50px)"))},200))}),$(document).on("click",".suggest",function(){$(".searchBar").val($(this).text()),$(".suggestContainer").empty(),searchURL=baseURL+$(".searchBar").val(),movedTop=!0,$(".searchControls").css("transform","translateY(-150px) scale(0.9)"),enterSearch(),$(".resultsContainer").css("transform","translateY(-150px)")});