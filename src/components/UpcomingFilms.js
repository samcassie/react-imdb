import React, {Component} from "react";

class UpcomingFilms extends Component{

    constructor(props){
        super(props);
        this.state = {
                url: "https://www.imdb.com/calendar/?region=gb"
        }
    }

    render(){
        return(
            <a href={this.state.url} className="upcoming-films">View more upcoming releases > > </a>
        )
    }


}

export default UpcomingFilms;
