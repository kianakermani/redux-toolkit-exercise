import { useSelector } from "react-redux";

function App() {
  const userList = useSelector((state) => state.users.value);
  console.log(userList);
  return (
    <>
      <div className="p-10 bg-black">
        <div>
          {userList.map((usr) => {
            return (
              <div
                key={usr.id}
                className="p-2 mt-2 rounded-md bg-cyan-700 text-gray-50"
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
