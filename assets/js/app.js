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
  }

  new MainApp(new LazyLoad());
})();
