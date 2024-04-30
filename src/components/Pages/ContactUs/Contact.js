import React, { useState } from "react";
import "../../../styles/ContactUs.css";
import { useMobile } from "../../globalComponents/MobileContext/IsMobileContext";
const ContactUsPage = () => {
  const { isMobile } = useMobile();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [service, setService] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorObject = {};

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

    if (Object.keys(errorObject).length > 0) {
      setErrors(errorObject);
    } else {
      // Form submission logic here
      console.log("Form submitted successfully!");
    }
  };
  return (
    <div style={{ marginTop: "10rem", background: "#FFF" }}>
      <div className="ContactUsHeader">
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Aquarian+Immigration+Services/@28.4082328,77.070377,15z/data=!4m6!3m5!1s0x390d23f44c7f8021:0x589c7dd32b5c2779!8m2!3d28.4082328!4d77.070377!16s%2Fg%2F11vqm85pq7?entry=ttu"
        >
          <p className="link">Home {" > "}Contact Us</p>
          <div className="header-content">
            <h1 className="heading-about">Contact Us.</h1>
          </div>
        </a>
        {!isMobile && (
          <div className="address-content">
            <div
              style={{
                display: "flex",
                paddingTop: "10%",
                width: "80%",
                paddingBottom: "10%",
                marginLeft: "10%",
              }}
            >
              <div
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  gap: "5rem",
                }}
              >
                <h className="address-heading">Address</h>
                <br />
                <br />
                <a
                  href="https://www.google.com/maps/place/Aquarian+Immigration+Services/@28.4082328,77.070377,15z/data=!4m6!3m5!1s0x390d23f44c7f8021:0x589c7dd32b5c2779!8m2!3d28.4082328!4d77.070377!16s%2Fg%2F11vqm85pq7?entry=ttu"
                  className="address"
                >
                  122A, Suncity Success Tower, Golf Course Ext Rd, Sector 65,
                  Gurugram, Haryana 122011
                </a>
                <br />
                <br />
                <h className="address-heading">Email</h>
                <br />
                <br />
                <a href="mailto:enq@iaquarian.com" className="address">
                  enq@iaquarian.com
                </a>
                <br />
                <br />
                <h className="address-heading">phone</h>
                <br />
                <br />
                <a href="tel:+919811118516" className="address">
                  +91- 98111 18516
                </a>
                <br />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="registration-form">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name *</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={errors.firstName ? "error" : ""}
              />
              {errors.firstName && (
                <div className="error-message">{errors.firstName}</div>
              )}
            </div>

            <div className="form-group">
              <label>Last Name </label>
              <input
                type="text"
                value={lastName}
                className={errors.lastName ? "error" : ""}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && (
                <div className="error-message">{errors.lastName}</div>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </div>

            <div className="form-group">
              <label>Contact Number *</label>
              <input
                type="tel"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className={errors.contactNumber ? "error" : ""}
              />
              {errors.contactNumber && (
                <div className="error-message">{errors.contactNumber}</div>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Time Slot *</label>
              <select
                value={timeSlot}
                className={errors.timeSlot ? "error" : ""}
                onChange={(e) => setTimeSlot(e.target.value)}
              >
                <option value="">Select Time Slot</option>
                <option value="9 A.M. - 12 P.M.">9 A.M. - 12 P.M.</option>
                <option value="12 P.M. - 3 P.M.">12 P.M. - 3 P.M.</option>
                <option value="3 P.M. - 6 P.M.">3 P.M. - 6 P.M.</option>
              </select>
              {errors.timeSlot && (
                <div className="error-message">{errors.timeSlot}</div>
              )}
            </div>

            <div className="form-group">
              <label>Which Service you are interested in? *</label>
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
              {errors.service && (
                <div className="error-message">{errors.service}</div>
              )}
            </div>
          </div>
          <div className="form-group">
            <label>Comments (Optional)</label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </div>

          <button type="submit">Enquire Now</button>
        </form>
      </div>
      {isMobile && (
        <div className="address-content">
          <div
            style={{
              display: "flex",
              paddingTop: "10%",
              width: "80%",
              paddingBottom: "10%",
              marginLeft: "10%",
            }}
          >
            <div
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                gap: "5rem",
              }}
            >
              <h className="address-heading">Address</h>
              <br />
              <br />
              <a
                href="https://www.google.com/maps/place/Aquarian+Immigration+Services/@28.4082328,77.070377,15z/data=!4m6!3m5!1s0x390d23f44c7f8021:0x589c7dd32b5c2779!8m2!3d28.4082328!4d77.070377!16s%2Fg%2F11vqm85pq7?entry=ttu"
                className="address"
              >
                122A, Suncity Success Tower, Golf Course Ext Rd, Sector 65,
                Gurugram, Haryana 122011
              </a>
              <br />
              <br />
              <h className="address-heading">Email</h>
              <br />
              <br />
              <a href="mailto:enq@iaquarian.com" className="address">
                enq@iaquarian.com
              </a>
              <br />
              <br />
              <h className="address-heading">phone</h>
              <br />
              <br />
              <a href="tel:+919811118516" className="address">
                +91- 98111 18516
              </a>
              <br />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUsPage;
