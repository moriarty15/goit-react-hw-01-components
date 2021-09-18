import PropTypes from 'prop-types'; 
import defaultImg from './defaultIMG.jpg'

export default function Painting(props) {
  const {
    avatar = defaultImg,
    userName,
    tag,
    location,
    followers,
    views,
    likes } = props;
  console.log(props)
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className="avatar" />
        <p className="name">name: {userName}</p>
        <p className="tag">tag: {tag}</p>
        <p className="location">location: {location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  )
}

Painting.propTypes = {
  src: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}