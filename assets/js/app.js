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

        // Logos marcas
        const brandsLogos = document.querySelectorAll(".glide__slide > img");
        for(const bLogo of brandsLogos.values()){
          this.lazyLoad.observe( bLogo.dataset.url, bLogo, "img");
        }

    }

    /**
     * Genera el carrusel para las marcas
     */
    BrandCarousel(){

      new Glide('.glide', {
        type: 'carousel',
        perView: 6,
        autoplay: 2000,
        gap: 50,
        hoverpause: true
      }).mount();

    }
  }

  new MainApp(new LazyLoad());
})();
