const currentURL = window.location.origin;


$('#5').on("click", (event) => {
    event.preventDefault()

    alert('clicked button with id of 5')
    $.ajax("/subtracthealth", {
        type: "PUT"
        
    }).then(() => {
        // redirect to success page
        location.href = currentURL + "/game/5";
    });
    
})