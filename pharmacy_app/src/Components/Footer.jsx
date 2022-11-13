export default function Footer() {
  return (
    <>
      <hr style={{ margin: "auto", width: "90%" }}></hr>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col d-flex flex-column align-items-start">
            {/* Column */}
            <b>
              <p>Company</p>
            </b>
            <p>About LifeCare</p>
            <p>Customers Speak</p>
            <p>In the News</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Fees and Payment Policy</p>
            <p>Shipping and Delivery Policy</p>
            <p>Return, Refund and Cancellation Policy</p>
            <p>Contact</p>
          </div>
          <div class="col d-flex flex-column align-items-start">
            <b>
              <p>Shopping</p>
            </b>
            <p>Browse by A-Z</p>
            <p>Browse by Manufacturers</p>
            <p>Health Articles</p>
            <p>Offers / Coupons</p>
            <p>FAQs</p>
          </div>
          <div class="col d-flex flex-column align-items-start">
            <b>
              <p>Social</p>
            </b>
            <p>Patients Alike</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Youtube</p>
            <p>Refer & Earn</p>
          </div>
          <div class="col d-flex flex-column align-items-start">
            <b>
              <p>SUBSCRIBE TO OUR NEWSLETTER</p>
            </b>
            <p>
              Get a free subscription to our health and fitness tip and stay
              tuned to our latest offers
            </p>
            <input
              style={{
                width: "80%",
                border: "none",
                borderBottom: "1px solid black",
                textAlign: "center",
                marginTop: "20px",
              }}
              type="email"
              placeholder="Enter your email address"
            />
            <div class="d-flex flex-row m-auto">
              <img
                style={{ width: "100px", height: "40px" }}
                src="https://www.netmeds.com/assets/gloryweb/images/icons/play_store.png"
                alt=""
                srcset=""
              />
              <img
                style={{ width: "100px", height: "40px" }}
                src="https://www.netmeds.com/assets/gloryweb/images/icons/app_store.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <hr style={{ margin: "auto", width: "90%" }}></hr>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col">Medicine</div>
          <div class="col">Wellness</div>
          <div class="col">Lab Tests</div>
          <div class="col">Beauty</div>
          <div class="col">Copyright© 2022. All Rights Reserved.</div>
        </div>
      </div>
    </>
  );
}
