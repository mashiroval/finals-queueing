// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Usertest = () => {
//     const [users, setUsers] = useState([]);
//     const [newUser, setNewUser] = useState({});
//     const [editUser, setEditUser] = useState(null);

//     const handleUpdateUser = (id) => {
//         axios.put(`http://localhost:8000/api/updateUser/${id}`, editUser)
//           .then(() => {
//             fetchUsers();
//             setEditUser(null);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       };

//     const fetchUsers = () => {
//         axios.get("http://localhost:8000/api/getUsers")
//           .then((response) => {
//             setUsers(response.data);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       };

//     const handleDeleteUser = (id) => {
//         axios.delete(`http://localhost:8000/api/deleteUser/${id}`)
//           .then(() => {
//             setUsers(users.filter(user => user._id !== id));
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       };

//     const handleCreateUser = () => {
//         axios.post("http://localhost:8000/api/createUser", newUser)
//           .then(() => {
//             fetchUsers();
//             setNewUser({ name: '', age: '', email: '' });
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       };

//     useEffect(() => {
//         fetchUsers();
//       }, []);

//   return (
//     <div>
//         <h1>User List</h1>
//         <hr/>
//             {users.map(user => (
//                 <p key={user._id}>
//                     {user.name} - {user.age} - {user.email}
//                     <br/><button onClick={() => setEditUser(user)}>Edit</button>     <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
//                 </p>
//             ))}
//         <hr/>
//         <h2>Create User</h2>

//             <input
//                 type="text"
//                 placeholder="Name"
//                 value={newUser.name}
//                 onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//             /><br/>

//             <input
//                 type="number"
//                 placeholder="Age"
//                 value={newUser.age}
//                 onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
//             /><br/>

//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={newUser.email}
//                 onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//             /><br/>
//             <button onClick={handleCreateUser}>Create</button>

//         {editUser && (
//             <div>
//                 <hr/>
//                 <h2>Edit User</h2>
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     value={editUser.name}
//                     onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
//                 /><br/>

//                 <input
//                     type="number"
//                     placeholder="Age"
//                     value={editUser.age}
//                     onChange={(e) => setEditUser({ ...editUser, age: e.target.value })}
//                 /><br/>

//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={editUser.email}
//                     onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
//                 /><br/>

//                 <button onClick={() => handleUpdateUser(editUser._id)}>Update</button>     <button onClick={() => setEditUser(null)}>Cancel</button>
//             </div>

//         )}
//     </div>
//   )
// }

// export default Usertest




// /////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import NavBar from "../components/NavBar";
// import './pagestyles.css';
// import axios from 'axios';

// function AdminQueuePage() {
//   const [users, setUsers] = useState([]);
//   const [counterTickets, setCounterTickets] = useState({
//     Register: null,
//     Withdraw: null,
//     Deposit: null,
//     Service: null,
//   });
//   const [waiting, setWaiting] = useState([]);

//   const fetchUsers = () => {
//     axios.get("http://localhost:8000/api/getUsers")
//       .then((response) => {
//         const fetchedUsers = response.data;
//         const waitingList = [];
        
//         const counterAssignments = {
//           Register: null,
//           Withdraw: null,
//           Deposit: null,
//           Service: null,
//         };

//         // Assign the first user for each type to the respective counter
//         fetchedUsers.forEach(user => {
//           if (!counterAssignments[user.type]) {
//             counterAssignments[user.type] = user;
//           } else {
//             waitingList.push(user);
//           }
//         });

//         setCounterTickets(counterAssignments);
//         setWaiting(waitingList);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleNext = (type) => {
//     const nextTicket = waiting.find(user => user.type === type);
//     const newWaiting = waiting.filter(user => user !== nextTicket);
    
//     setCounterTickets(prev => ({ ...prev, [type]: nextTicket || null }));
//     setWaiting(newWaiting);
//   };

//   const handleDelete = (type) => {
//     setCounterTickets(prev => ({ ...prev, [type]: null }));
//   };

//   useEffect(() => {
//     fetchUsers();
//     const interval = setInterval(fetchUsers, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <NavBar/>

//       <div className='servingbox'>
//         <h3 className="admins1">SERVING NOW</h3>
//       </div>

//       <div className="rows">
//         <div className='admin-container' id="column">

//           {["Register", "Withdraw", "Deposit", "Service"].map((type, index) => (
//             <div className={`squares${index + 1}`} key={type}>
//               <h4 className='counter'>Counter {index + 1}</h4>
//               <p>
//                 {counterTickets[type] ? counterTickets[type].ticketnum : "No ticket"}
//               </p>
//               <button className="delete" onClick={() => handleDelete(type)}>DELETE</button>
//               <button className="next" onClick={() => handleNext(type)}>NEXT</button>
//             </div>
//           ))}

//         </div>

//         <div id="column">
//           <div className="squares5">
//             <h3 className="admins2">WAITING</h3>
//             {waiting.map(user => (
//               <p key={user._id}>{user.ticketnum}</p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminQueuePage;
