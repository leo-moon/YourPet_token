import scss from './modal-notice.module.scss';
import Loader from 'components/Loader/Loader';
import SvgX from 'images/cross-small.svg';
import SvgH from 'images/icons/HeartIcon';
import { selectLoading } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const ModalNotice = ({
  id,
  onClose,
  onAddDelete,
  favorite,
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
  price,
}) => {
  const loading = useSelector(selectLoading);
  // const loading = useSelector(state => state.notices.loading);
  // const loading = useSelector(selectLoading);
  //   const notice = useSelector(state => state.notice);
  const notice = useSelector(state => state.notice);

  const formatDate = date => {
    const dateFormat = new Date(date);
    return `${
      dateFormat.getMonth() + 1 < 10
        ? `0${dateFormat.getMonth() + 1}`
        : dateFormat.getMonth() + 1
    }.${
      dateFormat.getDate() < 10
        ? `0${dateFormat.getDate()}`
        : dateFormat.getDate()
    }.${dateFormat.getFullYear()}`;
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {notice !== null && (
            <li key={_id} className={scss.listItems}>
              <div className={scss.modal_notice__content}>
                <div className={scss.modal_notice__content_info}>
                  <div className={scss.modal_notice__close} onClick={onClose}>
                    <SvgX id="icon-close" />
                  </div>
                  <div className={scss.modal_notice__image_content}>
                    <img
                      className={scss.modal_notice__image}
                      src={noticeAvatar}
                      alt={name}
                    />
                    <span className={scss.modal_notice__category}>
                      {category}
                    </span>
                  </div>
                  <div>
                    <h3 className={scss.modal_notice__title}>{title}</h3>
                    <ul className={scss.modal_notice__list}>
                      <li className={scss.modal_notice__item}>
                        <h4 className={scss.modal_notice__item_title}>Name:</h4>
                        <p className={scss.modal_notice__item_description}>
                          {name}
                        </p>
                      </li>
                      <li className={scss.modal_notice__item}>
                        <h4 className={scss.modal_notice__item_title}>
                          Birthday:
                        </h4>
                        <p className={scss.modal_notice__item_description}>
                          {formatDate(dateOfBirth)}
                        </p>
                      </li>
                      <li className={scss.modal_notice__item}>
                        <h4 className={scss.modal_notice__item_title}>
                          Breed:
                        </h4>
                        <p className={scss.modal_notice__item_description}>
                          {breed}
                        </p>
                      </li>
                      <li className={scss.modal_notice__item}>
                        <h4 className={scss.modal_notice__item_title}>
                          Place:
                        </h4>
                        <p className={scss.modal_notice__item_description}>
                          {location}
                        </p>
                      </li>
                      <li className={scss.modal_notice__item}>
                        <h4 className={scss.modal_notice__item_title}>
                          The sex:
                        </h4>
                        <p className={scss.modal_notice__item_description}>
                          {sex}
                        </p>
                      </li>
                      <li className={scss.modal_notice__item}>
                        <h4 className={scss.modal_notice__item_title}>
                          Email:
                        </h4>
                        <a
                          href={`mailto:${owner.email}`}
                          className={`${scss.modal_notice__item_description} ${scss.modal_notice__item_description_link}`}
                          type="button"
                        >
                          {owner.email}
                        </a>
                      </li>
                      <li className={scss.modal_notice__item}>
                        <h4 className={scss.modal_notice__item_title}>
                          Phone:
                        </h4>
                        <a
                          href={`tel:+${owner.phone}`}
                          className={`${scss.modal_notice__item_description} ${scss.modal_notice__item_description_link}`}
                          type="button"
                        >
                          {`+${owner.phone}`}
                        </a>
                      </li>
                      {category !== 'In good hands' && (
                        <li className={scss.modal_notice__item}>
                          <h4 className={scss.modal_notice__item_title}>
                            Price:
                          </h4>
                          <p className={scss.modal_notice__item_description}>
                            {`${price}$`}
                          </p>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
                <article className={scss.modal_notice__item_comment}>
                  <span className={scss.modal_notice__item_title}>
                    Comments:
                  </span>
                  {comments}
                </article>
                <div className={scss.modal_notice__button_container}>
                  <a
                    href={`tel:+${owner.phone}`}
                    className={`${scss.button__primary_main} ${scss.modal_notice__button} ${scss.modal_notice__button_contact}`}
                    type="button"
                  >
                    Contact
                  </a>
                  {favorite && (
                    <button
                      onClick={() => {
                        onAddDelete(id);
                      }}
                      className={`${scss.button__primary_not_main} ${scss.modal_notice__button}`}
                      type="button"
                    >
                      Remove
                      <SvgH
                        className={scss.modal_notice__button_favorite}
                        id="icon-heart-favorite"
                      />
                    </button>
                  )}
                  {!favorite && (
                    <button
                      onClick={() => {
                        onAddDelete(id);
                      }}
                      className={`${scss.button__primary_not_main} ${scss.modal_notice__button}`}
                      type="button"
                    >
                      Add to
                      <SvgH
                        className={scss.modal_notice__button_favorite}
                        id="icon-heart-favorite"
                      />
                    </button>
                  )}
                </div>
              </div>
            </li>
          )}
        </>
      )}
    </>
  );
};

export default ModalNotice;
