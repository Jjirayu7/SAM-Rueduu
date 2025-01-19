function MyModal(props) {
  return<>
      <div className="modal" tabIndex="-1" id={props.id}>
          <div className="modal-dialog modal-xl">
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