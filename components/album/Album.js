import Head from "next/head";

$(document).ready(function () {
  $(".image-popup-vertical-fit").magnificPopup({
    type: "image",
    mainClass: "mfp-with-zoom",
    gallery: {
      enabled: true,
    },

    zoom: {
      enabled: true,

      duration: 300, // duration of the effect, in milliseconds
      easing: "ease-in-out", // CSS transition easing function

      opener: function (openerElement) {
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });
});

const Album = () => {
  return (
    <>
      <Head>
        <title>Indie Hands - Home</title>
        <meta
          name="description"
          content="Best mehndi in the karachi with beautiful desings."
        />
        <link rel="icon" href="/mehndi.png" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
      </Head>
      <div class="container">
        <p>
          <section class="img-gallery-magnific">
            <div class="magnific-img">
              <a
                class="image-popup-vertical-fit"
                href="/photo-1.jpg"
                title="9.jpg"
              >
                <img src="/photo-1.jpg" alt="9.jpg" />
                <i class="fa fa-search-plus" aria-hidden="true"></i>
              </a>
            </div>
            <div class="magnific-img">
              <a
                class="image-popup-vertical-fit"
                href="https://unsplash.it/974/?random"
                title="9.jpg"
              >
                <img src="https://unsplash.it/974/?random" alt="9.jpg" />
                <i class="fa fa-search-plus" aria-hidden="true"></i>
              </a>
            </div>
            <div class="magnific-img">
              <a
                class="image-popup-vertical-fit"
                href="https://unsplash.it/974/?random"
                title="9.jpg"
              >
                <img src="https://unsplash.it/974/?random" alt="9.jpg" />
                <i class="fa fa-search-plus" aria-hidden="true"></i>
              </a>
            </div>
            <div class="magnific-img">
              <a
                class="image-popup-vertical-fit"
                href="https://unsplash.it/900/?random"
                title="10.jpg"
              >
                <img src="https://unsplash.it/900/?random" alt="10.jpg" />
                <i class="fa fa-search-plus" aria-hidden="true"></i>
              </a>
            </div>
            <div class="magnific-img">
              <a
                class="image-popup-vertical-fit"
                href="https://unsplash.it/902"
                title="3.jpg"
              >
                <img src="https://unsplash.it/902/" alt="3.jpg" />
                <i class="fa fa-search-plus" aria-hidden="true"></i>
              </a>
            </div>
            <div class="magnific-img">
              <a
                class="image-popup-vertical-fit"
                href="https://unsplash.it/901"
                title="4.jpg"
              >
                <img src="https://unsplash.it/901" alt="4.jpg" />
                <i class="fa fa-search-plus" aria-hidden="true"></i>
              </a>
            </div>
          </section>
          <div class="clear"></div>
        </p>
      </div>
    </>
  );
};

export default Album;
