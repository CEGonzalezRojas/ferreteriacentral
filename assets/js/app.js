import LazyLoad from "./lazyLoad.js";
((_) => {
  class MainApp {
    /**
     * Construccion de la App
     * @param {LazyLoad} lazyLoad Instancia de lazy load asociada
     */
    constructor(lazyLoad) {
      // Guardar lazyload para futuras cargas
      this.lazyLoad = lazyLoad;

      // Activar el logo
      this.LazyLoadImages();

      // Carrusel de marcas
      this.BrandCarousel();
    }

    /**
     * Carga de imagenes con metodo lazy
     */
     LazyLoadImages() {
      
        // Background
        const bgHTML = document.querySelector("body");
        this.lazyLoad.observe( "/assets/images/background.jpg", bgHTML, "background",
            () => {
                bgHTML.classList.add("ready");
            }
        );

        // Logo
        const logoHTML = document.querySelector(".logo");
        this.lazyLoad.observe( "/assets/images/logotipo.png", logoHTML, "background",
          () => {
                logoHTML.classList.add("ready");
          }
        );

    }

    /**
     * Genera el carrusel para las marcas
     */
    BrandCarousel(){
      $(document).ready(function() {
        $('.logo-carousel').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
          arrows: true,
          arrowsLabel: false,
          dots: false,
          pauseOnHover: false,
          responsive: [{
            breakpoint: 768,
            settings: {
              slidesToShow: 4
            }
          }, {
            breakpoint: 520,
            settings: {
              slidesToShow: 2
            }
          }]
        });
      });
    }
  }

  new MainApp(new LazyLoad());
})();
