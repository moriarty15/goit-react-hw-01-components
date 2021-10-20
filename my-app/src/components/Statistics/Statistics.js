import PropTypes from 'prop-types';
import s from './statistics.module.css';
import randomizeColor from "./randimizeColor"

export default function StatisticList({ statistics, title }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {statistics.map(({ id, label, percentage }) => (
          <li
            className={s.item}
            key={id}
            style={{
              backgroundColor: `rgb(${randomizeColor()}, ${randomizeColor()}, ${randomizeColor()})`,
            }}
          >
            <span className={s.label}>{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

StatisticList.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

