const currentURL = window.location.origin;

//===================================================
  // button click for when you purchase cake from lady
  // change cake state to true
//===================================================
$('#5').on("click", (event) => {
    event.preventDefault()
    $.ajax("/gold/subtract", {
        type: "get" 
    }).then(() => {
        $.ajax("/cake/true", {
            type: "get"
        });
    }).then(() => {;
        // redirect to next page
        location.href = currentURL + "/game/level/5";
    })
})


// $('.login-user').on("submit", (event) => {
//     event.preventDefault()

//     const newUser = {
//         name: $("#name").val().trim(),
//     }

//     // alert('clicked button with id of 5')
//     $.ajax("/login", {
//         type: "post",
//         data: newUser
//     }).then(() => {

//         // redirect to next page
//         location.href = currentURL + "/game/level/1";
//         // res.redirect('/addquantity/' + id + '/' + quantity)
//     })
// })

=======
//==================================================
  // button click for answering riddle incorrectly
  // lose ten health 
//=================================================
$('#7,#71,#72').on("click", (event) => {
    event.preventDefault()
    $.ajax("/health/subtract", {
        type: "PUT"
    }).then(() => {
        //redirect to next page
        location.href =  currentURL + "/game/level/7"
    })
})
//==================================================
  // button click for answering riddle correctly
//=================================================
$('#8').on("click", (event) => {
    event.preventDefault()
    $.ajax("/cake/true", {
        type: "PUT"
    }).then(() => {;
        // redirect to next page
        location.href = currentURL + "/game/level/8";
    })
})
//==================================================
  // button click giving cake to troll
//=================================================
$('#11').on("click", (event) => {
    event.preventDefault()
    $.ajax("/cake/false", {
        type: "PUT"
    }).then(() => {
        //redirect to next page
        location.href = currentURL + "/game/level/11"
    })
})
//==================================================
  // button click adding torch to inventory
//=================================================
$('#17').on("click", (event) => {
    event.preventDefault()
    $.ajax("/torch/true", {
        type: "PUT"
    }).then(() => {
        $.ajax("/health/subtract", {
            type: "PUT"
        })
    }).then(() => {
        //redirect to next page
        location.href = currentURL + "/game/level/17"
    })
})

