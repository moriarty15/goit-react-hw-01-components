import Friends from "./friends";
import friendsStyle from './friends.module.css'

export default function FriendsList({items}) {
       return <ul className={friendsStyle.list}> 
                {items.map(friend => (
                    <Friends
                        key={friend.id}
                        isOnline={friend.isOnline}
                        avatar={friend.avatar}
                        userName={friend.name}
                    />
                )) }
            </ul>
}