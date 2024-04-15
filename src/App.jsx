import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./features/Users";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  return (
    <>
      <div className="bg-slate-900 h-screen ">
        {/* Make user */}
        <div className="py-2 pt-7">
          <input
            type="text"
            placeholder="Name..."
            className="ml-5 p-1 rounded"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Username..."
            className="ml-3 p-1 rounded"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <button
            className="ml-4 bg-cyan-700 p-1 rounded"
            onClick={() => {
              dispatch(
                addUser({
                  id: userList[userList.length - 1].id + 1,
                  name,
                  username,
                })
              );
              //dispatch(addUser({ id: 0, name: name, username: username }));
            }}
          >
            Add User
          </button>
        </div>
        {/* Read information from store */}
        <div>
          {userList.map((usr) => {
            return (
              <div
                key={usr.id}
                className="p-2 m-5 rounded-md bg-cyan-700 text-black w-6/12"
              >
                <span className="font-semibold">Name: </span>
                <span> {usr.name} | </span>
                <span className="font-semibold">Username: </span>
                <span>{usr.username}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
