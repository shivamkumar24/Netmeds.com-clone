import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Home() {
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
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1666362102_Home_Bannernmsnew.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1666362146_Home_Bannernms20.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1666355540_Home_Bannercold.jpg"
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

      <h2 className="mt-2 mb-2">Trending Today</h2>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div className="d-flex m-auto w-100%">
            <img
              className="d-flex w-30% m-auto"
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1666259889_Truuth_web.jpg"
              alt=" "
            />
            <img
              className="d-flex w-30% m-auto"
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1664112035_Dr._Willmar_Schwabe_Mini_banner_web.jpg"
              alt=" "
            />
            <img
              className="d-flex w-30% m-auto"
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1666348912_Gynoveda_mini_web.jpg"
              alt=" "
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

      <h2 className="mt-2 mb-2">Shop by Category</h2>
      <div style={{ display: "flex", margin: "auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <img
            src="https://www.netmeds.com/images/category/3107/thumb/dressing_1.jpg"
            alt="img1"
          />
          <p>
            <b>Dressing</b>
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
            src="https://www.netmeds.com/images/category/501/thumb/family_nutrition_1.jpg"
            alt="img2"
          />
          <p>
            <b>Family Nutrition</b>
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
            src="https://www.netmeds.com/images/category/3141/thumb/respiratory_supplies_1.jpg"
            alt="img3"
          />
          <p>
            <b>Respiratory Supplies</b>
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
            src="https://www.netmeds.com/images/category/3758/thumb/lotions_creams_0.jpg"
            alt="img4"
          />
          <p>
            <b>Lotions & Creams</b>
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
            src="https://www.netmeds.com/images/category/v1/491/thumb/homeopathy_2.jpg"
            alt="img5"
          />
          <p>
            <b>Homeopathy</b>
          </p>
        </div>
      </div>

      <h2 className="mt-4 mb-4">New On Life Care Pharmacy</h2>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div className="d-flex m-auto w-100%">
            <img
              className="d-flex w-30% m-auto"
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1666859388_Mini-banner_web.jpg"
              alt=" "
            />
            <img
              className="d-flex w-30% m-auto"
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1665772763_Sunova__mini_banner_for_web.jpg"
              alt=" "
            />
            <img
              className="d-flex w-30% m-auto"
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1667589313_anuja_-mini-banner-for-web.jpg"
              alt=" "
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

      <h2 className="mt-2 mb-2">Top Brands</h2>
      <div style={{ display: "flex", margin: "auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "20%",
            margin: "auto",
          }}
        >
          <img
            src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/himalaya.jpg?v=14"
            alt="img1"
          />
          <p>
            <b>Himalaya</b>
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
            src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/manforce.jpg?v=14"
            alt="img2"
          />
          <p>
            <b>Manforce</b>
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
            src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dabur.jpg?v=14"
            alt="img3"
          />
          <p>
            <b>Dabur</b>
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
            src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/revital.jpg?v=14"
            alt="img4"
          />
          <p>
            <b>Revital</b>
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
            src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dr-morepen.jpg?v=14"
            alt="img5"
          />
          <p>
            <b>Dr.Morepen</b>
          </p>
        </div>
      </div>

      <h2 className="mt-2 mb-2">Categories in Focus</h2>
      <div style={{ display: "flex", margin: "auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "20%",
            margin: "auto",
          }}
        >
          <img
            src="https://www.netmeds.com/images/category/3087/thumb/feminine_hygiene_1.jpg"
            alt="img1"
          />
          <p>
            <b>Feminine Hygiene</b>
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
            src="https://www.netmeds.com/images/category/v1/525/thumb/body_care_1.jpg"
            alt="img2"
          />
          <p>
            <b>Body Care</b>
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
            src="https://www.netmeds.com/images/category/676/thumb/orthopaedics_1.jpg"
            alt="img3"
          />
          <p>
            <b>Orthopaedics</b>
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
            src="https://www.netmeds.com/images/category/3216/thumb/sports_supplements_1.jpg"
            alt="img4"
          />
          <p>
            <b>Sports Supplements</b>
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
            src="https://www.netmeds.com/images/category/3061/thumb/immunity_booster_1.jpg"
            alt="img5"
          />
          <p>
            <b>Immunity Booster</b>
          </p>
        </div>
      </div>

      <h2 className="mt-2 mb-2">Personal Care</h2>
      <div style={{ display: "flex", margin: "auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "20%",
            margin: "auto",
          }}
        >
          <img
            src="https://www.netmeds.com/images/category/v1/525/thumb/body_care_1.jpg"
            alt="img1"
          />
          <p>
            <b>Body Care</b>
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
            src="https://www.netmeds.com/images/category/3758/thumb/lotions_creams_0.jpg"
            alt="img2"
          />
          <p>
            <b>Lotion & Creams</b>
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
            src="https://www.netmeds.com/images/category/3934/thumb/skin_treatment_1.jpg"
            alt="img3"
          />
          <p>
            <b>Skin Treatment</b>
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
            src="https://www.netmeds.com/images/category/v1/3495/thumb/face_wash_cleansers_1.jpg"
            alt="img4"
          />
          <p>
            <b>Face Wash & Cleansers</b>
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
            src="https://www.netmeds.com/images/category/v1/3566/thumb/shower_gels_body_wash_2.jpg"
            alt="img5"
          />
          <p>
            <b>Shower Gel & Body Wash</b>
          </p>
        </div>
      </div>

      <h2 className="mt-2 mb-2">Men's Grooming</h2>
      <div style={{ display: "flex", margin: "auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "20%",
            margin: "auto",
          }}
        >
          <img
            src="https://www.netmeds.com/images/category/v1/3420/thumb/shaving.jpg?v=1"
            alt="img1"
          />
          <p>
            <b>Shaving</b>
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
            src="https://www.netmeds.com/images/category/v1/3002/thumb/razors_cartridges_2.jpg?v=1"
            alt="img2"
          />
          <p>
            <b>Razors-Cartridge</b>
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
            src="https://www.netmeds.com/images/category/v1/3591/thumb/beard_oil_2.jpg?v=1"
            alt="img3"
          />
          <p>
            <b>Beard Oil</b>
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
            src="https://www.netmeds.com/images/category/v1/3593/thumb/beard_wash_2.jpg?v=1"
            alt="img4"
          />
          <p>
            <b>Beard Wash</b>
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
            src="https://www.netmeds.com/images/category/v1/3704/thumb/hair_gels_waxes_2.jpg?v=1"
            alt="img5"
          />
          <p>
            <b>Hair Gels Waxes</b>
          </p>
        </div>
      </div>

      <h2 className="mt-2 mb-2">Health Concerns</h2>
      <div style={{ display: "flex", margin: "auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "20%",
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
            <b>Bone And Joint Pain</b>
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

      {/* Footer  */}
      <Footer />
    </>
  );
}

{
  /* 


<div style={{display:"flex" m-auto width:"100%" }}>
    <img style={{width:30% display:"flex" margin:"auto"}} src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1666259889_Truuth_web.jpg" alt=" "/>
    <img style={{width:30% display:"flex" margin:"auto"}} src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1665742857_Dabur_Home.jpg" alt=" "/>
    <img style={{width:30% display:"flex" margin:"auto"}} src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1666348912_Gynoveda_mini_web.jpg" alt=" "/>
</div>


*/
}
