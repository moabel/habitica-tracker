// import { useState, useEffect } from "react";

import { EMPTY, FAIL, OK } from "./Dots";
// import { History } from "../HabiticaTypes";

export interface dailyProps {
  text: String;
  history: Number[];
  task?: any[] | any;
}

{
  /* <HistoryTableHeader
  title="Dailies"
  setShowNoHistory={setShowNoHistory}
  showNoHistory={showNoHistory}
/> */
}
// const today = new Date().getDate();
// const today = dayjs(0).format("YYYYMMDD");
// const another = dayjs(1685490668797).format("YYYYMMDD");
// console.log(today, another, "date");

function renderDots(params: any, task?: any): JSX.Element {
  if (
    !(task?.[params] && "date" in task[params] && "completed" in task[params])
  ) {
    return EMPTY(params);
  }

  if (!task[params].completed) return FAIL(params);

  return OK(params);
}

export function ItemHistory(props: dailyProps) {
  if (props?.task?.history) {
    var teste = [].concat(props?.task?.history).reverse();
  }
  return (
    <>
      {/* {log(props.task?.history, "sim")} */}
      <td className="task-name-row">
        <span className="task-name">
          <p>{props?.text}</p>
        </span>
      </td>
      {props?.history?.map((a) => renderDots(a, teste))}
    </>
  );
}
