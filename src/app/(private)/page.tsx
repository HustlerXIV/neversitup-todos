import "./_components/component.css";
import Calendar from "@/components/calendar/Calendar";
import TodoCard from "./_components/TodoCard";
import { fetchData } from "@/utils/api";
import { GET, MONTHS } from "@/utils/constants";
import Navbar from "./_components/Navbar";
import { TodoDetails } from "@/utils/types";

const ENDPOINT: string = "/todos/";

export async function getData() {
  const res = await fetchData({ endpoint: ENDPOINT, method: GET });
  return res;
}

export default async function Home() {
  const todos = await getData();

  const currentDate = new Date();
  const currentMonth = MONTHS[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  const formattedDate = `${currentMonth} ${currentYear}`;
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center p-10">
        <h4>{formattedDate}</h4>
        <Calendar />
        <div className="width-100-percent flex flex-col gap-4">
          {todos.map((todo: TodoDetails) => (
            <div key={todo._id}>
              <TodoCard
                id={todo._id}
                title={todo.title}
                description={todo.description}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
