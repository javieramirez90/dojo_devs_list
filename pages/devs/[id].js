export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths =  data.map(dev => {
    return {
      params: { id: dev.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
};

export const getStaticProps = async (context) => {
  const id =  context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json();

  return {
    props: { dev: data }
  }
};

const Details = ({ dev }) => {
  return (
    <div>
      <h1>Details page</h1>
      <h2>{dev.name}</h2>
      <h4>{dev.email}</h4>
      <h5>{dev.website}</h5>
    </div>
  );
};

export default Details;