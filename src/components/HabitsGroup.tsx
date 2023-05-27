// import { useState, useEffect } from "react";
// import { History } from "../HabiticaTypes";
import { useContext } from "react";
import { AppContext } from "./UserHistory";

import { ItemHistory } from "./itemHistory";
export interface HabitsGroupProps {
  text: String;
  itens: any[];
}
const log = (...a: any) => {
  console.log(a);
  return 0;
};

export function HabitsGroup(props: HabitsGroupProps) {
  const context = useContext(AppContext);

  return (
    <section className="dailys">
      <div className="task-name-row">
        <h2>
          {props.text} - {context.dates}
        </h2>
      </div>
      <div>
        <button onClick={() => context.updateDate(-7)}>-1 week</button>/
        <button onClick={() => context.updateDate(7)}> +1 week</button>
      </div>
      <table>
        <tbody>
          {log(props.text, props.itens)}
          {props.itens.map((task) => (
            <tr key={task.id}>
              <ItemHistory
                data={{
                  text: task.text,
                  history: Array.from(Array(context.dates).keys()),
                }}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
