                        var loader = new THREE.FileLoader();
                        loader.load( 'js/app.json', function ( text ) {


                                var player = new APP.Player();
                                player.load( JSON.parse( text ) );
                                player.setSize( window.innerWidth-100, window.innerHeight-200);
                                player.play();

                              //  document.body.appendChild( player.dom );
				
				//document.body.appendChild(
                                //window.addEventListener( 'resize', function () {
                                 //       player.setSize( window.innerWidth-100, window.innerHeight-200);
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
				var button = document.createElement('button');
				button.appendChild(player.dom);
				document.body.appendChild(button);
				button.location = 'https://shaquan1228.github.io/home.html';
			//	button.onclick = window.open("https://shaquan1228.github.io/home.html","_self");

                        } );

