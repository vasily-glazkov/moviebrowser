import Hero from "./Hero"

const Home = () => {
  return (
    <>
      <Hero text="Welcome to Movie Browser" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
          <p className="lead">
            Movie Browser is the perfect destination for movie enthusiasts who want to stay updated with the latest releases and explore different genres. With its sleek and user-friendly interface, you can easily search for your favorite movies and find all the information you need. Whether you're in the mood for a romantic comedy, a sci-fi thriller, or an action-packed adventure, Movie Browser has got you covered.
            <br /><br />
            With Movie Browser, you can explore the world of movies like never before. Whether you're a casual movie-watcher or a serious film buff, you'll find something here to suit your taste. So sit back, grab some popcorn, and start browsing!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home