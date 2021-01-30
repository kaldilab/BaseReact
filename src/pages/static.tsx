interface List {
  id: number;
  title: string;
  description: string;
}

const Static = () => {
  const staticList = [
    {
      id: 1,
      title: "Veniam in do consequat non.",
      description:
        "Do et sint laboris mollit ullamco duis esse ipsum quis fugiat mollit non ullamco minim. Enim veniam laboris nisi voluptate dolore tempor ipsum. Magna commodo cillum sunt minim pariatur magna veniam deserunt. Laboris exercitation culpa occaecat labore cillum anim ea aute dolor irure do. Magna voluptate ex ex ad consequat laboris velit. Fugiat eu nisi aliquip eiusmod ullamco proident eiusmod fugiat adipisicing. Veniam ipsum tempor ut commodo laboris.",
    },
    {
      id: 2,
      title:
        "Aliquip irure eu aliquip qui fugiat esse in dolore cupidatat labore consectetur.",
      description:
        "Tempor tempor eu id ut nisi eu ut. Veniam sit consectetur labore proident id reprehenderit deserunt officia elit. Do ad minim nostrud dolore proident cupidatat culpa exercitation ipsum eiusmod deserunt ullamco fugiat.",
    },
    {
      id: 3,
      title:
        "Labore minim id consectetur dolor magna dolor nostrud fugiat velit amet incididunt aute.",
      description:
        "Consectetur consequat non elit irure in enim et incididunt commodo sunt. Ea elit labore aute sint adipisicing voluptate dolor amet eiusmod eiusmod commodo eiusmod cillum. Cupidatat reprehenderit eu magna nulla consequat officia sunt culpa fugiat eu excepteur adipisicing. In duis fugiat ullamco cupidatat minim enim velit nisi non et anim laboris. Incididunt velit consectetur officia sit sit dolore pariatur aliquip ullamco labore culpa dolor magna reprehenderit.",
    },
  ];
  return (
    <ul className="list-group list-group-flush">
      {staticList.map((item: List, index: number) => (
        <li key={index} className="list-group-item">
          <h3>
            [{item.id}] : {item.title}
          </h3>
          <div>{item.description}</div>
        </li>
      ))}
    </ul>
  );
};

export default Static;
