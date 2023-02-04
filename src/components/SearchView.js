import Hero from "./Hero"
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const detailUrl = `/movie/${movie.id}`

    return (
        <div className="col-12 col-lg-4 col-md-6 col-2 my-4">
            <div
                className="card"
                style={{ width: '18rem' }}>
                <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <p className="card-text">{movie.overview}</p>
                    <Link
                        to={detailUrl}
                        className="btn btn-primary">
                        Show details
                    </Link>
                </div>
            </div>
        </div>
    )
}


function SearchView({ keyword, searchResults }) {
    const title = `You are searching for ${keyword}`;

    const resultsHtml = searchResults && searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })

    return (
        <>
            <Hero text={title} />
            <div>
                {resultsHtml && <div className="container">
                    <div className="row">
                        {resultsHtml}
                    </div>
                </div>}
            </div>
        </>
    )
}

export default SearchView
