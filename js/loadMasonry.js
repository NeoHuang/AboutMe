var $container = $('#modelGallery');
// initialize Masonry after all images have loaded  
        $container.imagesLoaded( function() {
          $container.masonry({
            columnWidth: '.gallery-item',
            itemSelector: '.gallery-item'
        });
        });