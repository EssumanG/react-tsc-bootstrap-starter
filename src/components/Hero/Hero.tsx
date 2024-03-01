import heroImg from "../../assets/hero-img.svg";


const Hero:React.FC = () => {
  return (
    <>
      <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
          <div className="container">
              <div className="d-sm-flex align-items-center justify-content-between">
                  <div>
                    <h1>Become A <span className="text-warning">Web Developer</span></h1>
                    <p className="lead my-4">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit harum alias perspiciatis veniam delectus.
                    </p>
                    <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#enroll">Start The Enrollment</button>
                  </div>
                  <img className="img-fluid w-50 d-none d-sm-block" src={heroImg} alt="" />
              </div>
          </div>
      </section>

      {/* MODAL */}
<div className="modal fade" id="enroll" tabIndex={-1} aria-labelledby="enrollLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="enrollLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p className="lead">Fill out this form and we will get back go you</p>
        <form action="">
          <div className="mb-3">
            <label htmlFor="first-name" className="col-form-label">First Name:</label>
            <input type="text" className="form-control" id="first-name" />
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="col-form-label">Last Name:</label>
            <input type="text" className="form-control" id="last-name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="col-form-label">Email:</label>
            <input type="text" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="col-form-label">Phone:</label>
            <input type="text" className="form-control" id="phone" />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Hero