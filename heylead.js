
function large() {
    let menudiv = document.getElementById('menu-div');
    let cancel = document.getElementById('cancel');
    let links = document.getElementsByClassName('links')[0];
    let body = document.getElementById('body');
    links.classList.add('animated');
    links.style.display = "block";
    cancel.style.display = "block";
    menudiv.style.width = "100%";
    body.style.overflowY = "hidden";
}

function small() {
    let menudiv = document.getElementById('menu-div');
    let cancel = document.getElementById('cancel');
    let links = document.getElementsByClassName('links')[0];
    let body = document.getElementById('body');
    body.style.overflowY = "visible";
    links.style.display = "none";
    cancel.style.display = "none";
    menudiv.style.width = "0%";
}

let indexes=0;

function left() {
   
    
            indexes = indexes - 1;
            let sliders = document.getElementById('slider1');
            let a = sliders.children[parseInt(indexes)];
            a.scrollIntoView(true);
}

function right() {    
        
            indexes = indexes + 1;
            let sliders = document.getElementById('slider1');
            let a = sliders.children[parseInt(indexes)];
            a.scrollIntoView(true);
}


function scrollleft() {
    let blogcontent = document.getElementById('blog-content');
    blogcontent.scrollTo(0, 0);
}

function scrollright() {
    let blogcontent = document.getElementById('blog-content');
    blogcontent.scrollTo(1000, 0);
}
