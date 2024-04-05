
import Backdrop from '../Backdrop/Backdrop'
import Card from '../Card/Card'
import './ConfirmModal.css'
Card

const ConfirmModal = (props) => {
    return (
        <Backdrop>
            <Card className='confirm-modal'>
                <div className='confirm-text'>
                    <p>{props.confirmInfo}</p>
                </div>
                <div className='confirm-btn'>
                    <button className='yes-btn' onClick={props.onConfirm}>Yes</button>
                    <button className='no-btn' onClick={props.onCancel}>No</button>
                </div>
            </Card>
        </Backdrop>
    )
}

export default ConfirmModal