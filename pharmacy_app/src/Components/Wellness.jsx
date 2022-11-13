import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Wellness() {
  return (
    <>
      <Navbar />
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1668190081_miniWellness_web.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1668190483_Huggies_wellness_web.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1668190132_cetaphil__wellness_main_banner_web.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1668190351_Groviva_-wellness-main-banner-web.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1668190568_littles-web.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1668190677_Sebamed-wb.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <h2 className="mt-2">Popular Categories</h2>
      <div style={{ display: "flex", margin: "auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <img
            src="https://www.netmeds.com/images/category/v1/3514/thumb/intimate_care_0.jpg"
            alt="img1"
          />
          <p>
            <b>Intimate Care</b>
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <img
            src="https://www.netmeds.com/images/category/v1/3734/thumb/baby_soap_0.jpg"
            alt="img2"
          />
          <p>
            <b>Baby Soap</b>
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <img
            src="https://www.netmeds.com/images/category/v1/3911/thumb/diapers_wipes_0.jpg"
            alt="img3"
          />
          <p>
            <b>Diapers And Wipers</b>
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <img
            src="https://www.netmeds.com/images/category/v1/3742/thumb/maternity_pads_0.jpg"
            alt="img4"
          />
          <p>
            <b>Maternity Pads</b>
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <img
            src="https://www.netmeds.com/images/category/v1/3126/thumb/menstrual_cups_0.jpg"
            alt="img5"
          />
          <p>
            <b>Menstrual Cups</b>
          </p>
        </div>
      </div>

      <h2 className="mt-2">Health Concerns</h2>
      <div style={{ display: "flex", margin: "auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <img
            src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg?v=1"
            alt="img1"
          />
          <p>
            <b>Lung Care</b>
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <img
            src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg?v=1"
            alt="img2"
          />
          <p>
            <b>Weight Care</b>
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <img
            src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg?v=1"
            alt="img3"
          />
          <p>
            <b>Women's Care</b>
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <img
            src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg?v=1"
            alt="img4"
          />
          <p>
            <b>Bones And Joint Pain</b>
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <img
            src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg?v=1"
            alt="img5"
          />
          <p>
            <b>Cold And Fever</b>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
