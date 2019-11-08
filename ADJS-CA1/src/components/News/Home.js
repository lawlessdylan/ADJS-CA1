/**
 * @Author: dylanlawless
 * @Date:   2019-10-21T09:44:33+01:00
 * @Last modified by:   dylanlawless
 * @Last modified time: 2019-11-08T21:14:10+00:00
 */
import React, { Component } from 'react';
import NewSingle from './NewSingle';


class Home extends Component{

  constructor(props){
      super(props);
      this.state = {
        news: [],
        term: ''
      }
  }

  componentDidMount() {

    const url = 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-22&sortBy=publishedAt&apiKey=bdfcbd893d5843e3af83d4b06562157d';

    fetch(url)
      .then((response) => {
          return response.json();
      })
      .then((data) => {
          this.setState({
            news: data.articles

          })
          console.log(data);
      })
      .catch((error) => console.log(error));
  }

  renderItems(){

      return this.state.news.map((item) => {

        if(item.urlToImage === null){

              item.urlToImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_MF_p8s1Thjbsza52U28KF7tRFbUP-tzwSt0hQd8_Assq23jF";
        }

        return (
                <NewSingle key={item.url} item={item} />

        )
      });
  }

  render() {
    return (

          <div className="container">
          <div>
              <h3 className="page-heading">MOST RECENT</h3>
              <hr />
          </div>
            <div className="row">
                {this.renderItems()}
            </div>

      </div>
    );
  }
}

export default Home;
// return
// <ArticleModal data={news} />
