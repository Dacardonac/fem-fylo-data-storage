import { useState } from 'react';
import c from './Stats.module.scss';

interface StatsProps {
  minLength: React.ReactNode;
  maxLength: React.ReactNode;
}

const Stats = ({ minLength, maxLength }: StatsProps) => {
  const max = 1000;
  const [used, setUsed] = useState(815);

  const percentage = (used / max) * 100;
  const left = max - used;

  const sliderBackground = {
    background: `linear-gradient(to right, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%) ${percentage}%, hsl(229, 57%, 11%) ${percentage}%)`,
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsed(Number(event.target.value));
  };

  return (
    <article className={c.stats}>
      <p className={c['stats__info']}>
        You’ve used <span className={c['stats__info-strong']}>{used} GB</span> of your storage
      </p>
      <div className={c['stats__graph']}>
        <input
          className={c['stats__graph-bar']}
          type="range"
          min={0}
          max={max}
          value={used}
          onChange={handleChange}
          style={sliderBackground}
        />
        <div className={c['stats__graph-length']}>
          <p>{minLength}</p>
          <p>{maxLength}</p>
        </div>
      </div>
      <div className={c['stats__notification']}>
        {left} GB Left
      </div>
    </article>
  );
};

export default Stats;
