const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({});
    const [editUser, setEditUser] = useState(null);

    const handleUpdateUser = (id) => {
        axios.put(`http://localhost:8000/api/updateUser/${id}`, editUser)
          .then(() => {
            fetchUsers();
            setEditUser(null);
          })
          .catch((error) => {
            console.log(error);
          });
      };

    const fetchUsers = () => {
        axios.get("http://localhost:8000/api/getUsers")
          .then((response) => {
            setUsers(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };

    const handleDeleteUser = (id) => {
        axios.delete(`http://localhost:8000/api/deleteUser/${id}`)
          .then(() => {
            setUsers(users.filter(user => user._id !== id));
          })
          .catch((error) => {
            console.log(error);
          });
      };

    const handleCreateUser = () => {
        axios.post("http://localhost:8000/api/createUser", newUser)
          .then(() => {
            fetchUsers();
            setNewUser({ ticketnum: '', settled: 'false', attended: 'false' });
          })
          .catch((error) => {
            console.log(error);
          });
      };

    useEffect(() => {
        fetchUsers();
      }, []);