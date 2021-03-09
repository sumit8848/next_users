import Link from 'next/link'
import Image from 'next/image'
import Meta from './Meta'
const Navbar = () => {
  return (
    <>
    <Meta title='user list'/>
    <nav>
      <div className="logo">
        <Image src="/icon.png" width={128} height={77}/>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/ninjas"><a>Users</a></Link>
    </nav>
    </>
);
}
 
export default Navbar;