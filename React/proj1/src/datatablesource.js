export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headername: "Email",
    width: 230,
  },
  {
    field: "age",
    headername: "Age",
    width: 160,
    cellRender: (params) => {
      return <div className="cellWithStatus">{params.row.status}</div>;
    },
  },
  {
    field: "status",
    headername: "Status",
    width: 100,
  },
];

export const userRows = [
  {
    id: 1,
    username: "snow",
    img: "",
    status: "active",
    email: "john@gmail.com",
    age: 28,
  },
  {
    id: 2,
    username: "jamie",
    img: "",
    status: "active",
    email: "lan@gmail.com",
    age: 35,
  },
  {
    id: 3,
    username: "cersie",
    img: "",
    status: "active",
    email: "cersie@gmail.com",
    age: 34,
  },
  {
    id: 4,
    username: "arya",
    img: "",
    status: "active",
    email: "arya@gmail.com",
    age: 19,
  },
  {
    id: 5,
    username: "rob",
    img: "",
    status: "active",
    email: "rob@gmail.com",
    age: 26,
  },
];
