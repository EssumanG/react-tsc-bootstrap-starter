
const Questions = () => {
  return (
    <section id="questions" className="p-5">
        <div className="container">
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <div className="accordion accordion-flush" id="questions">
                {/* ITEM 1 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-one">
                            Where exactly are you located?
                        </button>
                    </h2>
                    <div id="question-one" className="accordion-collapse collapse" data-bs-parent="#questions">
                        <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quam quod explicabo animi non quis alias accusamus numquam tempore! Iure nobis possimus dolores praesentium ad asperiores animi provident laboriosam laudantium porro culpa at necessitatibus placeat ipsam maxime quidem molestiae sint magni est expedita numquam, exercitationem odit consequatur? Explicabo, ipsum ratione.</div>
                    </div>
                </div>
                {/* ITEM 2 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-two">
                            How much does it cont to attend?
                        </button>
                    </h2>
                    <div id="question-two" className="accordion-collapse collapse" data-bs-parent="#questions">
                        <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quam quod explicabo animi non quis alias accusamus numquam tempore! Iure nobis possimus dolores praesentium ad asperiores animi provident laboriosam laudantium porro culpa at necessitatibus placeat ipsam maxime quidem molestiae sint magni est expedita numquam, exercitationem odit consequatur? Explicabo, ipsum ratione.</div>
                    </div>
                </div>
                {/* ITEM 3 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-three">
                            What do I need to Know ?
                        </button>
                    </h2>
                    <div id="question-three" className="accordion-collapse collapse" data-bs-parent="#questions">
                        <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quam quod explicabo animi non quis alias accusamus numquam tempore! Iure nobis possimus dolores praesentium ad asperiores animi provident laboriosam laudantium porro culpa at necessitatibus placeat ipsam maxime quidem molestiae sint magni est expedita numquam, exercitationem odit consequatur? Explicabo, ipsum ratione.</div>
                    </div>
                </div>
                {/* ITEM 4 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-four">
                            How Do I Sign Up?
                        </button>
                    </h2>
                    <div id="question-four" className="accordion-collapse collapse" data-bs-parent="#questions">
                        <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quam quod explicabo animi non quis alias accusamus numquam tempore! Iure nobis possimus dolores praesentium ad asperiores animi provident laboriosam laudantium porro culpa at necessitatibus placeat ipsam maxime quidem molestiae sint magni est expedita numquam, exercitationem odit consequatur? Explicabo, ipsum ratione.</div>
                    </div>
                </div>
                {/* ITEM 5 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-five">
                            Do you help me find a job?
                        </button>
                    </h2>
                    <div id="question-five" className="accordion-collapse collapse" data-bs-parent="#questions">
                        <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quam quod explicabo animi non quis alias accusamus numquam tempore! Iure nobis possimus dolores praesentium ad asperiores animi provident laboriosam laudantium porro culpa at necessitatibus placeat ipsam maxime quidem molestiae sint magni est expedita numquam, exercitationem odit consequatur? Explicabo, ipsum ratione.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Questions