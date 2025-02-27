let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = "";
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == "C") {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == "=") {
            try{
            screen.value = eval(screenValue);
            }
            catch(err){
            //    let custom_msg = err.message="Enter Valid Expression";
            //     alert("Not Executed "+custom_msg);
            screen.value="Enter valid expression";
            setTimeout(()=>{
              screen.value="";
            },2000)
            }
        }
        else if (buttonText == "del") {
            screenValue = screen.value.slice(0, (screen.value.length)-1);
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
