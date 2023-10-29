export type BadgeType = {
  id: number;
  name: string;
  icon: string;
};

export default function Badge(props: { badge: BadgeType }) {

  const { name, icon } = props.badge;
  
  return (
    <span className="inline-flex items-center justify-center rounded-md px-2 py-1 text-xs ring-1 ring-inset ring-blue gap-x-2">
      <i className={`${icon}`}></i>
      <p>{name}</p>
    </span>
  )
}
