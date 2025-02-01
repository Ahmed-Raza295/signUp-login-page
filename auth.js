
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let signUpBtn = document.querySelector("#btn");
  let spinner = document.querySelector(".spinner-border");
  let signUpName = document.querySelector("#name-input");
  let loginEmail = document.querySelector(".login-email");
  let loginPassword = document.querySelector(".login-password");
  let loginBtn = document.querySelector("#login-btn");

 async function signUp(event)  {
      event.preventDefault();
      if (!email.value || !password.value) {
          Swal.fire({
              title: "Error!",
              text: "Please fill in all the fields.",
              icon: "error",
              confirmButtonText: "OK",
          });
          return;
      }

      spinner.classList.remove("d-none");

      try {
          const { data, error } = await supabase.auth.signUp({
              email: email.value,
              password: password.value,
          });

          if (error) {
              Swal.fire({
                  title: "Error!",
                  text: error.message,
                  icon: "error",
                  confirmButtonText: "OK",
              });
              return;
          }

          if (data) {
              Swal.fire({
                  title: "Success!",
                  text: "Your account has been created successfully!",
                  icon: "success",
                  confirmButtonText: "OK",
              });
              console.log("Sign-up successful:", data);
          }
      } catch (err) {
          Swal.fire({
              title: "Error!",
              text: "Something went wrong. Please try again later.",
              icon: "error",
              confirmButtonText: "OK",
          });
          console.error("Unexpected error:", err.message);
      } finally {
          spinner.classList.add("d-none");
      }

      email.value = "";
      password.value = "";
      signUpName.value = "";
  };

 async function login()  {
      try {
          const { data, error } = await supabase.auth.signInWithPassword({
              email: loginEmail.value,
              password: loginPassword.value,
          });

          if (error) throw error;

          if (data) {
              
              alert("Login successfully");
              window.location.href = "/dashboard.html";
          }
      } catch (error) {
          alert(error.message);
      }
  };

















if(signUpBtn){
  signUpBtn.addEventListener("click", signUp)
}

if(loginBtn){
loginBtn.addEventListener("click", login)

}
