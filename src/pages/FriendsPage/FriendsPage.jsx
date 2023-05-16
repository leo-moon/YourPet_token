import style from './FriendsPage.module.scss';

const FriendCard = ({ title, logo, time, address, email, phone }) => (
  <li className={style.card}>
    <h2 className={style.card__title}>{title}</h2>
    <div className={style.card__wrap}>
      <img src={logo} alt={`${title} logo`} />
      <ul className={style.card__list}>
        <li className={style.card__listItem}>
          <span className={style.card__label}>Time:</span>
          <br />
          {time}
        </li>
        <li className={style.card__listItem}>
          <span className={style.card__label}>Address:</span>
          <br />
          <address>{address}</address>
        </li>
        <li className={style.card__listItem}>
          <span className={style.card__label}>Email:</span>
          <br />
          <a href="mailto:{email}">{email}</a>
        </li>
        <li className={style.card__listItem}>
          <span className={style.card__label}>Phone:</span>
          <br />
          <a href="tel:{phone}">{phone}</a>
        </li>
      </ul>
    </div>
  </li>
);

const FriendsPage = () => {
  const friends = [
    {
      id: 1,
      title: 'ЛКП "ЛЕВ"',
      logo: require('../../images/FriendsPage/lkplev.png'),
      time: '8:00-19:00',
      address: 'Promuslova Street, 56',
      email: 'lkplev@gmail.com',
      phone: '(032) 293-30-41',
    },
    {
      id: 2,
      title: 'Барбос',
      logo: require('../../images/FriendsPage/barbos.png'),
      time: '8:00-20:00',
      address: 'Grigorenka Street, 25',
      email: 'barbos@gmail.com',
      phone: '066 488 0480',
    },
    {
      id: 3,
      title: 'Whiskas',
      logo: require('../../images/FriendsPage/whiskas.png'),
      time: 'day and night',
      address: 'website only',
      email: 'whiskas@gmail.com',
      phone: '0–800–500–155',
    },
    {
      id: 4,
      title: 'Happy paw',
      logo: require('../../images/FriendsPage/happypaw.png'),
      time: '09:00-19:00',
      address: 'Chota Rystaveli Street, 44',
      email: 'hello@happypaw.ua',
      phone: '+380 44 290-03-29',
    },
    {
      id: 5,
      title: 'PetHelp',
      logo: require('../../images/FriendsPage/pethelp.png'),
      time: 'day and night',
      address: 'website only',
      email: 'pithelp.ukr@gmail.com',
      phone: 'email only',
    },
    {
      id: 6,
      title: 'Сіріус',
      logo: require('../../images/FriendsPage/sirius.png'),
      time: '11:00-16:00',
      address: 'Fedorivka, Kyiv Oblast',
      email: 'dogcat.sirius@gmail.com',
      phone: '+38 093 193 40 69',
    },
    {
      id: 7,
      title: 'PURINA',
      logo: require('../../images/FriendsPage/purina.png'),
      time: 'day and night',
      address: 'website only',
      email: 'info@ua.nestle.com',
      phone: '1-800-778-7462',
    },
    {
      id: 8,
      title: 'Josera',
      logo: require('../../images/FriendsPage/josera.png'),
      time: '09:00-17:00',
      address: 'Sholom-Aleikhema St, 11',
      email: 'info@josera.ua',
      phone: '0800 409 060',
    },
    {
      id: 9,
      title: 'LICO',
      logo: require('../../images/FriendsPage/lico.png'),
      time: '9:00-20:00',
      address: 'Dryhetiv Street, 77',
      email: 'lico@gmail.com',
      phone: '+38 097 509 8005',
    },
  ];

  return (
    <div className={style.friendsSection}>
      <h1 className={style.title}>Our friends</h1>
      <ul className={style.friendsList}>
        {friends.map(friend => (
          <FriendCard
            key={friend.id}
            title={friend.title}
            logo={friend.logo}
            time={friend.time}
            address={friend.address}
            email={friend.email}
            phone={friend.phone}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendsPage;
