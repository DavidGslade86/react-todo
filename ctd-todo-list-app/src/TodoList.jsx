
export default function TodoList() {

  {/* array of items added to list*/}
  const todoList = [
    {id:1,
    title:"Complete Assignment"},
    {id:2,
    title:"Complete Reading"},
    {id:3,
    title:"Annotate notes"},
    {id:4,
    title:"Watch Videos and update notes"}
  ]

  return (
    <>
      <ul className="list--container">
        {/* Renders each item in "todoList" as <li>*/}
        {todoList.map(item => <li className="list--items" key={item.id}>{item.title}</li>)}
      </ul>
    </>
  )
}
