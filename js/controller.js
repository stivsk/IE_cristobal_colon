var app = angular.module('cristobal',[]);

app.controller('menu', function($scope){
	$scope.menu_items = [
		{
			'item':'Inicio',
			'link':'#inicio',
		},
		{
			'item':'institución',
			'link':'#institución'
		},
		{
			'item':'comunidad',
			'link':'#comunidad'
		},
		{
			'item':'galerias',
			'link':'#galerias'
		},
		{
			'item':'Contáctenos',
			'link':'#Contactenos'
		}
	];
});

app.controller('content',function($scope){
	$scope.politica = {
		'cont':'La Institución Educativa Cristóbal Colón presta un servicio educativo con personal altamente calificado y una propuesta pedagógica fundamentada en el enfoque socio-crítico que favorezca en los Estudiantes un desempeño integral aplicable a su desempeño cotidiano a través del Proyecto de Vida en donde se destaque la formación en valores y las competencias adquiridas desde un currículo pertinente y estrategias de mejoramiento continuo en favor del crecimiento y transformación personal y social.',
		'class':'info',
		'title':'Politica de calidad'
	};
	$scope.valores = [
		{
			'valor':'Reconocimiento',
			'descrip':'Resaltamos en las personas las acciones y comportamientos que exaltan los valores institucionales.'
		},
		{
			'valor':'Responsabilidad',
			'descrip':'Educamos individuos que tomen decisiones de manera autónoma, respetando las normas y principios del medio en que interactúan. Cumplimos de manera eficiente y oportuna con los compromisos adquiridos en nuestra cotidianidad.'
		},
		{
			'valor':'Comunicación',
			'descrip':'Expresamos y escuchamos nuestras ideas, pensamientos y sentimientos desde el valor del respecto. Generamos acciones que favorezcan el diálogo y la comprensión.'
		},
		{
			'valor':'Tolerancia',
			'descrip':'Reconocemos la individualidad y la diversidad, permitiéndonos establecer vínculos  que posibiliten la convivencia. Construimos lazos sociales basados en la comprensión y en el respeto por la diferencia.'
		},
		{
			'valor':'Honestidad',
			'descrip':'Actuamos con rectitud dentro de los principios éticos, como condición básica para las relaciones humanas y la auténtica vida comunitaria'
		},
		{
			'valor':'Trabajo en equipo',
			'descrip':'Las capacidades y esfuerzos individuales se complementan y unifican alrededor de un objetivo común.'
		}
	];
	$scope.mision = {
		'title':'Mision',
		'cont':'En una convivencia armónica, ofrecemos a nuestros estudiantes una formación humana e incluyente inspirada en “el humanismo, conocimiento y proyección”, desde los fundamentos de la  pedagogía socio-crítica que favorezca el desarrollo de competencias  personales, comunicativas, académicas y tecnológicas para desempeñarse exitosamente en la sociedad con alto compromiso en la transformación del entorno y el mejoramiento continuo.'
	};
	$scope.vision = {
		'title':'Vision',
		'cont':'Nuestra institución será reconocida en el 2016 por el alto desempeño académico y el uso óptimo de las tecnologías contempladas en su Proyecto Educativo, que propicien la formación de ciudadanos comprometidos con su entorno social, y competentes para desempeñarse exitosamente en el medio laboral y/o profesional.'
	};
});

app.controller('carousel',function($scope){
	$scope.blocks = [
		{
			'title':'example',
			'info':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa consectetur nulla ipsum accusamus suscipit magni, odit veniam esse voluptas repellendus. Aut consectetur in iste nobis eum ex quasi vel, nam.'
		},
		{
			'title':'example',
			'info':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fuga enim nulla magnam omnis, praesentium alias similique! Illo optio vitae, officia vel fuga hic sequi ex neque inventore perspiciatis asperiores.'
		},
		{
			'title':'example',
			'info':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur recusandae aliquam error qui, vel voluptatem dolore enim esse quod ea. Libero provident rerum, sed, fuga delectus pariatur perferendis maiores a?'
		},
		{
			'title':'example',
			'info':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum esse vitae inventore, optio ex voluptate aliquid cum sed dolores error deserunt explicabo, nobis harum. Veniam ea omnis quod cupiditate obcaecati!'
		},
		{
			'title':'example',
			'info':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum esse vitae inventore, optio ex voluptate aliquid cum sed dolores error deserunt explicabo, nobis harum. Veniam ea omnis quod cupiditate obcaecati!'
		},
		{
			'title':'example last',
			'info':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum esse vitae inventore, optio ex voluptate aliquid cum sed dolores error deserunt explicabo, nobis harum. Veniam ea omnis quod cupiditate obcaecati!'
		}
	];
});

