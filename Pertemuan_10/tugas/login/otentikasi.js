function kirim() {
    let inp_nama = document.getElementById("username").value;
    let inp_pass = document.getElementById("password").value;
    let form = document.getElementById("form");
    if (inp_nama == "@bagusachmad" && inp_pass == "gus.id") {
      form.setAttribute("action", "index1.html");
      window.alert("Login Berhasil");
    } else {
      window.alert("Login Gagal, Invalid username or password");
      console.log("login gagal")
    }
    console.log(inp_pass + inp_nama);
  }