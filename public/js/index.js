const currentURL = window.location.origin;

//===================================================
  // button click for when you purchase cake from lady
  // change cake state to true
//===================================================
$('#5').on("click", (event) => {
    event.preventDefault()

    // alert('clicked button with id of 5')
    $.ajax("/gold/subtract", {
        type: "PUT" 
    }).then(() => {
        $.ajax("/cake/true", {
            type: "PUT"
        });
    }).then(() => {;
        // redirect to next page
        location.href = currentURL + "/game/level/5";
    })
})

$('.login-user').on("submit", (event) => {
    event.preventDefault()

    const newUser = {
        name: $("#name").val().trim(),
        password: $("#password").val().trim()
    }

    // alert('clicked button with id of 5')
    $.ajax("/login", {
        type: "get",
        data: newUser
    }).then(() => {
    
        // redirect to next page
        location.href = currentURL + "/game/level/1";
    })
})



