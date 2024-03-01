import MapLocation from "./MapLocation"


const Contact = () => {
  return (
    <section className='p-5'>
        <div className="container">
            <div className="row gap-4">
                <div className="col-md">
                    <h2 className="text-center mb-4">Contact Info</h2>
                    <ul className="list-group list-group-flush lead">
                        <li className="list-group-item">
                            <span className="fw-bold">Main Location:</span> 50 Main st Boston MA
                        </li>
                        <li className="list-group-item">
                            <span className="fw-bold">Enrollment Phone:</span> (222) 222-2222                        </li>
                        <li className="list-group-item">
                            <span className="fw-bold">Student Phone:</span> (111) 111-1111
                        </li>
                        <li className="list-group-item">
                            <span className="fw-bold">Enrollment Email:</span> enroll@leagacy.test
                        </li>
                        <li className="list-group-item">
                            <span className="fw-bold">Student Email:</span> student@leagacy.test
                        </li>
                    </ul>
                </div>
                <div className="col-md">
                    <MapLocation/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact