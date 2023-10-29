import Badge from "../badge/Badge.component";

type CardType = {
  id: number;
  title: string;
  href: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tech: Array<{
    id: number;
    name: string;
    icon: string;
  }>;
};

type CardProps = {
  post: CardType;
};

const Card: React.FC<CardProps> = ({ post }) => {
  return (
    <article key={post.id} className="flex max-w-lg flex-col items-start justify-between mx-auto bg-white p-4 border-t-8 border-red rounded">
      <div className="flex items-center text-xs mx-auto">
        <a href={post.link} target="_blank" rel="noopener noreferrer">
          <img src={`${post.image}`} alt={post.title} className="rounded mx-auto" />
        </a>
      </div>
      <div className="group relative">
        <div className="flex  items-center place-content-between">
          <a href={post.link} target="_blank">
            <h3 className="mt-3 text-m font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <span className="mr-2 hover:mr-3">{post.title}</span><span className="hover:ml-1">&rarr;</span>
            </h3>
          </a>
          <a className="static mt-3 hover:scale-125" href={post.github} target="_blank">
            <i className="devicon-github-original"></i>
          </a>
        </div>
        <p className="mt-3 line-clamp-5 text-xs leading-4 text-gray-600">{post.description}</p>
      </div>
      <div className="relative mt-4 flex items-center gap-x-4">
        {post.tech.map((badge) => (
          <Badge key={badge.id} badge={badge} />
        ))}
      </div>
    </article>
  );
};

export default Card;