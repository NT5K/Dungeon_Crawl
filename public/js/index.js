/*  NO MORE ON CLICK EVENTS, THERE IS A IF STATEMENT IN INDEX.EJS THAT CHECKS IF THERE
 IS A query_option ON THE DATABASE. IF NOT NULL IT DOES THE QUERY 

const currentURL = window.location.origin

//===================================================
  // button click for when you purchase cake from lady
  // change cake state to true
//===================================================

$('#5').on("click", (event) => {
    event.preventDefault()
    $.ajax("/gold/subtract/500", {
        type: "get" 
    }).then(() => {
        $.ajax("/cake/true", {
            type: "get"
        })
    }).then(() => {
        // redirect to next page
        location.href = currentURL + "/game/level/5"
    })
})

//==================================================
  // button click for answering riddle incorrectly
  // lose ten health 
//=================================================

$('#7,#71,#72').on("click", (event) => {
    event.preventDefault()
    $.ajax("/health/subtract", {
        type: "get"
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
        type: "get"
    }).then(() => {
        // redirect to next page
        location.href = currentURL + "/game/level/8"
    })
})

//==================================================
  // button click giving cake to troll
//=================================================

$('#11').on("click", (event) => {
    event.preventDefault()
    $.ajax("/cake/false", {
        type: "get"
    }).then(() => {
        //redirect to next page
        location.href = currentURL + "/game/level/11"
    })
})

//==================================================
  // button click adding torch to inventory
//=================================================
"/torch/true/health/subtract"
$('#17').on("click", (event) => {
    event.preventDefault()
    $.ajax("/torch/true", {
        type: "get"
    }).then(() => {
        $.ajax("/health/subtract", {
            type: "get"
        })
    }).then(() => {
        //redirect to next page
        location.href = currentURL + "/game/level/17"
    })
})

//==================================================
  // fighting troll attack
//=================================================

$('#8').on("click", (event) => {
    event.preventDefault()
    $.ajax("/cake/true", {
        type: "get"
    }).then(() => {
        // redirect to next page
        location.href = currentURL + "/game/level/8"
    })
})

//==================================================
  // make it to the dungeon, redirect to gamewin.ejs
//=================================================

//==================================================
  // if you continue to talk to the old man                           !!!!!!
//=================================================

$('#22').on("click", (event) => {
    event.preventDefault()
    $.ajax("/subtract/gold/250", {
        type: "get",
    }).then(() => {

        // redirect to next page
        location.href = currentURL + "/game/level/22"
    })
})
    */