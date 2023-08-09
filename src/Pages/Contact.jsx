import React from 'react'
import Layout from '../Component/Layout/Layout'

const Contact = () => {
  return (
    <>
    <Layout>
    <div>
  <div className="breadcrumbs" data-aos="fade-in">
    <div className="container">
      <h2>Contact Us</h2>
      <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
    </div>
  </div>
  <section id="contact" className="contact">
    <div data-aos="fade-up">
    <iframe style={{border: 0, width: '100%', height: 350}} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d972.7547852318667!2d88.42710132508307!3d22.57542740554807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1687197621292!5m2!1sen!2sin" frameBorder={0} allowFullScreen />
    </div>
    <div className="container" data-aos="fade-up">
      <div className="row mt-5">
        <div className="col-lg-4">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt" />
              <h4>Location:</h4>
              <p>Salt Lake, Sector-5, Webskitters Academy</p>
            </div>
            <div className="email">
              <i className="bi bi-envelope" />
              <h4>Email:</h4>
              <p>info@example.com</p>
            </div>
            <div className="phone">
              <i className="bi bi-phone" />
              <h4>Call:</h4>
              <p>+91 9874563210</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8 mt-5 mt-lg-0">
          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="form-group mt-3">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>
    </Layout>
    
    </>
  )
}

export default Contact