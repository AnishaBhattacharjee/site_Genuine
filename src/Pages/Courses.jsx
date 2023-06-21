import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Component/Layout/Layout'

const Courses = () => {
  return (
    <>
    <Layout>
    <div>
  <div className="breadcrumbs">
    <div className="container">
      <h2>Courses</h2>
      <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
    </div>
  </div>
  
  <section id="courses" className="courses">
    <div className="container" data-aos="fade-up">
      <div className="row" data-aos="zoom-in" data-aos-delay={100}>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="course-item">
            <img src="assets/img/course-1.jpg" className="img-fluid" alt="..." />
            <div className="course-content">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Web Development</h4>
                <p className="price">$169</p>
              </div>
              <h3><a href="course-details.html">Website Design</a></h3>
              <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
              <div className="trainer d-flex justify-content-between align-items-center">
                <Link><button className="apply-btn">Apply</button></Link>
              </div>
            </div>
          </div>
        </div> {/* End Course Item*/}
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
          <div className="course-item">
            <img src="assets/img/course-2.jpg" className="img-fluid" alt="..." />
            <div className="course-content">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Marketing</h4>
                <p className="price">$250</p>
              </div>
              <h3><a href="course-details.html">Search Engine Optimization</a></h3>
              <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
              <div className="trainer d-flex justify-content-between align-items-center">
                 <Link><button className="apply-btn">Apply</button></Link>
              </div>
            </div>
          </div>
        </div> {/* End Course Item*/}
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
          <div className="course-item">
            <img src="assets/img/course-3.jpg" className="img-fluid" alt="..." />
            <div className="course-content">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Content</h4>
                <p className="price">$180</p>
              </div>
              <h3><a href="course-details.html">Copywriting</a></h3>
              <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
              <div className="trainer d-flex justify-content-between align-items-center">
                 <Link><button className="apply-btn">Apply</button></Link>
              </div>
            </div>
          </div>
        </div> {/* End Course Item*/}
      </div>
    </div>
  </section>
</div>
    </Layout>
        

    </>
  )
}

export default Courses