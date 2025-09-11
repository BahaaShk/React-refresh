import { FaBeer } from "react-icons/fa"

const UserStatus = (props) => {
  return (
    <div>
{
  props.isAdmin && <h1>Welcome Admin</h1> || props.loggedIn && <h1 className="flex items-center gap-4">Welcome User <FaBeer size={30} style={{color:''}} color="red" /></h1>
}

    </div>
  )
}

export default UserStatus