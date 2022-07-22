import JoinListItem from "./JoinListItem";

const JoinList = ({ joins, onRemove, onUpdateForm }) => {
  return (
    <div className="JoinList">
      {joins.map((join, index) => (
        <JoinListItem
          key={index}
          join={join} // 출력할 정보
          idx={index} // 정보의 위치 (인덱스 값)
          onRemove={onRemove}
          onUpdateForm={onUpdateForm}
        />
      ))}
    </div>
  );
};

export default JoinList;
