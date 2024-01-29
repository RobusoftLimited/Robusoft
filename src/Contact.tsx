import { useState } from "react";
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  
  const {name, email, message} = formData;
  const invalidForm = name.trim() === '' || email.trim() === ''|| message === '';
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const serviceId = 'contact_service';
    const templateId = 'contact_form';
    const publicKey = 'k8xs3nGFk3ZY3ZyEB';

    //send email
    emailjs.sendForm(serviceId, templateId, event.target, publicKey)
      .then((result)=>{
        toast.success('Message sent. A member of our team will respond asap .');
        //reset form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }, (error:any)=>{
        console.log(error.text);
      })

  };

  return (
    <section id="contact" className="text-center">
      <div className="container">
        <h1>CONTACT US</h1>
        <p className="mt-3">
          We are here to help our clients succeed in their digital
          transformation endeavors.
          <br />
          Get in touch with us today. We would love to hear from you.
          <br />
        </p>
        <span><i className="ti-mobile"></i> +353 85 873 0099</span><br/>
        <span><i className="ti-email"></i> <a href="mailto:galcantarajr@yahoo.com">E-mail: galcantarajr@yahoo.com</a></span><br/>
        <span><i className="ti-home"></i> Ireland Head Office</span>
        <p> Letterkenny, Co. Donegal, Ireland</p>
        <form
          onSubmit={handleSubmit}
          className="contact-form col-md-11 col-lg-9 mx-auto"
        >
          <div className="form-row">
            <div className="col form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col form-group">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="submit"
              disabled={invalidForm}
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
