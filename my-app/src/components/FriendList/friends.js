import PropTypes from 'prop-types'

export default function Friends(props) {
    const {avatar, userName, isOnline} = props
    return <li className="item">
        <span className="status">{isOnline }</span>
  <img className="avatar" src={avatar} alt={userName} width="48" />
        <p className="name">{ userName}</p>
</li>
}

Friends.propTypes = {
    avatar: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}