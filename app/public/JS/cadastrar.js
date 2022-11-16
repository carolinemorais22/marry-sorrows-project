let valido = true;

let text;

function validar(){
  return valido;
}

//Validação do Formulário
function callAll(){
  firstName();
  lastName();
  radio();
  email();
  tel();
  cpf();
  city();
  state();
  message();
}

function firstName() {

  const firstName = document.getElementById("firstName").value;

  if (firstName == "" || firstName == null || firstName.length < 4){
   
    // text = "Por favor, insira um nome!"
    // document.getElementById("validation").style.color = "#ff0000";
    // document.getElementById("validation").style.margin = "5px";
    // document.getElementById("validation").innerHTML = text;
    valido = false;

  } 
  else {

    text = "Ótimo!"
    document.getElementById("validation").style.color = "#229a00"
    document.getElementById("validation").style.margin = "5px";
    document.getElementById("validation").innerHTML = text;

  }
}

function lastName(){
  const lastName = document.getElementById("lastName").value;

  if (lastName == "" || lastName == null || lastName.length < 4){
   
    // text = "Por favor, insira um sobrenome!"
    // document.getElementById("validation2").style.color = "#ff0000";
    // document.getElementById("validation2").style.margin = "5px";
    // document.getElementById("validation2").innerHTML = text;
    valido = false;
  } 
  else {

    text = "Ótimo!"
    document.getElementById("validation2").style.color = "#229a00";
    document.getElementById("validation2").style.margin = "5px";
    document.getElementById("validation2").innerHTML = text;

  }
}

function radio(){
  if (document.form.sexo[0].checked == false && document.form.sexo[1].checked == false && document.form.sexo[2].checked == false) {
    document.getElementById("sexo1").style.color = "#ff0000";
    document.getElementById("sexo2").style.color = "#ff0000";
    document.getElementById("sexo3").style.color = "#ff0000";
    valido = false;
  }
  else if(document.form.sexo[0].checked == true && document.form.sexo[1].checked == false && document.form.sexo[2].checked == false){
    document.getElementById("sexo1").style.color = "#229a00";
    document.getElementById("sexo2").style.color = "#000";
    document.getElementById("sexo3").style.color = "#000";
  }
  else if(document.form.sexo[0].checked == false && document.form.sexo[1].checked == true && document.form.sexo[2].checked == false){
    document.getElementById("sexo2").style.color = "#229a00";
    document.getElementById("sexo1").style.color = "#000";
    document.getElementById("sexo3").style.color = "#000";
  }
  else if(document.form.sexo[0].checked == false && document.form.sexo[1].checked == false && document.form.sexo[2].checked == true){
    document.getElementById("sexo3").style.color = "#229a00";
    document.getElementById("sexo1").style.color = "#000";
    document.getElementById("sexo2").style.color = "#000";
  }
  else{}
}

function email(){
  const email = document.getElementById("email").value;

  if (email == "" || email.indexOf('@') == -1 || email.indexOf('.') == -1){
   
    text = "Por favor, insira um e-mail!"
    document.getElementById("validation3").style.color = "#ff0000";
    document.getElementById("validation3").style.margin = "5px";
    document.getElementById("validation3").innerHTML = text;
    valido = false;
  } 
  else {

    text = "Ótimo!"
    document.getElementById("validation3").style.color = "#229a00";
    document.getElementById("validation3").style.margin = "5px";
    document.getElementById("validation3").innerHTML = text;

  }
}

function tel(){
  const tel = document.getElementById("tel").value;
  const telefone = tel.replace(/\D/g, '');
 
  if(tel === ""){
     text = "Por favor, insira um telefone!"
      document.getElementById("validation4").style.color = "#ff0000";
      document.getElementById("validation4").style.margin = "5px";
      document.getElementById("validation4").innerHTML = text;
      valido = false;
  }

  else if(!(telefone.length >= 10 && telefone.length <= 11)){
    text = "Por favor, insira um telefone!"
    document.getElementById("validation4").style.color = "#ff0000";
    document.getElementById("validation4").style.margin = "5px";
    document.getElementById("validation4").innerHTML = text;
    valido = false;
  }

  else if(telefone.length == 11 && parseInt(telefone.substring(2, 3)) != 9){
    text = "Por favor, insira um telefone!"
    document.getElementById("validation4").style.color = "#ff0000";
    document.getElementById("validation4").style.margin = "5px";
    document.getElementById("validation4").innerHTML = text;
    valido = false;
  }

  else if (telefone.length == 10 && [2, 3, 4, 5, 7].indexOf(parseInt(telefone.substring(2, 3))) == -1){
    text = "Por favor, insira um telefone!"
      document.getElementById("validation4").style.color = "#ff0000";
      document.getElementById("validation4").style.margin = "5px";
      document.getElementById("validation4").innerHTML = text;
      valido = false;
  }

  else{
    text = "Ótimo!"
    document.getElementById("validation4").style.color = "#229a00";
    document.getElementById("validation4").style.margin = "5px";
    document.getElementById("validation4").innerHTML = text;
  }

}
  
function cpf() {
  const strCPF = document.getElementById("cpf").value;
    var Soma;
    var Resto;
    Soma = 0;   
    //strCPF  = Retira Caracteres Invalidos(strCPF,11);
    if (strCPF == "00000000000" || strCPF == "11111111111" || strCPF == "33333333333" || strCPF == "44444444444" || strCPF == "55555555555" || strCPF == "66666666666" || strCPF == "77777777777" || strCPF == "88888888888" || strCPF == "99999999999" || strCPF == "" || strCPF.length > 11){

      text = "Por favor, insira um CPF válido!"
      document.getElementById("validation5").style.color = "#ff0000";
      document.getElementById("validation5").style.margin = "5px";
      document.getElementById("validation5").innerHTML = text;
      valido = false;
    }

    else{
      for (i=1; i<=9; i++){
        Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i); 
        Resto = (Soma * 10) % 11;
        if ((Resto == 10) || (Resto == 11)) {
          Resto = 0;
          if (Resto != parseInt(strCPF.substring(9, 10)) ){

            text = "Por favor, insira um CPF válido!"
            document.getElementById("validation5").style.color = "#ff0000";
            document.getElementById("validation5").style.margin = "5px";
            document.getElementById("validation5").innerHTML = text;
            valido = false;
        }
      }}

    Soma = 0;
      for (i = 1; i <= 10; i++){
        Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
        if ((Resto == 10) || (Resto == 11)){
          Resto = 0;
          if (Resto != parseInt(strCPF.substring(10, 11) ) ){

            text = "Por favor, insira um CPF válido!"
            document.getElementById("validation5").style.color = "#ff0000";
            document.getElementById("validation5").style.margin = "5px";
            document.getElementById("validation5").innerHTML = text;
            valido = false;
          }
          text = "Ótimo!"
          document.getElementById("validation5").style.color = "#229a00";
          document.getElementById("validation5").style.margin = "5px";
          document.getElementById("validation5").innerHTML = text;
      }
      }
    }  
}

function city(){
  const city = document.getElementById("city").value;

  if (city == "" || city == null || city.length < 3){
   
    text = "Por favor, insira uma cidade!"
    document.getElementById("validation6").style.color = "#ff0000";
    document.getElementById("validation6").style.margin = "5px";
    document.getElementById("validation6").innerHTML = text;
    valido = false;

  } 
  else {

    text = "Ótimo!"
    document.getElementById("validation6").style.color = "#229a00";
    document.getElementById("validation6").style.margin = "5px";
    document.getElementById("validation6").innerHTML = text;

  }
}

function state(){
  const state = document.getElementById("state").value;

  if (state == ""){
   
    text = "Por favor, selecione um estado!"
    document.getElementById("validation7").style.color = "#ff0000";
    document.getElementById("validation7").style.margin = "5px";
    document.getElementById("validation7").innerHTML = text;
    valido = false;

  } 
  else {

    text = "Ótimo!"
    document.getElementById("validation7").style.color = "#229a00";
    document.getElementById("validation7").style.margin = "5px";
    document.getElementById("validation7").innerHTML = text;

  }
}

function message(){
  const message = document.getElementById("message").value;

  if (message == "" || message == null || message.length < 20){
   
    text = "Por favor, insira uma mensagem!"
    document.getElementById("validation8").style.color = "#ff0000";
    document.getElementById("validation8").style.margin = "5px";
    document.getElementById("validation8").innerHTML = text;
    valido = false;

  } 
  else {

    text = "Ótimo!"
    document.getElementById("validation8").style.color = "#229a00";
    document.getElementById("validation8").style.margin = "5px";
    document.getElementById("validation8").innerHTML = text;

  }
}

