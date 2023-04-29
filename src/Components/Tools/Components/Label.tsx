function Label(props: { data: { name: string; icon?: any; color?: string }[] }) {
  const panels = [];

  for (let i = 0; i < props.data.length; i++) {
    const Icon = props.data[i].icon;

    panels.push(
      <div
        key={i}
        className="bg-[#191724] rounded-md flex text-white p-3 gap-2 items-center"
      >
        {Icon && <Icon className={`w-10 h-10 flex ${props.data[i].color}`} />}
        {props.data[i].name}
      </div>
    );
  }

  return <>{panels}</>;
}

export default Label;
