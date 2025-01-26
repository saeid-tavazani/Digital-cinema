type Props = {
  text: string;
  detail: string | number;
};

const MovieDetail = ({ text, detail }: Props) => {
  return (
    <p>
      <span className="font-semibold">{text}:</span> {detail}
    </p>
  );
};

export default MovieDetail;
