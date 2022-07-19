import React, { Component } from 'react'
import back from "../images/back.jpg";

export default class Newsitem extends Component {
  articals = []

  constructor() {
    super();
    this.state = {
      articals: this.articals
    }
  }

  async componentDidMount() {
    let url = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8ff0f8279ddd45f789a30db8151c34be&pageSize=5'
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
              <div className="carousel-item" key={elements.url}>
                <img className="w-100 max" src={elements.urlToImage ? elements.urlToImage : { back }} alt="Imagealter" />
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-7">
                        <h4 className="display-6 text-light black text-center animated slideInDown"><p className='color'> {elements.title ? elements.title : ""}.....</p></h4>
                        <a href={elements.url} className="btn btn-danger py-sm-3 px-sm-5">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </>
    )
  }
}
