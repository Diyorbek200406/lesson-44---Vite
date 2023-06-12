import useFetch from "../../hooks/useFetch";
const Articles = () => {
  const [data, isPending, error] = useFetch("http://localhost:3000/articles");

  return (
    <div>
      {isPending && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {data &&
        data.map((article) => {
          return (
            <div key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.author}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Articles;
