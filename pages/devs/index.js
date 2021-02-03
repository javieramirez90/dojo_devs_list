import styles from '../../styles/Devs.module.css';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { devs: data }
  }
};

const Devs = ({ devs }) => {
  return (
    <div>
      <h1>All dojodevs developers</h1>
        <div>
          <a className={styles.single}>
            <h3>Javier Ramírez</h3>
          </a>
        </div>
        <div>
          <a className={styles.single}>
            <h3>Daniela Zurroza</h3>
          </a>
        </div>
        {
          devs.map(dev => (
            <div key={dev.id}>
              <a className={styles.single}>
                <h3>{ dev.name }</h3>
              </a>
            </div>
          ))
        }
    </div>
  );
}

export default Devs;
