/*Verifie la validité des informations saisi dans lesdifférents champs du tableau des frais forfaitisés et calcul le total de chaque lignede frais*/
/*Empeche la validation si incorrecte*/
function calculForfait (idFrais){
	var id = idFrais.id;//id de la ligne du frais
	var quantite = document.getElementById(id).value;//recupere la quantite de la ligne de frais
	var montant = document.getElementById("input"+id).value;//recupere le montant de la ligne de frais
	
	if(quantite === "" || montant ===""){
		document.getElementById(id).style.color='black';
	}
	else{
		//Vérifie le contenu des input contenant la quantité et le montant de l'input utilisé
		if(isNaN(quantite)||isNaN(montant)){
			
			//Vérifie si le champ quantite de la ligne modifiée est valide, s'il ne l'es pas il sera mis en rouge
			if (isNaN(quantite)){
				document.getElementById(id).style.color='red';
			}
			
			//Vérifie si le champ montant de la ligne modifiée est valide, s'il ne l'es pas il sera mis en rouge
			if(isNaN(montant)){
				document.getElementById("input"+id).style.color='red';
			}				
		}
		else{
			//remet en etat initial les couleur et enlever le message d'erreur
			document.getElementById(id).style.color='black';
			document.getElementById("input"+id).style.color='black';
			document.getElementById("erreurSaisi").innerHTML ="";
			
			//appel la fonction pour calculer les valeurs du tableau
			calculMontantsFrais();
		}
	}
	
	//recupère les quantité et montant de tout le tableau
	var quantite1 = document.getElementById("ETP").value;
	var quantite2 = document.getElementById("KM").value;
	var quantite3 = document.getElementById("NUI").value;
	var quantite4 = document.getElementById("REP").value;
	var montant1 = document.getElementById("inputETP").value;
	var montant2 = document.getElementById("inputKM").value;
	var montant3 = document.getElementById("inputNUI").value;
	var montant4 = document.getElementById("inputREP").value;
	
	
	//Verifie si tout les champs du tableau contiennent des nombres valident ne contenant pas de caractères texte ou spéciaux
	if(isNaN(quantite1) || isNaN(quantite2) || isNaN(quantite3) || isNaN(quantite4) || isNaN(montant1) || isNaN(montant2) || isNaN(montant3) || isNaN(montant4) ){
		document.getElementById("erreurSaisi").innerHTML ="Caractère(s) non valide(s) pour la quantité !";
		document.getElementById("ok").style.visibility = "hidden";
	}
	//Verifie si tout les champs du tableau ne sont pas vides
	else if(quantite1 ==="" || quantite2 ==="" || quantite3 ==="" || quantite4 ==="" || montant1===""  || montant2 ==="" || montant3 ==="" || montant4 ===""){
		document.getElementById("erreurSaisi").innerHTML ="Champ(s) vide(s) !";
		document.getElementById("ok").style.visibility = "hidden";
	}
	
}
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//
	
	
	
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//
/*Calcul le total de tout les frais du taleau*/
	function calculMontantsFrais(){
				
		//recup quantite de chaque lignes
		var quantite1 = document.getElementById("ETP").value;
		var quantite2 = document.getElementById("KM").value;
		var quantite3 = document.getElementById("NUI").value;
		var quantite4 = document.getElementById("REP").value;
		
		//recup montant de chaque lignes
		var montant1 = document.getElementById("inputETP").value;
		var montant2 = document.getElementById("inputKM").value;
		var montant3 = document.getElementById("inputNUI").value;
		var montant4 = document.getElementById("inputREP").value;
				
		//calcul total de chaque ligne et l'ajout dans la colonne total
		var total1 = document.getElementById("totalETP").innerHTML = parseFloat(quantite1)*parseFloat(montant1);
		var total2 = document.getElementById("totalKM").innerHTML = parseFloat(quantite2)*parseFloat(montant2);
		var total3 = document.getElementById("totalNUI").innerHTML = parseFloat(quantite3)*parseFloat(montant3);
		var total4 = document.getElementById("totalREP").innerHTML = parseFloat(quantite4)*parseFloat(montant4);
		
		//totalise les frais 
		var total = total1 + total2 + total3 + total4;
		document.getElementById("eltotal").innerHTML = total+" €";
		
		//rend visible le bouton de validation
		document.getElementById("ok").style.visibility = "visible";
	}
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//



//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//
/*Remet à l'état initial les styles des différents éléments frais forfaitisés*/
function resetStyle(){
	document.getElementById("ETP").style.color='black';
	document.getElementById("KM").style.color='black';
	document.getElementById("NUI").style.color='black';
	document.getElementById("REP").style.color='black';
	document.getElementById("inputETP").style.color='black';
	document.getElementById("inputKM").style.color='black';
	document.getElementById("inputNUI").style.color='black';
	document.getElementById("inputREP").style.color='black';
	document.getElementById("erreurSaisi").innerHTML ="";
	document.getElementById("ok").style.visibility = "visible";
}
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//



//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//
/*Verifie si le champ de la quantite des elements Hors Forfait est valide*/
/*Empeche la validation si incorrecte*/
function verifElementHorsForfait(){
	var quantite = document.getElementById("txtMontantHF").value;
	
	//Verifie si le champ contient bien un nombre et non des caractères texte ou spéciaux
	if(isNaN(quantite)){
		document.getElementById("ajouter").style.visibility = "hidden";
		document.getElementById("txtMontantHF").style.color='red';
		document.getElementById("erreurSaisiHF").innerHTML ="Caractère(s) non valide(s) !";
	}
	//Si le contenant du champ est valide
	else{
		document.getElementById("txtMontantHF").style.color='black';
		document.getElementById("erreurSaisiHF").innerHTML ="";
		document.getElementById("ajouter").style.visibility = "visible";
	}
	
}
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//



//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//
/*Remet à l'état initial les styles des différents éléments Hors Forfait*/
function resetStyleHF(){
	document.getElementById("txtMontantHF").style.color='black';
	document.getElementById("ok").style.visibility = "visible";
}
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//