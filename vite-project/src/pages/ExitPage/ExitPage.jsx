// создать заглушки для страницы компонента ExitPage

import PopExit from "../../Components/POPUPs/PopExit/PopExit";

export default function ExitPage({ logout }) {
  return (
    <PopExit logout={logout} />
  )
}
