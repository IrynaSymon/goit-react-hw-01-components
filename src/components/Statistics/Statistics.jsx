import PropTypes from 'prop-types';
import { getRandomHexColor } from 'random-color/random-color';
import css from './Statistics.module.css'
export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title&&
  <h2 className={css.title}>Upload stats</h2>}

            <ul className={css.statList}>
                {stats.map(stat=>(
                <li className={css.statItem}
                        key={stat.id}
                    style={{backgroundColor:getRandomHexColor()}}>
       
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}%</span>
            </li>
    ))}
    
  </ul>
</section>
    )
}