// all variables to use it
let main_app = document.getElementById("app");

let menu_btns = document.querySelectorAll(".menu_Home");
let big_side = document.querySelector(".Side_Slider");
let cover_on_body = document.querySelector(".cover_dark_mark");



// make active for sidebar when open and close on menu button
menu_btns.forEach(btn=> {
    btn.addEventListener("click", ()=> {
        big_side.classList.toggle("active");
        // when open the sidebar and prevent the scroll of body
        if (big_side.classList.contains("active")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        // if clicked on body while active, so remove the active class
        if (big_side.classList.contains("active")) {
            cover_on_body.addEventListener("click", ()=> {
                big_side.classList.remove("active");
                document.body.style.overflow = "unset";
            })
        }
    })
})


// add the settings for tooltip of bootstrap v(5.0.2)
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})