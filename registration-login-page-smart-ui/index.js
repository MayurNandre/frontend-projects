const user_container = document.querySelector('.user-container');
const reg_btn = document.querySelector('.registration-btn');
const login_btn =document.querySelector('.login-btn');


reg_btn.addEventListener('click',()=>{
    user_container.classList.remove('login-section-display');
});


login_btn.addEventListener('click',()=>{
    user_container.classList.remove('login-section-display');
    user_container.classList.add('login-section-display');
});