                        var loader = new THREE.FileLoader();
                        loader.load( 'js/app.json', function ( text ) {


                                var player = new APP.Player();
                                player.load( JSON.parse( text ) );
                                player.setSize( window.innerWidth*.09, window.innerHeight*.09);
                                player.play();
                              //  document.body.appendChild( player.dom );
				
				//document.body.appendChild(
                               // window.addEventListener( 'resize', function () {
                                 //       player.setSize( window.innerWidth-600, window.innerHeight-450);
                               // } );

				//document.onclick = window.open("https://shaquan1228.github.io/home.html");
				
                                if ( location.search === '?edit' ) {
                                        var button = document.createElement( 'a' );
                                        button.id = 'edit';
                                        button.href = 'https://shaquan1228.github.io/#file=' + location.href.split( '/' ).slice( 0, - 1 ).join( '/' ) + '/home.html';
                                        button.target = '_self';
                                        button.textContent = 'EDIT';
                                        document.body.appendChild( button );
				
                                }
				var button = document.createElement('button1');
				button.appendChild(player.dom);
			//THIS WILL BE WHERE WE LINK THE SPRITE TO THE CHECKOUT PAGE
				button.addEventListener( 'click', function(){
					window.open("https://shaquan1228.github.io/home.html");
				});
				button.target= '_self';
				document.body.appendChild(button);
			//	document.getElementById('button').onclick = location.href= 'https://shaquan1228.github.io/home.html';
			//	button.onclick = window.open("https://shaquan1228.github.io/home.html","_self");

                        } );

