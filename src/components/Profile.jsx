import { useState } from "react"

const Profile = () => {
  const [profile, setProfile] = useState({
    name:'',
    age:""
  })

const handleChange = (e) => {
const {name,value} = e.target;

setProfile((prev) => ({
  ...prev,
  [name] : value,
}))
}

  return (
    <div>

      <h1>Name : {profile.name}</h1>
      <h1>age : {profile.age}</h1>
<input className="border p-1 mt-2 mr-2" placeholder="add " type="text" name="name" value={profile.name} onChange={handleChange} />
<input className="border p-1 mt-2 mr-2" placeholder="add " type="text" name="age" value={profile.age} onChange={handleChange} />
<button className="border p-1 cursor-pointer bg-gray-500">change data</button>
    </div>
  )
}

export default Profile