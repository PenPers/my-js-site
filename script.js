function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user && pass) {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("main-page").style.display = "block";
  } else {
    alert("لطفا نام کاربری و رمز عبور را وارد کنید!");
  }
}

// بخش نظرات
function addComment() {
  const name = document.getElementById("nameInput").value;
  const comment = document.getElementById("commentInput").value;
  const list = document.getElementById("comments-list");

  if (name && comment) {
    const div = document.createElement("div");
    div.className = "comment";
    div.innerHTML = `<strong>${name}:</strong> ${comment}`;
    list.appendChild(div);
    document.getElementById("nameInput").value = "";
    document.getElementById("commentInput").value = "";
  } else {
    alert("اسم و نظر را پر کنید!");
  }
}

// عروسک
const doll = document.getElementById("doll");
if (doll) {
  doll.addEventListener("click", () => {
    doll.classList.toggle("dancing");
  });
}
