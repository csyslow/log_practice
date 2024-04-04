
import Card from '../Card/Card'
import './ConfirmModal.css'
Card

const ConfirmModal = (props) => {
    return (
        <Card className='confirm-modal'>
            <div className='confirm-text'>
                <p>Delete this log?</p>
            </div>
            <div className='confirm-btn'>
            <button className='yes-btn'>Yes</button>
            <button>No</button>
            </div>
        </Card>)
}

export default ConfirmModal