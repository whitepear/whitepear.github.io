function randomFaces(){function c(a,b){return Math.floor(Math.random()*(b-a+1))+a}for(var a=["ace_sprite","jack_sprite","diamonds_sprite","joker_sprite","king_sprite","queen_sprite","ace_sprite","jack_sprite","diamonds_sprite","joker_sprite","king_sprite","queen_sprite"],b=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"],d=0;d<b.length;d++){var e=c(0,a.length-1);$("#"+b[d]).css("background-image","url(img/"+a[e]+".png)"),a.splice(e,1)}}function modalToggle(){"hidden"===$("#overlay").css("visibility")?($("#overlay").css("visibility","visible").css("background","rgba(0, 0, 0, 0.5)"),$(".modal-window").addClass("modal-active")):($("#overlay").css("visibility","hidden").css("background","rgba(0, 0, 0, 0)"),$(".modal-window").removeClass("modal-active"))}$(".rec").click(function(){$(".rec").css("transform","rotateY(3600deg) rotateX(-90deg)"),setTimeout(function(){$(".rec").css("transform","rotateY(3600deg) rotateX(-90deg) translateY(-5000px)"),$(".card-row").css("display","block"),setTimeout(function(){$(".background-hidden").css("opacity","1"),setTimeout(function(){$(".card-row").addClass("card-zoom"),setTimeout(function(){$(".rec-container").hide()},300)},175)},1250)},5500)}),randomFaces();var bgValue=void 0,firstID=void 0,removed=[];$(".card").click(function(){$(".card").css("pointer-events","none"),$(this).addClass("flipped"),void 0!==bgValue&&$(this).find(".back-face").attr("id")!==firstID?(bgValue===$(this).find(".back-face").css("background-image")?(setTimeout(function(){$(".flipped").fadeOut(850)},600),setTimeout(function(){$(".flipped").find(".back-face").each(function(a,b){removed.push(b.id)}),$(".flipped").removeClass("flipped"),$(".card").css("pointer-events","auto"),12===removed.length&&modalToggle()},1550)):setTimeout(function(){$(".flipped").removeClass("flipped"),$(".card").css("pointer-events","auto")},900),bgValue=void 0):(bgValue=$(this).find(".back-face").css("background-image"),firstID=$(this).find(".back-face").attr("id"),setTimeout(function(){$(".card").css("pointer-events","auto")},500))}),$("#close-modal").click(modalToggle),$("#play-yes").click(function(){modalToggle(),randomFaces(),bgValue=void 0,firstID=void 0,removed=[],$(".card").fadeIn(750)}),$("#modal-dismiss").click(modalToggle),$("#play-no").click(modalToggle),$(".bird-card").click(function(){$(".bird-card").css("transform","rotateY(3600deg)"),$(".bird-card").css("transition-timing-function","cubic-bezier(.53,-0.36,.17,1.4)"),setTimeout(function(){$(".bird-card").css("transform","rotateY(0deg)"),$(".bird-card").css("transition-timing-function","cubic-bezier(.08,.16,.74,1.16)")},3e3)});