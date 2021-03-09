import styles from '../../styles/Jobs.module.scss'
import Link from 'next/link'

// Runs before this component jsx gets rendered
export const getStaticProps = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return{
    props: {ninjas: data}
  }
}

const Ninjas = ({ninjas}) => {
  return (
    <div>
      <h1>All Users</h1>
      {ninjas.map(ninja => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Ninjas;