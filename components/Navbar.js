import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='logo'>
          <Image src="/dojodevs_logo.png" width={70} height={70}/>
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/devs"><a>Devs listing</a></Link>
      </nav>
    </div>
  )
}

export default Navbar;
