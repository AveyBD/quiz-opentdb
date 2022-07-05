import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <ReactLoading
        type={"spin"}
        color={"#1086808a"}
        height={"10%"}
        width={"10%"}
      />
    </div>
  );
};

export default Loading;
