import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import scss from './modal-approve-action.module.scss'
import PropTypes from 'prop-types';

export const ModalApproveAction = ({ onClose }) => {
  // const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleLogOut = () => {
    onClose();
    dispatch(logOut());
  };

  return (

<div className={scss.modal_approve_action__box}>
<h2 className={scss.modal_approve_action__text}>Delete adverstiment?</h2>
<h3 className={scss.modal_approve_action__question}>Are you sure you want to delete “Cute dog looking for a home”? You can`t undo this action.</h3>
<div>
<button 
   className={scss.modal_notice__close}
   type="button"
   onClick={onClose}>
   Cancel
</button>
<button 
   className={scss.modal_approve_action__button}
   type="button"
   onClick={handleLogOut}>
   Yes
</button>                
</div>
</div>
);
};

export default ModalApproveAction;

ModalApproveAction.propsType = {
  onClose: PropTypes.func.isRequired,
};