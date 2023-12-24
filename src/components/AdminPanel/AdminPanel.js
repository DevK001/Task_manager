import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./AdminPanel.css"

const AdminPanel = () => {
  

  
  // data fetching all
  const [userData, setUserData] = useState([]);
  const fetchAllUser = async () => {
    const res = await axios.get("http://localhost:4000/AdminPanel");
    console.log(res);
    setUserData(res.data);
  };
  useEffect(() => {
    fetchAllUser();
  }, []);

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:4000/register/${id}`);
    if (res.status === 200) {
      fetchAllUser();
    }
  };
  return (
    

      <div className="relative">
        <div className="heading">
            <h2>User Dashboard</h2>
        </div>
        <table >
          <thead className="text-[17px] text-gray-700 uppercase bg-gray-500">
            <tr>
              <th scope="col" className="px-6 py-3">
                SN.
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item, i) => (
              <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {i + 1}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item?.name}
                </th>
                <td className="px-6 py-4"> {item?.email}</td>
                
                <td className="px-6 py-4">
                  <div className="flex gap-x-4 justify-center">
                    
                    <NavLink
                      to={`/UpdateUser/${item._id}`}
                      className="font-medium text-yellow-400 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </NavLink>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="font-medium text-red-500  hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
  );
};

export default AdminPanel;
