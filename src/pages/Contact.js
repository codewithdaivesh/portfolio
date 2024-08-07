import React, { useState } from "react";

const Contact = () => {
    const [userData, setUserData] = useState({
       name: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };

    // connect with firebase
    const submitData = async (event) => {
        event.preventDefault();
        const { name, phone, email, subject, message } = userData;

        if (name && phone && email && subject && message) {
            const res = fetch(
                "https://contact-portfolio-iota.vercel.app/api/addcontact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        phone,
                        email,
                        subject,
                        message,
                    }),
                }
            );

            if (res) {
                setUserData({
                    name : "",
                    phone: "",
                    email: "",
                    subject: "",
                    message: "",
                });
                alert("Thank You for Contact us.");
            } else {
                alert("plz fill the data");
            }
        } else {
            alert("plz fill the data");
        }
    };

    return (
        <>

            <section className="contactus-section overflow-hidden">

                <div className="container">
                    <h1 className="conatct-heading text-center fw-bold">
                        Contact Us.
                    </h1>
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">

                            <div className="row">
                                <div className="contact-leftside col-12 col-lg-5">
                                    <h1 className="main-heading fw-bold">
                                        Connect With Us.
                                    </h1>
                                    <p className="contact-para">
                                        If you have any queries, please do not hesitate to contact me.
                                    </p>

                                    <div class="d-flex mb-3 simpleCircle">
                                        <i class="bi bi-geo-alt"></i>
                                        <p class="contact-info my-auto ms-4">Siddhivinayak plaza Thengode (Satana) </p>
                                    </div>

                                    <div class="d-flex mb-3 simpleCircle">
                                        <i class="bi bi-whatsapp"></i>
                                        <p class="contact-info my-auto ms-4">+91 9322142526</p>
                                    </div>

                                    <div class="d-flex mb-3 simpleCircle">
                                        <i class="bi bi-envelope"></i>
                                        <p class="contact-info my-auto ms-4">daiveshsuryawanshi@hotmail.com</p>
                                    </div>

                                </div>

                                {/* right side contact form  */}
                                <div className="contact-rightside col-12 col-lg-7">
                                    <form method="POST">
                                        <div className="row">
                                            <div className="col-12 col-lg-12 contact-input-feild">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Full Name"
                                                    value={userData.name}
                                                    onChange={postUserData}

                                                />
                                            </div>
                                            
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Phone Number "
                                                    value={userData.phone}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Email ID"
                                                    value={userData.email}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-feild">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Subject"
                                                    value={userData.subject}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 ">
                                                <input
                                                    type="text"
                                                    name="message"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Enter Your Message"
                                                    value={userData.message}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>
                                        <div class="form-check form-checkbox-style">
                                            <button
                                                type="submit"
                                                className="btn btn-style w-100"
                                                onClick={submitData}>
                                                Submit
                                            </button>
                                        </div>


                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
