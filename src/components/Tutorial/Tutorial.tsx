import fundamentals from "../../assets/fundamentals.svg"

const Tutorial = () => {
  return (
    <section id="learn" className="p-5">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-md">
                    <img src={fundamentals} className="img-fluid" alt="" />
                </div>
                <div className="col-md p-5">
                    <h2>Learn The Fundamentals</h2>
                    <p className="lead">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt maxime facilis iure possimus, id nisi?
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio deserunt doloremque facere expedita, eaque ea impedit laboriosam a. Quasi maxime, ipsum laudantium ab et adipisci nam veritatis obcaecati atque.</p>
                    <a href="#" className="btn btn-light mt-3">
                        <i className="bi bi-chevron-right"></i>Read More
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tutorial