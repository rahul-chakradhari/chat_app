import "./myStyles.css";

const Users = () => {
  return (
    <div className="list">
      Users
      <div className="search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search" className="box" />
      </div>
      <div className="conversation">
        {conversations.map((conversation) => (
          <Conversationitem key={conversation.id} {...conversation} />
        ))}
      </div>
    </div>
  );
};

export default Users;
