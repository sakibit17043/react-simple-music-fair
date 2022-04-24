import React from 'react';

const Modal = () => {
    return (
        <div>
 
<div className="modal fade modal-dialog modal-dialog-centered" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-body">
        <h1>Oops</h1>
        <p>Can't select more than 4!</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Ok</button>

      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Modal;