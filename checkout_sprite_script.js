                        var loader = new THREE.FileLoader();
                        loader.load( 'js/app.json', function ( text ) {


                                var player = new APP.Player();
                                player.load( JSON.parse( text ) );
                                player.setSize( window.innerWidth-100, window.innerHeight-200);
                                player.play();

                                document.body.appendChild( player.dom );

                                window.addEventListener( 'resize', function () {
                                        player.setSize( window.innerWidth-100, window.innerHeight-200);
                                } );

				window.addEventListener(onclick, function() {
					window.location.href = 'https://shaquan1228.github.io/home.html';
				} );
                                if ( location.search === '?edit' ) {
                                        var button = document.createElement( 'a' );
                                        button.id = 'edit';
                                        button.href = 'https://shaquan1228.github.io/home.html#file=' + location.href.split( '/' ).slice( 0, - 1 ).join( '/' ) + '/home.html';
                                        button.target = '_self';
                                        button.textContent = 'EDIT';
                                        document.body.appendChild( button );
                                }

                        } );

