import { useToken } from "./useToken";

function Logout() {
  const { token, logout } = useToken();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await logout();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <button
        className="text-white font-medium hover:text-gray-400 transition duration-300"
        type="submit"
      >
        Logout
      </button>
    </form>
  );
}

export default Logout;
