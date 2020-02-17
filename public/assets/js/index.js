$(document).ready(() => {
    $("#submit-btn").on("click", function (event) {
        event.preventDefault();

        if ($("#burger-input").val() === "") {
            console.log("nothing in here!")
            return;
        } else {

            let newBurger = {
                burger_name: $("#burger-input").val().trim(),
            }

            console.log(newBurger);

            $.ajax("/api/burger", {
                type: "POST",
                data: newBurger
            }).then(
                () => {
                    console.log("created new burger");
                    // Reload the page to get the updated list
                    location.reload();
                }
            )
        }
        // clear text field
        $("#burger-input").val("");
    });

    $(".devour-btn").on("click", function (event) {
        let id = $(this).data("id");

        $.ajax("/api/burger/" + id, {
            type: "PUT"
        }).then(() => {
            console.log("i devoured " + id);
            location.reload();
        })
    });

})