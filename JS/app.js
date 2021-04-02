const changeThemebtn = document.querySelector('#change-theme-btn')

function changeTheme() {
  document.body.classList.toggle("dark-mode")
  let mode = changeThemebtn.textContent
  if (mode === "Light Mode") {changeThemebtn.textContent = "Dark Mode"}
  else {changeThemebtn.textContent = "Light Mode"}
}

changeThemebtn.setAttribute("onclick", "changeTheme()")