import React, {Component} from "react";
import Film from './Film'


class FilmList extends Component{

    render(){
        const allFilms = this.props.films.map(film => {
            return(
                <Film name = {film.name} key = {film.id} url = {film.url} />
            )
        })

        return(
            <div className="comment-list">
                {allFilms}
            </div>
        )
    }
}

export default FilmList;
