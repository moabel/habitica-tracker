import { useEffect, useState, createContext } from "react";
import { Task } from "../HabiticaTypes";
import { HabitsGroup } from "./HabitsGroup";

interface UserHistoryProps {
  userId: string;
  userApiKey: string;
  // updateDate: (newDates: number) => void;
  // setError: (errorMessage: Error) => void;
}

export const AppContext = createContext({
  showTaskIcons: true,
  // dates: Array<Dayjs>(),
  numOfDays: 7,
  updateDate: (_newDates: number) => {},
  // cronIntervals: new IntervalTree(),
});

export default function UserHistory(props: UserHistoryProps) {
  const { userId, userApiKey } = props;

  localStorage.setItem("user-id", userId);
  localStorage.setItem("user-key", userApiKey);

  const [taskData, setTaskData] = useState<Task[]>([]);
  const [dailys, setDailys] = useState<Task[]>([]);
  const [todo, setTodo] = useState<Task[]>([]);
  const [numDaysToShow, setNumDaysToShow] = useState<number>(7);

  const [showTaskIcons] = useState<boolean>(true);

  const appContext = {
    showTaskIcons: showTaskIcons,
    numOfDays: numDaysToShow,
    updateDate: (value: number) => {
      if (numDaysToShow + value) {
        setNumDaysToShow((currentValue) => value + currentValue);
      }
    },
  };

  const HABITICA_API_URL = "https://habitica.com/api/v3";
  const CLIENT_KEY = "0d9428fd-d6fa-45f3-a4db-f130e3ef10ea-HabiticaTracker";
  // const USER_PATH = "/user";
  const TASKS_PATH = "/tasks/user";
  // const TODOS_COMPLETED_PATH = "/tasks/user?type=completedTodos";
  // const DEFAULT_NUM_DAYS_TO_SHOW = 7;

  const fetchWithApiKey = (url: string) => {
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-user": userId,
        "x-api-key": userApiKey,
        "x-client": CLIENT_KEY,
      },
    });
  };
  useEffect(() => {
    fetchWithApiKey(HABITICA_API_URL + TASKS_PATH)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result.data);
        return result;
      })
      .then((result) => {
        setTaskData(result.data.filter((task: Task) => task.type === "habit"));
        setDailys(result.data.filter((task: Task) => task.type === "daily"));
        setTodo(result.data.filter((task: Task) => task.type === "todo"));
      });
    // .then(result => console.log(result))
  }, []); // DO NOT REMOVE the empty dependency array
  // const context = useContext(AppContext);

  return (
    <div className="App">
      <AppContext.Provider value={appContext}>
        <div>{/* {appContext.numOfDays} */}</div>
        <div className="app-controls">
          <div>
            <button onClick={() => appContext.updateDate(-7)}>-1 week</button>/
            <button onClick={() => appContext.updateDate(7)}> +1 week</button>
          </div>
          <div className="date-header">May 2023</div>
          <div style={{ opacity: 0 }}>
            <button onClick={() => appContext.updateDate(-7)}>-1 week</button>/
            <button onClick={() => appContext.updateDate(7)}> +1 week</button>
          </div>
          {/* <span role="button" class="link" title="Show/Hide task icons">
            Hide Task Icons
          </span> */}
        </div>
        <HabitsGroup itens={taskData} text="Habits"></HabitsGroup>
        <HabitsGroup itens={dailys} text="Dailys"></HabitsGroup>
        <HabitsGroup itens={todo} text="To Do"></HabitsGroup>
      </AppContext.Provider>
    </div>
  );
}
