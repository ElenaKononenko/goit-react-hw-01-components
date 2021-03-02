import React from 'react';
import PropTypes from 'prop-types';
import styleStatistics from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const isTitle = title
    ? styleStatistics.titleContainer
    : styleStatistics.title;
  return (
    <section className={styleStatistics.statistics}>
      <h2 className={isTitle}>{title.toUpperCase()}</h2>

      <ul className={styleStatistics.statList}>
        {stats.map(({ label, percentage, id }) => {
          return (
            <li
              key={id}
              className={styleStatistics.item}
              style={{
                backgroundColor:
                  '#' +
                  (Math.random().toString(16) + '000000')
                    .substring(2, 8)
                    .toUpperCase(),
              }}
            >
              <span className={styleStatistics.label}>{label}</span>
              <span className={styleStatistics.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default Statistics;
