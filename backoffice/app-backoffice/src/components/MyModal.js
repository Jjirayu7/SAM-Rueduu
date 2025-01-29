function MyModal(props) {
  return<>
      <div className="modal" tabIndex="-1" id={props.id}>
          <div className="modal-dialog modal-xl">
<<<<<<< HEAD
              <div className="modal-content custom-modal">
                  <div className="modal-header custom-header">
                      <h2 className="modal-title mx-5">{props.title}</h2>
                      <button 
                          style={{ borderColor: "#D8BABD", borderRadius: "15px" }} 
                          className="btn"
                          id={`${props.id}_btnClose`} 
                          type="button" 
                          data-dismiss="modal" 
                          aria-label="Close">
                          <i className="fa fa-times text-custom"></i>
=======
              <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title">{props.title}</h5>
                      <button 
                          id={`${props.id}_btnClose`} 
                          type="button" 
                          className="btn-close" 
                          data-dismiss="modal" 
                          aria-label="Close">
                          <i className="fa fa-times"></i>
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
                      </button>
                  </div>
                  <div className="modal-body">
                      <p>{props.children}</p>
                  </div>
              </div>
          </div>
      </div>
  </>
  }
  
  export default MyModal;