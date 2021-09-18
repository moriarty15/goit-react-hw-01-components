import PropTypes from 'prop-types'
import f from './friends.module.css'

export default function Friends(props) {
    const {avatar, userName, isOnline} = props
    return <li className={f.item}>
        <div className={isOnline ? f.status_online : f.status_offline}>{isOnline }</div>
  <img className="avatar" src={avatar} alt={userName} width="48" />
        <p className="name">{ userName}</p>
</li>
}

Friends.propTypes = {
    avatar: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}