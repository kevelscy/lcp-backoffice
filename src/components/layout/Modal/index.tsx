export const Modal = ({ children, Portal, hide }) => {

  const handleClickBackdrop = (e) => {
    const { id } = e.target as HTMLDivElement
    if (id === 'modal') return hide()
  }

  return (
    <Portal>
      <div
        id='modal'
        className='modal'
        onClick={handleClickBackdrop}
        tabIndex={-1}
      >
        <div
          className='modal-dialog'
          role='dialog'
          aria-labelledby='modal-label'
          aria-modal='true'
        >
          <div className='modal-header'>
            <span id='modal-label' className='modal-title'>
              ¿Usted esta seguro?
            </span>

            <button
              className='modal-close'
              onClick={hide}
              type='button'
              aria-label='Close'
            >
              <span aria-hidden='true'>❌</span>
            </button>
          </div>

          <div className='modal-body'>
            { children }
          </div>
        </div>
      </div>
    </Portal>
  )
}