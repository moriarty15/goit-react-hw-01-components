import Profile from "./components/Profile/Profile"
import data from './components/Profile/data.json'
import Statistic from "./components/Statistics/Statistics"
import statisticalData from './components/Statistics/statistical-data.json'
import FriendsList from "./components/FriendList/FriendsList"
import friendsJson from './components/FriendList/friends.json'
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"
import transactionJson from './components/TransactionHistory/transactions.json'
import Container from "./components/container"

export default function App() {
    return (
        <Container>
            <Profile
                src={data.avatar}
                userName={data.name}
                tag={data.tag}
                location={data.location}
                stats={data.stats}
                 />
            <Statistic statistics={statisticalData} title='Upload stats'/>
            <FriendsList items={friendsJson }/>
            <TransactionHistory items={ transactionJson}/>
        </Container>
    )    
}

