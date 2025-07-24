import ReactDOM from 'react-dom'

export default function Portal(props) {

    const {handleClosePortal, children} = props

    return ReactDOM.createPortal (
        <div className='portal-container'>
            <div className='portal-underlay' onClick={handleClosePortal} />
            {children}
        </div>,
        document.getElementById('portal')
    )
}