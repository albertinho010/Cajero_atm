// Datos Iniciales
var ctahabiente;
var contra="";
var proceso=1;


var clientes=[
	{nombre:"Eduardo N",pass:"1", saldo:1000},
	{nombre:"Jorge N",pass:"2", saldo:1500},
	{nombre:"Kelebra N",pass:"3", saldo:2000},
	{nombre:"Raúl N",pass:"4", saldo:2500},
];

// Inicializar app
function initApp(){
	  updateSelectClientes();
	  
}


// Retiro
function retiro(monto){
// Solo si presiona en un numero fijado
	var nuevo_saldo = verificarSaldo(monto);
	clientes[ctahabiente].saldo=nuevo_saldo;
	alert("Su saldo es : "+ nuevo_saldo);
	cancelarTodo();
}

//Saldo



// Deposito
function deposito(){
	var monto_deposito;
	monto_deposito= document.getElementById('depositar').value;

	var nsaldo_actual = parseFloat(clientes[ctahabiente].saldo) + parseFloat(monto_deposito);
	alert("Deposito Realizado,su saldo actual es de: " + nsaldo_actual);
	cancelarTodo();
}
// Operaciones
// Verificar Saldo disponible
function verificarSaldo(){
	var nuevo_saldo=0;
	var combo = document.getElementById("listadeclientes2");
	var user = combo.options[combo.selectedIndex].text;
	for(let i =0;(i<=clientes.length-1);i++){
		if(user == clientes[i].nombre ){
			alert("Su saldo es de: " + clientes[i].saldo);
		}
	}

	return nuevo_saldo;
}
// Cancelar las operaciones
function cancelarTodo(){
	window.location.reload();
}	
	
// Escoger Operaciones
function opcionesAceptar(){

	if(proceso == 1){
		verificarUser();
	}else if(proceso == 2){

	}else if(proceso == 3){
		if(document.getElementById('montoEsp').value== ""){
			alert("Seleccione un monto correcto");
		}
		else{
			retiroEspecifico();
		}
	}else if(proceso == 4){
		saldo();
	}else if(proceso == 5){
		deposito();
	}

}
function elegirOperacion(operacion,monto){
	if(proceso==2){

		if(operacion == 'retiro' ){
			
			document.getElementById('opciones').style.display='none';
			document.getElementById('proceso3').style.display='block';
			proceso=3;
			$('#btn1').active(false);

		}else if(operacion == 'transferencia' ){
			document.getElementById('opciones').style.display='none';
			document.getElementById('proceso4').style.display='block';
			proceso=4
			$('#btn2').click(false);

		}else if(operacion == 'deposito' ){
			document.getElementById('opciones').style.display='none';
			document.getElementById('proceso5').style.display='block';
			proceso=5
			$('#btn3').click(false);
		}



		
	}

	if (proceso==3){
		if(monto=='otro monto'){
			document.getElementById('nuevo_monto').style.display='block';
		}
		else{
			retiro(monto);

		}
	}
}
// Los datos para el login
function adicionarPass(numero){
	if (document.getElementById("pass").value.length < 5) {
		contra = contra + numero;
		document.getElementById("pass").value= contra;
	}
}
// Ingresa los datos de acceso
function verificarUser(){
	ctahabiente = document.getElementById("listadeclientes").selectedIndex;

	if (clientes[ctahabiente].pass==contra) {
		proceso=2;
		document.getElementById('acceso').style.display='none';
		document.getElementById('opciones').style.display='block';
	}

	else{
		alert("Algo salió mal. Verifica tu clave de acceso");
		document.getElementById("pass").value='';
		contra = "";
	}
}


// Operaciones Estaticas
function updateSelectClientes(){
  var select=document.getElementById("listadeclientes");
  var select2=document.getElementById("listadeclientes2");
  

  for (var i=0;i<clientes.length;i++){
	select.innerHTML+='<option value="'+ i +'">'+clientes[i].nombre+' </option>';
	select2.innerHTML+='<option value="'+ i +'">'+clientes[i].nombre+' </option>';
  }
}