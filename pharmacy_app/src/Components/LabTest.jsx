import Footer from "./Footer";
import Navbar from "./Navbar";

const LabTest = () => {
  return (
    <>
      <Navbar />

      <div className="d-flex m-auto w-90%">
        <div className="m-auto mt-4 mb-4">
          <img
            src="https://www.netmeds.com/images/cms/wysiwyg/cms/1664953293_db.jpg"
            alt=""
            srcset=""
          />
        </div>

        <div className="m-auto">
          <form>
            <label className="form-label">Please fill in your details</label>
            <div class="mb-3">
              <label
                for="exampleInputName"
                class="form-label d-flex justiContent-start"
              >
                <b>NAME</b>
              </label>
              <input type="name" class="form-control" />
            </div>

            <div class="mb-3">
              <label
                for="exampleInputMobile"
                class="form-label d-flex justiContent-start"
              >
                <b>Mobile</b>
              </label>
              <input type="phone" class="form-control" />
            </div>

            <div class="mb-3">
              <label
                for="exampleInputPin"
                class="form-label d-flex justiContent-start"
              >
                <b>PinCode</b>
              </label>
              <input type="name" class="form-control" />
            </div>

            <select
              class="form-select mb-4"
              aria-label="Default select example"
            >
              <option selected>Select</option>
              <option value="1">Complete Hologram</option>
              <option value="2">Liver Profile</option>
              <option value="3">Diabetes</option>
              <option value="4">Thyroid Profile</option>
              <option value="5">Vitamin Test</option>
              <option value="6">Testosterone</option>
              <option value="7">Others</option>
            </select>

            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                I agree to LifeCare Terms and Conditions.
              </label>
            </div>

            <button type="submit" class="btn btn-info text-white fw-bold">
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LabTest;
