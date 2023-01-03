import { FC, useState } from "react";
import styles from "./Step.module.scss";

const Step: FC = () => {
  const [state, setState] = useState([
    {
      id: 1,
      month: 3,
      ob: 5,
    },
    {
      id: 2,
      month: 5,
      ob: 4,
    },
    {
      id: 3,
      month: 9,
      ob: 3,
    },
  ]);

  const handleMonthChange = (month: string, idx: number) => {
    const newStateArr = state.map((item) => {
      if (idx !== item.id) return item;
      return { ...item, month: Number(month) };
    });

    setState(newStateArr);
  };

  const handleObChange = (ob: string, idx: number) => {
    const newStateArr = state.map((item) => {
      if (idx !== item.id) return item;
      return { ...item, ob: Number(ob) };
    });

    setState(newStateArr);
  };

  const addStep = () => {
    let ids = state.map((item) => item.id);

    const defaultStep = {
      id: Math.max(...ids) + 1,
      month: 0,
      ob: 0,
    };

    setState((prev) => [...prev, defaultStep]);
  };

  const removeStep = (id: number) => {
    setState((prev) => prev.filter((a) => a.id !== id));
  };

  const sub = (event: any) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className={styles.table}>
      <div>
        <div className={styles.title}>term and rates</div>
        <div>
          <div className={styles.subtitle}>month</div>
          <div className={styles.subtitle}>percent</div>
        </div>
      </div>
      <div className={styles.table_data}>
        {state.map((s) => (
          <div key={s.id} className={styles.table_item}>
            <div className={styles.table_option}>
              <a
                onClick={() => {
                  removeStep(s.id);
                }}
              >
                -
              </a>
              {Math.max(...state.map((item) => item.id)) === s.id && (
                <a onClick={() => addStep()}>+</a>
              )}
            </div>
            <input
              type="text"
              value={s.month}
              onChange={(e) => handleMonthChange(e.target.value, s.id)}
              //   onInput={(e) => inputRules(e)}
            />
            <input
              type="text"
              value={s.ob}
              onChange={(e) => handleObChange(e.target.value, s.id)}
            />
          </div>
        ))}
      </div>

      <button type="submit" onClick={(e) => sub(e)}>
        Submit in step
      </button>
    </div>
  );
};

export default Step;
