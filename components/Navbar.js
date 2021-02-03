import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='logo'>
          <h1>Developers list</h1>
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/devs"><a>Devs listing</a></Link>
      </nav>
    </div>
  )
}

export default Navbar;
