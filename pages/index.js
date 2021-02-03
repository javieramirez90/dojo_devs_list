import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1 className={styles.title}>HOMEPAGE</h1>
      <p className={styles.text}>Minim anim consequat commodo magna ea officia incididunt sunt enim ipsum sint. Deserunt esse ex reprehenderit ut dolor veniam sit sunt anim elit. Anim eiusmod sit amet Lorem amet sunt ex.</p>
      <p className={styles.text}>Minim anim consequat commodo magna ea officia incididunt sunt enim ipsum sint. Deserunt esse ex reprehenderit ut dolor veniam sit sunt anim elit. Anim eiusmod sit amet Lorem amet sunt ex.</p>
      <Link href="/devs">
        <a className={styles.btn}>See Developers list</a>
      </Link>
    </div>
  );
};

export default Home;