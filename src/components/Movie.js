import { useState } from "react";
import MovieItem from "./MovieItem";
import LoadingBar from 'react-top-loading-bar'


const Movie = () => {

    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [progress, setProgress] = useState(0)
    const handleChange = (event)=>{
        setValue(event.target.value);
    }
    const UpdateMovie = async () => {
        setProgress(10);
        let url = `https://www.omdbapi.com/?apikey=b27b396b&t=${value}`;
        let data = await fetch(url);
        setProgress(30);
        let parsedData = await data.json();
        console.log(parsedData);
        setProgress(75);
        setResult(<MovieItem  src={parsedData.Poster} name={parsedData.Title} plot={parsedData.Plot} actors={parsedData.Actors} awards={parsedData.Awards} earning={parsedData.BoxOffice} country={parsedData.Country} director={parsedData.Director} genre={parsedData.Genre} lang={parsedData.Language} release={parsedData.Released} time={parsedData.Runtime} type={parsedData.Type} writer={parsedData.Writer} imdb={parsedData.imdbRating} />);
        setProgress(100); 
    };

    return (
        <>
              <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
            <div className="container box my-5">
                <input type="text" value={value} onChange={handleChange} placeholder='search by movie name' className="put" />
                <button className="btn btn-success" onClick={UpdateMovie}> search</button>
            </div>
            {result}
        </>
    )
};
export default Movie;