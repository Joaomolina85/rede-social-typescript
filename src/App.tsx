import { Header } from './components/Header.jsx';
import { Sidebar } from './components/Sidebar.jsx';
import { Post, PostType } from './components/Post.jsx';
import './global.css';
import styles from './App.module.css';


const posts : PostType[] = [

  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/joaomolina85.png',
      name: 'João Molina',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋', },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻', },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-21'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/joaomolina85.png',
      name: 'João Molina',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋', },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻', },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-20'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              < Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}







