import { FC } from "react";
import { TodoType } from "./types/Todo";

export const Todo: FC <Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return (
    <div>
      <p>{`${completeMark} ${title}(ユーザー:(${userId}))`}</p>
    </div>
  )
}
