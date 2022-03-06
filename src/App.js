import CommentDetail from "./CommentDetail";
import CommentDetailClass from "./CommentDetailClass";
import "./styles.css";

export default function App() {
  const props = {
    name: "Hoa",
    day: "6h",
    title: "de vl"
  };
  return (
    <div>
      <CommentDetail content={props}></CommentDetail>
      <CommentDetailClass content={props}></CommentDetailClass>
      {/* <CommentDetail></CommentDetail> */}
    </div>
  );
}
