function Label(props: {
  data: { name: string; icon?: React.ElementType; color?: string }[];
}) {
  return (
    <>
      {props.data.map((item, index) => {
        const hasIcon = item.hasOwnProperty("icon");
        const Icon = item.icon;

        return (
          <div
            key={index}
            className={`rounded-md flex text-white p-3 gap-2 items-center ${
              hasIcon ? "bg-[#191724]" : "bg-[#23253B]"
            }`}
          >
            {Icon && <Icon className={`w-10 h-10 flex ${item.color}`} />}
            {item.name}
          </div>
        );
      })}
    </>
  );
}

export default Label;
