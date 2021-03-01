import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      <div className={style.titleDirection}>
        <h2 className={style.title}>{title.toUpperCase()}</h2>
      </div>
      <ul className={style.statList}>
        {stats.map(({ label, percentage, id }) => {
          return (
            <li
              key={id}
              className={style.item}
              style={{
                backgroundColor:
                  '#' +
                  (Math.random().toString(16) + '000000')
                    .substring(2, 8)
                    .toUpperCase(),
              }}
            >
              <span className={style.label}>{label}</span>
              <span className={style.percentage}>{percentage}%</span>
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
