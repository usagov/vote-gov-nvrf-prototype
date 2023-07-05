let id = (id) => document.getElementById(id);
let user = id("loginUser"),
  pass = id("loginPass"),
  confirm = id("loginConfirm"),
  error = id("loginError"),
  dialog = id("loginDialog"),
  container = id("protoContainer");

const loginCred = {
  user: 'dm90ZS1nb3YtcHJvdG90eXBl',
  pass: 'T0ZGSUNJQUwtdm90ZS1nb3Y='
};

dialog.showModal();

confirm.addEventListener("click", (event) => {
  event.preventDefault();
  validate();
});

const validate = () => {
  let testPass = btoa(pass.value) === loginCred.pass;
  let testUser = btoa(user.value) === loginCred.user;

  if (testPass && testUser) {
    dialog.close();
    container.removeAttribute("hidden");
  } else {
    error.removeAttribute("hidden");
  }
}
