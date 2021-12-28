let click = document.getElementById("togle");
let dropmenu = document.getElementById("menu")
let menu = document.querySelectorAll("#menu li a")
let menuarray = Array.from(menu)

menuarray.forEach((ele) => {
    ele.addEventListener("click" , function(e){
        menuarray.forEach((ele) => {
            ele.classList.remove("active")
        });
        e.currentTarget.classList.add("active")
    }
    )
}
)

click.addEventListener("click" , function(){
    if(dropmenu.style.display == "none"){
    dropmenu.style.display = "block"
    }else{
        dropmenu.style.display = "none"
    }
})

