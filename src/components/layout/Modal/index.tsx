export const Modal = ({ children, Portal, hide }) => {
  const handleClickBackdrop = (e) => {
    const { id } = e.target as HTMLDivElement
    if (id === 'modal') return hide()
  }

  return (
    <Portal>
      <div
        id='modal'
        className='modal bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20'
        onClick={handleClickBackdrop}
        tabIndex={-1}
      >
        <div
          className='modal-dialog dark:rounded-md dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-3xl dark:bg-opacity-100 dark:border dark:border-gray-100'
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
