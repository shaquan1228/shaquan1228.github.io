                        var loader = new THREE.FileLoader();
                        loader.load( 'js/app.json', function ( text ) {


                                var player = new APP.Player();
                                player.load( JSON.parse( text ) );
                                player.setSize( window.innerWidth-200, window.innerHeight-700);
                                player.play();

                                document.body.appendChild( player.dom );

                                window.addEventListener( 'resize', function () {
                                        player.setSize( window.innerWidth-200, window.innerHeight-700);
                                } );

                                if ( location.search === '?edit' ) {
                                        var button = document.createElement( 'a' );
                                        button.id = 'edit';
                                        button.href = 'https://threejs.org/editor/#file=' + location.href.split( '/' ).slice( 0, - 1 ).join( '/' ) + '/app.json';
                                        button.target = '_self';
                                        button.textContent = 'EDIT';
                                        document.body.appendChild( button );
                                }

                        } );

