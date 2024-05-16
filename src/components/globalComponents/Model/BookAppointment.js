import React, { useState, useEffect } from "react";
import "../../../styles/BookAppointmentModal.css";
import "react-toastify/dist/ReactToastify.css";
import formLogo from "../../../Assets/formLogo.png";
import { toast } from "react-toastify";
const BookAppointmentModel = ({ showForm, setShowForm, dataForm }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [service, setService] = useState("");
  const [serviceOther, setServiceOther] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorObject = {};

    if (
      !firstName ||
      !lastName ||
      !email ||
      !contactNumber ||
      !timeSlot ||
      !service ||
      (service === "Other" && !serviceOther)
    ) {
      toast.error("Please fill out all required fields.", {});
    }
    if (!firstName) {
      errorObject.firstName = "First Name is required";
    }
    if (!lastName) {
      errorObject.lastName = "Last Name is required";
    }
    if (!email) {
      errorObject.email = "Email Address is required";
    }
    if (!contactNumber) {
      errorObject.contactNumber = "Contact Number is required";
    }
    if (!timeSlot) {
      errorObject.timeSlot = "Time Slot is required";
    }
    if (!service) {
      errorObject.service = "Service is required";
    }
    if (service === "Other" && !serviceOther) {
      errorObject.serviceOther = "Please specify your service";
    }

    if (Object.keys(errorObject).length > 0) {
      setErrors(errorObject);
    } else {
      setFirstName("");
      setLastName("");
      setEmail("");
      setContactNumber("");
      setTimeSlot("");
      setService("");
      setServiceOther("");
      setComments("");
      setErrors("");
      toast.success("You have Successfully booked your Appointment!");
      setShowForm(false);
    }
  };
  useEffect(() => {
    if (showForm) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showForm]);

  const handleOutsideClick = (event) => {
    if (event.target.closest(".modal") === null) {
      setShowForm(false);
    }
  };
  return (
    <>
      {showForm ? (
        <>
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              borderRadius: "15px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              position: "fixed",
              inset: "0px",
              zIndex: "99",
              outline: "2px solid transparent",
              outlineOffset: "2px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "auto",
              marginBottom: "auto",
            }}
            className="modal"
          >
            <div className="form-field">
              <div style={{ display: "flex", marginBottom: "1rem" }}>
                <img src={formLogo} alt="" />
                <h1>Book Your Appointment</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-row-popup">
                  <div className="form-group">
                    <label className={errors.firstName ? "error-label" : ""}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={errors.firstName ? "error" : ""}
                    />
                  </div>

                  <div className="form-group">
                    <label className={errors.lastName ? "error-label" : ""}>
                      Last Name *{" "}
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      className={errors.lastName ? "error" : ""}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row-popup">
                  <div className="form-group">
                    <label className={errors.email ? "error-label" : ""}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={errors.email ? "error" : ""}
                    />
                  </div>

                  <div className="form-group">
                    <label
                      className={errors.contactNumber ? "error-label" : ""}
                    >
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      className={errors.contactNumber ? "error" : ""}
                    />
                  </div>
                </div>
                <div className="form-row-popup">
                  <div className="form-group">
                    <label className={errors.timeSlot ? "error-label" : ""}>
                      Preferred Time Slot *
                    </label>
                    <select
                      value={timeSlot}
                      className={errors.timeSlot ? "error" : ""}
                      onChange={(e) => setTimeSlot(e.target.value)}
                    >
                      <option value="">Select Time Slot</option>
                      <option value="9 A.M. - 12 P.M.">9 A.M. - 12 P.M.</option>
                      <option value="12 P.M. - 3 P.M.">12 P.M. - 3 P.M.</option>
                      <option value="3 P.M. - 6 P.M.">3 P.M. - 6 P.M.</option>
                      <option value="Anytime">Anytime</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className={errors.service ? "error-label" : ""}>
                      Which Service you are interested in? *
                    </label>
                    <select
                      value={service}
                      className={errors.service ? "error" : ""}
                      onChange={(e) => setService(e.target.value)}
                    >
                      <option value="">Select Service</option>
                      <option value="Permanent Immigration">
                        Permanent Immigration
                      </option>
                      <option value="Business visit">Business visit</option>
                      <option value="Study">Study</option>
                      <option value="Work">Work</option>
                      <option value="Visit">Visit</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                {service === "Other" && (
                  <div>
                    <label className={errors.serviceOther ? "error-label" : ""}>
                      Please Specify Your Service *
                    </label>
                    <textarea
                      type="text"
                      value={serviceOther}
                      onChange={(e) => setServiceOther(e.target.value)}
                      className={errors.serviceOther ? "error" : ""}
                    />
                  </div>
                )}
                {service !== "Other" && (
                  <>
                    <label>Comments (Optional)</label>
                    <textarea
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                    />
                  </>
                )}

                <button className="Submitbutton" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default BookAppointmentModel;
