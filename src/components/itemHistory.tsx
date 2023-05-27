// import { useState, useEffect } from "react";
// import { History } from "../HabiticaTypes";

export interface dailyProps {
  data: {
    text: String;
    history: any[];
  };
}

{
  /* <HistoryTableHeader
  title="Dailies"
  setShowNoHistory={setShowNoHistory}
  showNoHistory={showNoHistory}
/> */
}
export function ItemHistory(props: dailyProps) {
  return (
    <>
      <td className="task-name-row">
        <span className="task-name">
          <p>{props?.data.text}</p>
        </span>
      </td>
      {props?.data?.history?.map((a): any => (
        <td className="daily-cell pass" key={"chave" + a}>
          <div className="daily-cell">&nbsp;</div>
        </td>
      ))}
    </>
  );
}
