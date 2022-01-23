import ReactLoading from "react-loading";

function Loading({
  type = "spin",
  color = "#1f61f7",
  height = 100,
  width = 100,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ReactLoading type={type} color={color} height={height} width={width} />
    </div>
  );
}

export default Loading;
