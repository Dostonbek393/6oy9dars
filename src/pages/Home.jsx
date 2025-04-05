import { useCollection } from "../hooks/useCollection";

function Home() {
  const { data } = useCollection("recepies");
  return (
    <div>
      {data &&
        data.map((r) => {
          return <h2 key={r.id}>{r.title}</h2>;
        })}
    </div>
  );
}

export default Home;
