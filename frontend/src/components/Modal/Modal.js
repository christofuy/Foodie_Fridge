import MuiModal from '@material-ui/core/Modal'
import {useState} from 'react'


const Modal = ({button, children}) => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<>
			<p
				style={{
					color: 'gray',
					margin: '1em 0 0 0',
					cursor: 'pointer',
					textAlign: 'center'
				}}
				onClick={handleOpen}
			>{button}</p>
			<MuiModal
				open={open}
				onClose={handleClose}
			>
				<div>
					{children}
				</div>
			</MuiModal>
		</>
	)
}


export default Modal
