import PropTypes from 'prop-types'; 
import Statistics from './Statistics'

export default function StatisticList({ statistics, title }) {
    return <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
            {statistics.map(statistic => (
                <Statistics
                    key={statistic.id}
                    label={statistic.label}
                    percentage={statistic.percentage}
                />))}

        </ul>
        
    </section>
}

StatisticList.propTypes = {
    title: PropTypes.string,
}