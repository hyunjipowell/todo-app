const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
const userPage = document.querySelector("#userPage");
const getUsername = document.querySelector("#username");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginClick(e){
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintUsername(username);
     
}

function paintUsername(username){
    getUsername.innerText = `Hi ${username} !`;
    userPage.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', loginClick); 

}else{
    paintUsername(saveUsername);
}