import React from "react";

const UserCard = ({userdata, Delete_Handler,Edit_Handler }) => {
 
  const data = userdata;

  return (
    <div
      className="card"
      style={{
        width: "18rem",
        border: "2px solid orange",
        borderRadius: "3%",
        margin: "2%",
        display: "inline-block",
      }}
    >
      <img
        className="card-img-top"
        src={data.Image}
        alt="Card image cap"
        style={{ maxHeight: "40%", maxWidth: "40%" }}
      />
      <div className="card-body">
        <p className="card-text">{data.name}</p>
      </div>
      <div className="card-body">
        <p className="card-text">{data.id}</p>
      </div>

      <div>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => Edit_Handler(data.id)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => Delete_Handler(data.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
