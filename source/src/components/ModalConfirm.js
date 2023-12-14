import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalConfirm({show,handleClose,textmodal}) {

  return (
    <div>
    <>
     

      <Modal 
      show={show}
       onHide={handleClose} 
       backdrop="static"
       keyboard={false}>

        <Modal.Header style={{backgroundColor:"#a50034"}} closeButton>
          <Modal.Title style={{color:"white"}}>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{fontSize:"17px",fontWeight:"400"}}>{textmodal}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" style={{backgroundColor:"#a50034",border:"none"}} onClick={()=>{
            handleClose();
        }}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
 </div>

  );
}

export default ModalConfirm;