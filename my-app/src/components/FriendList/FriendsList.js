import FriendListItem from './FriendListItem';
import friendsStyle from './friends.module.css';
import PropTypes from 'prop-types';

export default function FriendsList({ items }) {
  return (
    <ul className={friendsStyle.list}>
      {items.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem key={id} isOnline={isOnline} avatar={avatar} userName={name} />
      ))}
    </ul>
  );
}

FriendListItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};
