import styles from './notices-categories-list.module.css';

import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
const NoticesCategoriesList = ({ items }) => {
const elements = items.map(({ _id, owner, ...props }) => {
          return (
            <NoticeCategoryItem key={_id} {...props} _id={_id} owner={owner} />
          );
        })
    
  return (
    <>
      <ul className={styles.list}>{elements}</ul>
    </>
  );
};

export default NoticesCategoriesList;

//  const showModal = () => {
//  document.body.style.overflow = 'hidden'; 
//  setModalShow(true);
//  dispatch(searchNotice(pet._id));
//};

// import styles from './notices-categories-list.module.css';
// import img from './../../images/img/img.jpg';
// import pawIcon from './../../images/img/paw.svg';
// import heart from './../../images/icons/svg/heart.svg';
// import locationIcon from './../../images/icons/svg/location.svg';
// import clock from '../../images/icons/svg/clock.svg';
// import female from '../../images/icons/svg/female.svg';
// import plus from "./../../images/icons/svg/plus-small.svg";

// const NoticesCategoriesList = ({ items }) => {
//   const date = new Date();
//   const thisYear = Number(date.getFullYear());

//   const elements = items.map(
//     ({ _id, category, location, sex, dateOfBirth, title }) => (
//       <li key={_id} className={styles.item}>
//         <article className={styles.article}>
         
//           <div className={styles.articleDescription}>
//             <h4>{title}</h4>
//             <button type="button">
//               Learn more <img src={pawIcon} alt="paw icon" />
//             </button>
//           </div>
//           <div className={styles.articleHeader}>
//              <button type="button"
//             className={styles.functionalButton}
//           >
//             <span>Add Pet</span>
//           <img src={plus} alt="arrow"/>
//           </button>
//             <picture className={styles.articlePicture}>

//               <img src={img} alt="pictureArticle" />
//             </picture>
//             <div className={styles.articleLine}>
//               <span>{category}</span>
//               <div className={styles.articleDecor}>
//                 <button type="button">
//                   {' '}
//                   <img src={heart} alt="icon" />{' '}
//                 </button>
//               </div>
//             </div>
//             <ul className={styles.articleList}>
//               <li className={styles.articleItems}>
//                 <a
//                   href="https://goo.gl/maps/SrRuXZp4GT4sXf476?coh=178571&entry=tt"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img src={locationIcon} alt="location" />
//                   <span>{location}</span>
//                 </a>
//               </li>
//               <li className={styles.articleItems}>
//                 <button type="button" className={styles.articleButton}>
//                   <img src={clock} alt="clock" />
//                   <span>
//                     {Number(dateOfBirth.slice(6, 10) - thisYear)} year
//                   </span>
//                 </button>
//               </li>
//               <li className={styles.articleItems}>
//                 <button type="button" className={styles.articleButton}>
//                   <img src={female} alt="female" />
//                   <span>{sex}</span>
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </article>
//       </li>
//     )
//   );

//   return (
//     <>
//       <ul className={styles.list}>{elements}</ul>
//     </>
//   );
// };

// export default NoticesCategoriesList;
