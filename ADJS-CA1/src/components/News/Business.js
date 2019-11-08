/**
 * @Author: dylanlawless
 * @Date:   2019-10-22T19:36:50+01:00
 * @Last modified by:   dylanlawless
 * @Last modified time: 2019-11-08T17:52:47+00:00
 */


 /**
  * @Author: dylanlawless
  * @Date:   2019-10-22T19:19:14+01:00
 * @Last modified by:   dylanlawless
 * @Last modified time: 2019-11-08T17:52:47+00:00
  */

 import React, { Component } from 'react';
 import NewSingle from './NewSingle';


 class Business extends Component{

   constructor(props){
       super(props);
       this.state = {
         news: [],
         date: ''
       }
   }

   componentDidMount() {
     const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bdfcbd893d5843e3af83d4b06562157d';

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
             // console.log('Kk');
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
           <h3 className="page-heading">BUSINESS</h3>
           <hr />
       </div>
           <div className="row">
             {this.renderItems()}
           </div>
       </div>
     );
   }
 }

 export default Business;
