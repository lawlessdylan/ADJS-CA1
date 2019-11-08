/**
 * @Author: dylanlawless
 * @Date:   2019-10-21T09:50:35+01:00
 * @Last modified by:   dylanlawless
 * @Last modified time: 2019-11-08T21:14:14+00:00
 */


import React from 'react';
import ArticleModal from './Modal';


const NewSingle  = ({item}) => (

    <div className="col-sm-12 col-md-6 col-lg-4 ">
            <div className="card">
                <div className="card-image">
                    <img className="article-image img-responsive" src={item.urlToImage} alt={item.title} />
                    <div className="caption carousel-caption">
                    <span>{item.source.name}</span>
                </div>
                </div>
                <div className="card-body">
                    <div className="article-title">
                        <p>{item.title}</p>
                    </div>
                    <div className="small-details">
                        <p>{item.author} - {item.source.name}</p>
                    </div>
                    <hr />
                    <div className="">
                        <ArticleModal key={item.url} item={item} />
                    </div>
                </div>
          </div>
    </div>
);


export default NewSingle;
