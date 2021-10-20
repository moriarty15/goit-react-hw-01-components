import f from './friends.module.css';

export default function FriendListItem(props) {
  const { avatar, userName, isOnline } = props;
  return (
    <li className={f.item}>
      <span className={isOnline ? f.status_online : f.status_offline}>
        {isOnline}
      </span>
      <img className="avatar" src={avatar} alt={userName} width="48" />
      <p className="name">{userName}</p>
    </li>
  );
}
