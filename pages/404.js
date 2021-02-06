import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const _404 = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000)
  }, []);

  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>This page cannot be found.</h2>
      <p>Go back to the <Link href="/"><a>home page</a></Link></p>
    </div>
  )
}

export default _404;