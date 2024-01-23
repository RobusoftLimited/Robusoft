import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({name: "",email: "",message: ""});
  
  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}` );
  }

  return (
    <section id="contact" className="text-center">
      <div className="container">
        <h1>CONTACT US</h1>
        <p className="mb-5">
          We are here to help our clients succeed in their digital transformation endeavors.
          <br/>If you have some questions or need help, Please Contact Us <br />
        </p>

        <form onSubmit={handleSubmit} className="contact-form col-md-11 col-lg-9 mx-auto">
          <div className="form-row">
            <div className="col form-group">
              <input type="text" id="name" name="name"
                value={formData.name} onChange={handleChange}
                className="form-control" placeholder="Name" />
            </div>
            <div className="col form-group">
              <input id="email" name="email"
                type="email" value={formData.email} onChange={handleChange}
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-group">
            <textarea  
              name="message" id="message"
              value={formData.message} onChange={handleChange}
              className="form-control"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
