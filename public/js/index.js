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