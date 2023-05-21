import { useSelector } from 'react-redux';
import ClockIcon from '../images/icons/ClockIcon';
import FemaleIcon from '../images/icons/FemaleIcon';
import LocationIcon from '../images/icons/LocationIcon';
import HeartIcon from '../images/icons/HeartIcon';
import TrashIcon from '../images/icons/TrashIcon';
import MaleIcon from '../images/icons/MaleIcon';

import { getUser } from '../../redux/auth/auth-selectors';
import Button from '../ButtonNotices/ButtonNotices';
import { isUserLogin } from '../../redux/auth/auth-selectors';
import useToggleModalWindow from '../../hooks/useToggleModalWindow';
import Modal from '../Modal/Modal';

// import ModalNotice from '../ModalNotice/ModalNotice';


import css from './notice-categories-item.module.css';

const NoticeCategoryItem = ({
  _id,
  noticeAvatar,
  category,
  title,
  location,
  dateOfBirth,
  sex,
  comments,
  breed,
  owner,
  name,
}) => {
  const user = useSelector(getUser);
  const isLoggedIn = useSelector(isUserLogin);

  const { isModalOpen, closeModal } = useToggleModalWindow();


  function getAge(dateOfBirth) {
    const ymdArr = dateOfBirth.split('.').map(Number).reverse();
    ymdArr[1]--;
    const bornDate = new Date(...ymdArr);

    const now = new Date();

    const leapYears = (now.getFullYear() - ymdArr[0]) / 4;

    now.setDate(now.getDate() - Math.floor(leapYears));

    const nowAsTimestamp = now.getTime();
    const bornDateAsTimestamp = bornDate.getTime();

    const ageAsTimestamp = nowAsTimestamp - bornDateAsTimestamp;

    const oneYearInMs = 3.17098e-11;

    const age = Math.floor(ageAsTimestamp * oneYearInMs);
    
    return age;
  }

  const age = getAge(dateOfBirth);

  return (
    <li key={_id} className={css.listItems}>
      <div className={css.imageThumb}>
        <img className={css.photoAnimal} src={noticeAvatar} alt={title} width="280" />
        <div className={css.topBlock}>
          <p className={css.categoryInfo}>{category}</p>
          <div>
            <Button
              className={css.topBtn}
              SVGComponent={() => (
                <HeartIcon
                  className={
                    css.favorite
                      ? `${css.icons} ${css.favoriteIcon}`
                      : css.icons
                  }
                  favorite={user.favorite}
                />
              )}
            />
            {isLoggedIn && (
              <Button
                className={css.topBtn}
                SVGComponent={() => <TrashIcon color="#54ADFF" />}
              />
            )}
          </div>
        </div>
        <div className={css.infoCardBlock}>
          <p className={css.noticeInfo}>
            <LocationIcon className={css.icon} color="#54ADFF" />
            {location}
          </p>
          <p className={css.noticeInfo}>
            <ClockIcon className={css.icon} color="#54ADFF" />
            {age === 1 ? '1 year' : `${age} years`}
          </p>
          <p className={css.noticeInfo}>
            {sex.toLowerCase() === 'male' && (
              <MaleIcon className={css.icon} color="#54ADFF" />
            )}
            {sex.toLowerCase() === 'female' && (
              <FemaleIcon className={css.icon} color="#54ADFF" />
            )}
            {sex}
          </p>
        </div>
      </div>
      <div className={css.noticeDesc}>
        <h3 className={css.noticeTitle}>Cute {title} looking hor a home</h3>
        <Button className={css.learnBtn}>
          Learn more
        </Button>
        {isModalOpen && (
          <Modal closeModal={closeModal}>
            {/* <ModalNotice
              /> */}
          </Modal>
        )}
      </div>
    </li>
  );
};
export default NoticeCategoryItem;