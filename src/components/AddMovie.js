import{useState}from 'react'
import {Button,Modal,FormControl} from "react-bootstrap";
function AddMovie({newMovie,setNewMovie,Add}) {
    const handleChange=(e)=>{
        setNewMovie({...newMovie,[e.target.name]: e.target.value})
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
              <Button variant="primary" onClick={handleShow}>
        Add a movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie </Modal.Title>
        </Modal.Header>
        <Modal.Body><FormControl  type="text" 	placeholder='Title' className="mr-sm-2" name='Title' onChange={handleChange}/> 
        <FormControl  type="text" 	placeholder='Poster' className="mr-sm-2" name='Poster' onChange={handleChange}/>
        <FormControl  type="text" 	placeholder='rate' className="mr-sm-2" name='rate' onChange={handleChange}/>
        <FormControl  type="text" 	placeholder='Description' className="mr-sm-2" name='Description' onChange={handleChange}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();Add(newMovie)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AddMovie
