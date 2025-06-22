function generatePassword() {
  const length = document.getElementById("length").value;
  const useUppercase = document.getElementById("uppercase").checked;
  const useLowercase = document.getElementById("lowercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_+=";

  let charset = "";
  if (useUppercase) charset += upper;
  if (useLowercase) charset += lower;
  if (useNumbers) charset += numbers;
  if (useSymbols) charset += symbols;

  if (charset === "") {
    alert("Selecione pelo menos uma opção!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * charset.length);
    password += charset[rand];
  }

  document.getElementById("password").value = password;
}
