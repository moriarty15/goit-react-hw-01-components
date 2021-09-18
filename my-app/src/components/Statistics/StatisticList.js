import PropTypes from 'prop-types';
import Statistics from './Statistics';
import s from './statistics.module.css'

export default function StatisticList({ statistics, title }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {statistics.map(statistic => (
          <Statistics
            key={statistic.id}
            label={statistic.label}
            percentage={statistic.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

StatisticList.propTypes = {
  title: PropTypes.string,
};
