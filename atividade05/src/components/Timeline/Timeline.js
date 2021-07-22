import './Timeline.css';

import Post from '../Post/Post';

export default function Timeline() {
  let posts = [
    {
      id: 1,
      user: "Ítalo Lima",
      content: "Argentina é o ****",
      numberOfLikes: 117,
    },
    {
      id: 2,
      user: "Ítalo Lima Dantas",
      content: "Estou ansioso que as aulas voltem logo.",
      numberOfLikes: 31,
    },
    {
      id: 3,
      user: "Torcedor Nutella",
      content: "Tô feliz que o Messi foi campeão pela seleção :)",
      numberOfLikes: 2,
    }
  ];

  return (
    <div className="timeline">
      <ul>
        {
          posts.map((post) => (
            <Post key={post.id} user={post.user} content={post.content} numberOfLikes={post.numberOfLikes}/> 
          ))
        }
      </ul>
    </div>
  )
}