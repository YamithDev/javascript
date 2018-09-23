/*jshint -W080*/
/*jshint -W119*/
function estrcutura(){
	var num = 10;
	var str = "texto";
	var bol = true;
	var und = undefined;
	var nul = null;

	var obj={
		numero: 10,
		texto: "nuevo texto",

		obHijo:{
			numero2: 20,
			texto2: "texto2"
		}
	};
	
	swal({
		title:"",
		type:"info",
		html:`${obj.texto}`,
	});
}