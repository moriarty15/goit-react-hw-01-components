import PropTypes from 'prop-types';
import s from './statistics.module.css'

export default function Statistic(props) {
    const { label, percentage} = props;
    return (
        <li className={s.item} style={{backgroundColor: `rgb(${bgcolorCreater()}, ${bgcolorCreater()}, ${bgcolorCreater()})`}}>
            <span className={s.label}>{label}</span>
            <span className="percentage">{percentage}</span>
        </li>
    )
}

Statistic.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
const bgcolorCreater = function() {
    return Math.round(Math.random() * 255)
}
