<?php
	$this->load->helper('url');
	$v_path = base_url('application/views');
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
       "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">

	<head>
		<title>Intranet du Laboratoire Galaxy-Swiss Bourdin</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<link href="<?php echo $v_path.'/templates/css/styles.css'?>" rel="stylesheet" type="text/css" />

		<script type="JavaScript">
			function hideNotify() {
				document.getElementById("notify").style.display = "none";
			}
		</script>
		<script src=" <?php echo js_url('fonction.js');?>"></script>
		
	</head>

	<body onload="calculMontantsFrais();">
		<div id="page">
			<div id="entete">
				<img src="<?php echo $v_path.'/templates/images/logo.jpg'?>" id="logoGSB" alt="Laboratoire Galaxy-Swiss Bourdin" title="Laboratoire Galaxy-Swiss Bourdin" />
				<h1>Gestion des frais de déplacements</h1>
			</div>
			
			<!-- Division pour le menu -->
			<div id="menuGauche">
				<div id="infosUtil">
					<h2></h2>
				</div>  
				
				<ul id="menuList">
					<li>
						<text class="typeVisiteur">Comptable :</text><br/>
						<text id="identifiant"><?php echo $this->session->userdata('prenom')."  ".$this->session->userdata('nom');  ?></text>
					</li>
					<br>
					<li class="smenu">
						<?php echo anchor('c_comptable/', 'Accueil', 'title="Page d\'accueil"'); ?>
					</li>
					<li class="smenu">
						<?php echo anchor('c_comptable/ValidationFiches', 'Valider Fiches de Frais', 'title="Validation fiches de frais"'); ?>
					</li>
					<li class="smenu">
						<?php echo anchor('c_comptable/deconnecter', 'Se déconnecter', 'title="Déconnexion"'); ?>
					</li>
				</ul>
				
			</div>

			<?php echo $body; ?>

			<div id="pied">
				<br/>
			</div>

		</div>    

	</body>
</html>

	  