//App.js

import { useSelector } from "react-redux";

function App() {
  const userList = useSelector((state) => state.users.value);
  console.log(userList);
  return (
    <>
      <div className="bg-slate-900 h-screen ">
        {/* Make user */}
        <div className="py-2 pt-7">
          <input
            type="text"
            placeholder="Name..."
            className="ml-5 p-1 rounded"
          />
          <input
            type="text"
            placeholder="Username..."
            className="ml-3 p-1 rounded"
          />
          <button className="ml-4 bg-cyan-700 p-1 rounded">Add User</button>
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
