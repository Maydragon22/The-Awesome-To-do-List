$(document).ready(function() {
  $("#list-items").html(localStorage.getItem("listItems"));

  $(".add-items").submit(function(event) {
    event.preventDefault();

    const item = $("#todo-list-item").val();

    if (item) {
      $("#list-items").append(
        "<li><input class='checkbox' type='checkbox'/>" +
          item +
          "<a class='remove'>x</a><hr></li>"
      );

      localStorage.setItem("listItems", $("#list-items").html());

      $("#todo-list-item").val("");
    }
  });

  $(document).on("change", ".checkbox", function() {
    if ($(this).attr("checked")) {
      $(this).removeAttr("checked");
    } else {
      $(this).attr("checked", "checked");
    }

    $(this)
      .parent()
      .toggleClass("completed");

    localStorage.setItem("listItems", $("#list-items").html());
  });

  $(document).on("click", ".remove", function() {
    $(this)
      .parent()
      .remove();

    localStorage.setItem("listItems", $("#list-items").html());
  });
});


function popUp() {
  const message=["You are loved <3","Everything will be alright!","Do your best! That is all that matters","You are beautiful <3","You can do it!","It does not hurt to try and ask","Be your awesome self <3","There is someone who cares about you","You are important","Your life belongs only to you","You are the sweet cupcake <3","It is oki to be lazy sometimes <3","Treat yourself!","It is good to take breaks to recharge your energy","There is good and bad in everything, can you find the good side?","Take a walk in nature, it helps to clear up thoughts","Do not forget to drink water!","Listen to your body and take care of it <3","Ur a qt <3","If you feel stuck with something, do something else then come back to it later","A nice cup of tea <3","Did you know baby cheetah sound like baby chicks?","Cute animals are here to cheer you up!","Pikas are adorable <3","You are good enough","Stars are pretty +","Remember to appreciate and be grateful for things you have and had","I am happy that you exist","Do things you love","Do not be someone else","Harness the power that is your mind!","Pat, pat, pat on the back!","Headpats~","Learn from the past, predict the future, live in the present.","You do great!","You are not alone","I care","Nyam-nyam~","Animals are cute, humans are animals, too thus we are cute~!","Emotions are important just like food but eating too much sweet buns is no good ~ > <","Do not be too serious","There is no science without fun, there is no fun without science","Gulp, gulp, gulp~!","Communicate on your own, best way"];
  
const a = Math.floor(Math.random() * message.length);

window.alert(message[a]);
};