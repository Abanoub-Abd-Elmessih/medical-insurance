/* eslint-disable react/prop-types */
export default function Modal({title,children}) {
  return (
    <div
    className="modal fade "
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-xl modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex justify-content-between align-items-center">
          <span className="modal-title fs-5" id="exampleModalLabel">
            {title}
          </span>
          <span className="center-flex">
          <button
            type="button"
            className="btn-close me-auto"
            data-bs-dismiss="modal"
            aria-label="Close"
            />
            </span>
        </div>
        <div className="modal-body">
            {children}
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            اغلاق
          </button>
          <button type="button" className="btn btn-primary">
            افتح صفحة {title}
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}