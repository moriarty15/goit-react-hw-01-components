import PropTypes from "prop-types"
import f from './friends.module.css';

export default function FriendListItem(props) {
  const { avatar, userName, isOnline } = props;
  return (
    <>
      <span className={isOnline ? f.status_online : f.status_offline}>
        {isOnline}
      </span>
      <img className="avatar" src={avatar} alt={userName} width="48" />
      <p className="name">{userName}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}