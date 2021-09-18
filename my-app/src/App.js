import Profile from "./components/Profile/Profile"
import data from './components/Profile/data.json'
import StatisticList from "./components/Statistics/StatisticList"
import statisticalData from './components/Statistics/statistical-data.json'
import FriendsList from "./components/FriendList/FriendsList"
import friendsJson from './components/FriendList/friends.json'
import TransactionList from "./components/TransactionHistory/TransactionList"
import transactionJson from './components/TransactionHistory/transactions.json'

export default function App() {
    return (
        <div>
            <Profile
                src={data.avatar}
                userName={data.name}
                tag={data.tag}
                location={data.location}
                followers={data.stats.followers}
                views={data.stats.views}
                likes={data.stats.likes} />
            <StatisticList statistics={statisticalData} title='Upload stats'/>
            <FriendsList items={friendsJson }/>
            <TransactionList items={ transactionJson}/>
        </div>
    )    
}

