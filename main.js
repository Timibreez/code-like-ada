
window.addEventListener("DOMContentLoaded", function(e){

    let dt = new Date().toDateString();
    document.getElementById('date').innerHTML = dt

    let scroll = document.querySelector("#scroll")
    let btt = document.querySelector("#btt")

    scroll.addEventListener("click", function(e){
        btt.scrollIntoView({behavior:"smooth", block:"end"})
    })
    
    btt.addEventListener("click", function(e){
        document.body.scrollIntoView({behavior:"smooth", block:"end"})
    })
})