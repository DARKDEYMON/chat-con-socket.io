$(function($) {
	// vemos el evento de teclado sobre el campo de texto nickname y verificamos si el usuario a presionado ENTER
	//y que no este vacio 
	var socket=io();
	$("#nickname").keydown(function(event) {
		if(event.keyCode==13 && $(this).val()!="")
		{
			//realizamos nuestra primera conneccion con el socket
			socket.emit("setnickname",{"nick":$(this).val()});
		}
	});
	socket.on("setnickname",function(response){
		if(response.server===true)
		{
			alert("ok!");
		}else{
			alert(response.server)
		}
	})
});