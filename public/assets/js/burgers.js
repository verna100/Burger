var newBurger;
var newDevour;

    $("#text-enter-button").on("click", function(event) {
      event.preventDefault();
  
        newBurger = {
        burger_name: $("#new").val().trim()
     
      } 
    // $(".change-devour").on("click", function(event) {
    //   var id = $(this).data("id");
    //   newDevour = $(this).data("newdevour");
  
    //   newDevourState = {
    //     devoured: newDevour
    //   };

    //   $.ajax("/burgers/update" + id, {
    //     type: "PUT",
    //     data: newDevourState
    //   }).then(
    //     function() {
    //       console.log("changed devour status to", newDevour);
    //       location.reload();
    //     }
    //   );
    // });
    // console.log(newBurger);

    $.ajax("/burgers/create", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");
        // location.reload();
      }
    );
  });
  
// };