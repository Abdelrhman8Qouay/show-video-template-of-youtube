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

// add did class for the paragraph of main description
let description_channel = document.querySelector(".description_channel");
description_channel.onclick = () => {
    let para = document.getElementById("desc-para");
    para.classList.toggle("did");
    // if has the class change the text of button
    if (para.classList.contains("did")){
        moreLessBtn.textContent = "show less";
        moreLessBtn.title = "show less";
    }else {
        moreLessBtn.textContent = "show more";
        moreLessBtn.title = "show more";
    }
}

// add classes for like and dislike buttons of main video
let likeBtn = document.getElementById("liked-btn");
let disLikeBtn = document.getElementById("unliked-btn");
// like button
likeBtn.onclick = () => {
    if (likeBtn.dataset.liked == "no") {
        likeBtn.dataset.liked = "yes";
        likeBtn.children[0].classList.add("material-icons");
        likeBtn.children[0].classList.remove("material-symbols-outlined");
        if (disLikeBtn.dataset.unliked == "yes") {
            disLikeBtn.dataset.unliked = "no";
            disLikeBtn.children[0].classList.remove("material-icons");
            disLikeBtn.children[0].classList.add("material-symbols-outlined");
        }
    }else{
        likeBtn.dataset.liked = "no";
        likeBtn.children[0].classList.add("material-symbols-outlined");
        likeBtn.children[0].classList.remove("material-icons");
    }
}
// dislike button
disLikeBtn.onclick = () => {
    if (disLikeBtn.dataset.unliked == "no") {
        disLikeBtn.dataset.unliked = "yes";
        disLikeBtn.children[0].classList.add("material-icons");
        disLikeBtn.children[0].classList.remove("material-symbols-outlined");
        if (likeBtn.dataset.liked == "yes") {
            likeBtn.dataset.liked = "no";
            likeBtn.children[0].classList.remove("material-icons");
            likeBtn.children[0].classList.add("material-symbols-outlined");
        }
    }else{
        disLikeBtn.dataset.unliked = "no";
        disLikeBtn.children[0].classList.add("material-symbols-outlined");
        disLikeBtn.children[0].classList.remove("material-icons");
    }
}

// add class active for sort button
let sortBtn = document.getElementById("sorting");
sortBtn.onclick = () => {
    sortBtn.classList.toggle("active");
}

// add class active for report button of comments
let report_comments = document.querySelectorAll(".comments_area .done_comment .report_comment");
report_comments.forEach(rep_comment => {
    rep_comment.addEventListener("click", ()=> {
        rep_comment.classList.toggle("active");
    })
})

// add class active for report button of comments
let setting_sug_videos = document.querySelectorAll(".suggested_videos .card_item .get-setting");
setting_sug_videos.forEach(setting_sug => {
    setting_sug.addEventListener("click", ()=> {
        setting_sug.classList.toggle("active");
    })
})


// add classes for like and dislike buttons of main video
let likeComments = document.querySelectorAll(".done_comment .info-comment .res_content .liked-comment");
let disLikeComments = document.querySelectorAll(".done_comment .info-comment .res_content .unliked-comment");
// like buttons
likeComments.forEach(like => like.onclick = () => {
    disLikeComments.forEach(dislike => {
        if (like.dataset.liked == "no") {
            like.dataset.liked = "yes";
            like.children[0].classList.add("material-icons");
            like.children[0].classList.remove("material-symbols-outlined");
            if (dislike.dataset.unliked == "yes") {
                dislike.dataset.unliked = "no";
                dislike.children[0].classList.remove("material-icons");
                dislike.children[0].classList.add("material-symbols-outlined");
            }
        }else{
            like.dataset.liked = "no";
            like.children[0].classList.add("material-symbols-outlined");
            like.children[0].classList.remove("material-icons");
        }
    })
})

// dislike buttons
disLikeComments.forEach(dislike => dislike.onclick = () => {
    likeComments.forEach(like => {
        if (dislike.dataset.unliked == "no") {
            dislike.dataset.unliked = "yes";
            dislike.children[0].classList.add("material-icons");
            dislike.children[0].classList.remove("material-symbols-outlined");
            if (like.dataset.liked == "yes") {
                like.dataset.liked = "no";
                like.children[0].classList.remove("material-icons");
                like.children[0].classList.add("material-symbols-outlined");
            }
        }else{
            dislike.dataset.unliked = "no";
            dislike.children[0].classList.add("material-symbols-outlined");
            dislike.children[0].classList.remove("material-icons");
        }
    })
})