import PropTypes from 'prop-types'; 

export default function Statistic(props) {
    const { label, percentage} = props;
    return (
        <li className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </li>
    )
}

Statistic.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
