// import { useState, useEffect } from "react";
// import { History } from "../HabiticaTypes";
import { useContext } from "react";
import { AppContext } from "./UserHistory";
import { Task } from "../HabiticaTypes";

import { ItemHistory } from "./itemHistory";

export interface HabitsGroupProps {
  text: String;
  itens: Task[];
}

const date = new Date();
// const todayy = new Date(year, month).getDate();

function getDayName(offset: number): string {
  const today = new Date();
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + offset);

  const dayIndex = (targetDate.getDay() + 7) % 7;
  const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayIndex];

  return dayName;
}

function getDay(a: number) {
  const today = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  // const currentMonth = new Date(year, month, 0).getDate();
  if (today - a > 0) {
    return (
      <>
        <span>{today - a}</span>
        <span>{getDayName(today - a - 1)}</span>
      </>
    );
  } else {
    return (
      <>
        <span>{new Date(year, month - 1, 0).getDate() - a}</span>
        <span>{getDayName(today - a - 1)}</span>
      </>
    );
  }
}

export function HabitsGroup(props: HabitsGroupProps) {
  const context = useContext(AppContext);
  return (
    <section className="dailys">
      <table>
        <thead>
          <tr>
            <th>
              <div className="task-name-row">
                <h2>{props.text}</h2>
              </div>
            </th>
            {Array.from(Array(context.numOfDays).keys()).map((a) => (
              <th>
                <div className="date date-heading">{getDay(a)}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.itens.map((task) => (
            <tr key={task.id}>
              <ItemHistory
                text={task.text}
                history={Array.from(Array(context.numOfDays).keys())}
                task={task}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
