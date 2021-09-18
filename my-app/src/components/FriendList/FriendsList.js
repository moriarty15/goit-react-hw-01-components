import Friends from "./friends";

export default function FriendsList({items}) {
       return <ul className="friend__list"> 
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