const ourItemDiv = document.getElementsByClassName('item');
const iconOpen = document.getElementsByClassName('iconOpen');
const iconClose = document.getElementsByClassName('iconClose');

// console.log(ourItemDiv)

for (let i = 0; i < ourItemDiv.length; i++) {

    iconClose[i].style.display = "none";
    ourItemDiv[i].addEventListener('click', () => {
      
        const result = ourItemDiv[i].classList.toggle('active');
        ourItemDiv[i].style.transition="2s ease";

        if (result) {
            iconClose[i].style.display = "block";
            iconOpen[i].style.display = "none";
        }else{
            iconClose[i].style.display = "none";
            iconOpen[i].style.display = "block";
        }
    })
}