import ReactImg from "../../assets/react.svg" 

const Content = () => {
  return (
    <section id="learn" className="p-5 bg-dark text-light">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-md p-5">
                    <h2>Learn React</h2>
                    <p className="lead">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt maxime facilis iure possimus, id nisi?
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio deserunt doloremque facere expedita, eaque ea impedit laboriosam a. Quasi maxime, ipsum laudantium ab et adipisci nam veritatis obcaecati atque.</p>
                    <a href="#" className="btn btn-light mt-3">
                        <i className="bi bi-chevron-right"></i>Read More
                    </a>
                </div>
                <div className="col-md">
                    <img src={ReactImg} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Content