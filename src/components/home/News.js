import React, { Component } from 'react'
import back from "../../images/back.jpg";

export default class Newsitem extends Component {
    articals = []

    constructor() {
        super();
        this.state = {
            articals: this.articals
        }
    }

    async componentDidMount() {
        let url = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8ff0f8279ddd45f789a30db8151c34be&pageSize=15'
        let data = await fetch(url);
        let parseData = await data.json();
        await this.setState({ articals: parseData.articles })
    }

    render() {
        return (
            <>
                {
                    this.state.articals.map((elements) => {
                        return (
                            <div className="row"  key={elements.url}>
                                <div className="col-sm-9" >
                                    <div className="card-body">
                                        <a href={elements.url}> <h5 className="card-title">{elements.title ? elements.title.slice(0, 40) : ""}</h5></a>
                                        <p className="card-text">{elements.description ? elements.description.slice(0, 85) : ""}.....</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <img className="card-img-top my-4" src={elements.urlToImage ? elements.urlToImage : { back }} alt="-" />
                                </div>
                                <hr />
                            </div>

                        )
                    })
                }
            </>
        )
    }
}
