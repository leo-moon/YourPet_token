import { useDispatch } from 'react-redux';


import Modal from '../Modal/Modal';
import { fetchDeleteNotice } from '../../redux/notices/noticesOperations';
// import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import css from './modalDeleteCardNotice.module.css';

const ModalDeleteCardNotice = ({ closeModal, _id, title, handleDelete }) => {
  const dispatch = useDispatch();
  // console.log(_id);
  const handleModalClose = () => {
    closeModal();
  };

  const handleModalCloseDelete = () => {
    dispatch(fetchDeleteNotice(_id));
    console.log(_id);
    closeModal();
  };

  return (
    <>
      <Modal className={css.modalApprove} closeModal={handleModalClose}>
        <h2 className={css.modalTitle}>Delete adverstiment?</h2>
        <p className={css.modalText}>
          Are you sure you want to delete <b>"{title}"</b>? You can't undo this
          action.
        </p>
        <div className={css.modalBtnContainer}>
          <button
            className={`${css.modalBtn} ${css.whiteBtn}`}
            onClick={handleModalClose}
          >
            Cancel
          </button>
          <button className={css.modalBtn} onClick={handleModalCloseDelete}>
            Yes
            {/* <DeleteForeverOutlinedIcon
              className={css.modalIcon}
         
            /> */}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModalDeleteCardNotice;