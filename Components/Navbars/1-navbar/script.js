let hamburger = document.querySelector('.hamburger');

hamburger.onclick = function () {
 let navBar = document.querySelector('.nav-bar');

    navBar.classList.toggle('active');

    let line2 = document.getElementById('line2');
    line2.classList.toggle('close');
    let line1= document.getElementById('line1');
    line1.classList.toggle('close');
    let line3 = document.getElementById('line3');
    line3.classList.toggle('close');

    // hamburger.classList.toggle('');

   
}
