import { useState } from 'react';
import style from './OurFriends.module.scss';

const FriendCard = ({
  id,
  title,
  imageUrl,
  workDays,
  address,
  email,
  phone,
}) => {
  const [time, setTime] = useState(null);
  const handleMouseEnter = e => {
    setTime(workDays);
  };
  const handleMouseLeave = e => {
    setTime(null);
  };
  return (
    <li className={style.card} key={id}>
      <h2 className={style.card__title}>{title}</h2>
      <div className={style.card__wrap}>
        <img src={imageUrl} alt={`${title} logo`} />
        <ul className={style.card__list}>
          <li className={style.card__listItem}>
            <div
              className={style.timeOverlay}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p className={style.card__label}>Time:</p>
              {workDays ? <p>opening hours:</p> : <p>day and night</p>}

              {time && time.length > 0 && (
                <div className={style.listDays}>
                  <ul>
                    <li className={style.dayOpening}>MN:</li>
                    <li className={style.dayOpening}>TU:</li>
                    <li className={style.dayOpening}>WE:</li>
                    <li className={style.dayOpening}>TH:</li>
                    <li className={style.dayOpening}>FR:</li>
                    <li className={style.dayOpening}>SA:</li>
                    <li className={style.dayOpening}>SU:</li>
                  </ul>
                  <ul>
                    {workDays[0].from && workDays[0].to ? (
                      <li className={style.dayOpening}>
                        {workDays[0].from}-{workDays[0].to}
                      </li>
                    ) : (
                      <li className={style.dayOpening}>day off</li>
                    )}
                    {workDays[1].from && workDays[1].to ? (
                      <li className={style.dayOpening}>
                        {workDays[1].from}-{workDays[1].to}
                      </li>
                    ) : (
                      <li className={style.dayOpening}>day off</li>
                    )}
                    {workDays[2].from && workDays[2].to ? (
                      <li className={style.dayOpening}>
                        {workDays[2].from}-{workDays[2].to}
                      </li>
                    ) : (
                      <li className={style.dayOpening}>day off</li>
                    )}
                    {workDays[3].from && workDays[3].to ? (
                      <li className={style.dayOpening}>
                        {workDays[3].from}-{workDays[3].to}
                      </li>
                    ) : (
                      <li className={style.dayOpening}>day off</li>
                    )}
                    {workDays[4].from && workDays[4].to ? (
                      <li className={style.dayOpening}>
                        {workDays[4].from}-{workDays[4].to}
                      </li>
                    ) : (
                      <li className={style.dayOpening}>day off</li>
                    )}
                    {workDays[5].from && workDays[5].to ? (
                      <li className={style.dayOpening}>
                        {workDays[5].from}-{workDays[5].to}
                      </li>
                    ) : (
                      <li className={style.dayOpening}>day off</li>
                    )}
                    {workDays[6].from && workDays[6].to ? (
                      <li className={style.dayOpening}>
                        {workDays[6].from}-{workDays[6].to}
                      </li>
                    ) : (
                      <li className={style.dayOpening}>day off</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li className={style.card__listItem}>
            <p className={style.card__label}>Address:</p>
            <a
              href={`https://maps.google.com/?q=${address}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {address}
            </a>
          </li>
          <li className={style.card__listItem}>
            <span className={style.card__label}>Email:</span>
            <br />
            <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li className={style.card__listItem}>
            <p className={style.card__label}>Phone:</p>
            <a href={`tel:${phone}`}>{phone}</a>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default FriendCard;
