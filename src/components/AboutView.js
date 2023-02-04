import Hero from "./Hero"

const AboutView = () => {
    return (
        <>
            <Hero text="About us" />
            <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
            We are cinephiles who aim to bring movie lovers closer to their passion. Simple words, honest results - that's what we stand for."
            </p>



          </div>
        </div>
      </div>
        </>

    )
}

export default AboutView