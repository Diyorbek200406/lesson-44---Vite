import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
const ArticlesDetails = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/articles/" + id;
  const { data, error, isPending } = useFetch(url);
  return (
    <div>
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}

      {data && (
        <div>
          <img src={data.image} alt={data.title} height="300" />
          <h2>Title : {data.title}</h2>
          <p>
            Author : <i>{data.author}</i>
          </p>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default ArticlesDetails;
