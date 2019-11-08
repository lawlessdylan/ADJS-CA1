/**
 * @Author: dylanlawless
 * @Date:   2019-11-07T12:38:26+00:00
 * @Last modified by:   dylanlawless
 * @Last modified time: 2019-11-08T21:14:08+00:00
 */


import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';


 function ArticleModal(props) {

   const [show, setShow] = useState(false);

   const handleClose = () => {

     setShow(false);

   };
   const handleShow = () => {
     setShow(true);

};
   return (
     <div>
       <Button className="modal-button"  onClick={handleShow}>
         Read more
       </Button>
       <Modal className="my-modal" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <img className="modal-image img-responsive col-xs-12" src={props.item.urlToImage} alt={props.item.title} />
         <Modal.Header closeButton>

         <Modal.Title>{props.item.title}</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            {props.item.description}
         </Modal.Body>


         <Modal.Footer>
         <Button variant="outline-dark" onClick={handleClose}>
           Close
         </Button>
             <Button href={props.item.url} target="blank"className="visit-button" variant="primary">
               Visit full article
             </Button>
         </Modal.Footer>
       </Modal>

    </div>
   );
 }

 export default ArticleModal;
