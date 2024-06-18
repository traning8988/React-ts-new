import { FC } from "react"
import { User } from "./types/user"

export const UserProfile: FC<User> = (props) => {
  const { name, hobbies } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{name}</dd>
      <dt>趣味</dt>
      <dd>{hobbies?.join(" / ")}</dd>
    </dl>
  )
}