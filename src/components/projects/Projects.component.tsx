import Card from '../card/Card.component';

const posts = [
  {
    id: 1,
    title: 'Crwn Clothing',
    href: '#',
    description:
      'Explore a scalable e-commerce platform developed with React, Redux, and Typescript, offering a seamless user experience. Robust features and a secure authentication system ensure adaptability to evolving business needs.',
    image: '/images/sX2aF0VgDnN5P8v1.png',
    link: "https://crwn-clothing-miklik1.vercel.app/",
    github: "https://github.com/miklik1/crwn-clothing",
    tech: [{ id: 1, name: "React", icon: "devicon-react-original" }, { id: 2, name: "Redux", icon: "devicon-redux-original" }, { id: 3, name: "TypeScript", icon: "devicon-typescript-plain" }, { id: 4, name: "Firebase", icon: "devicon-firebase-plain" }]
  },
  {
    id: 2,
    title: 'Coffee Connoisseur',
    href: '#',
    description:
      'Navigate a dynamic coffee shop browsing app constructed with Next.js, employing diverse rendering techniques for optimal performance. Integrated with the Airtable API, this app not only provides location-based results but also allows users to engage through a unique upvoting system, adding a social layer to the coffee shop discovery experience.',
    image: '/images/QfWvnu8aN9gUAPrV.png',
    link: "https://discover-coffee-shops-seven.vercel.app/",
    github: "https://github.com/miklik1/discover-coffee-shops",
    tech: [{ id: 1, name: "Next.js", icon: "devicon-nextjs-line" }]
  },
  {
    id: 3,
    title: 'Face Recognition',
    href: '#',
    description:
      'Dive into a face recognition application crafted with React, utilizing the Clarifai API for accurate face detection. A server built with Node.js, Express, and PostgreSQL enables user registration and login while securely managing and tracking user data.',
    image: '/images/NmjfONDvnd.jpg',
    link: "https://face-recognition-six.vercel.app/",
    github: "https://github.com/miklik1/face-recognition",
    tech: [{ id: 1, name: "React", icon: "devicon-react-original" }, { id: 2, name: "Node.js", icon: "devicon-nodejs-plain" }, { id: 3, name: "Express", icon: "devicon-express-original" }, { id: 4, name: "PostreSQL", icon: "devicon-postgresql-plain" }]
  },
]

export default function Projects() {
  return (
    <div id="Projects" className='relative bg-blue'>
      <div className=" py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mx-auto font-black tracking-tight text-white ">PROJECTS</h2>
            <p className="text-xs md:text-sm xl:text-lg sm:w-3/4  my-8 lg:my-12 xl:my-16 mx-auto leading-2 text-white">
              Discover a collection of my projects, each representing my dedication to crafting functional and visually appealing web solutions. From responsive designs to user-friendly interfaces, explore how I bring creativity and technical expertise to every endeavor.
            </p>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
