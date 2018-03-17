

	// Header slider
	window.f = new flux.slider('#header-slider', 
		{
			pagination: true, 
			delay: 6000, 
			transitions: ['bars3d', 'blocks', 'bars', 'cube'],
			onTransitionEnd: function(data) {
				window.f.stop();
				window.f.start();
			}
		});
	
	