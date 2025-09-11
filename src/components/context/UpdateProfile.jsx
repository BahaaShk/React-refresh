import { useContext, useState } from "react"
import { UserContext} from "./UserContext"

const UpdateProfile = () => {
  const [newName, setNewName] = useState('');
  const {updateUser} = useContext(UserContext);

  const handleSubmit = (e) => {
e.preventDefault()
if(newName.trim()){
  updateUser(newName)
}
setNewName('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" value={newName} onChange={e => setNewName(e.target.value)} className=" border p-1" placeholder="enter new name" />
      <button type="submit" className="border p-1">Submit name</button>
      </form>
    </div>
  )
}

export default UpdateProfile