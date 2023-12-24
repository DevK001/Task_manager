import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './CoAdminProfile.module.css';

const CoAdminProfile = () => {
  const [user, setUser] = useState(null);
  const currentUrl = window.location.pathname;
  const id = currentUrl.split("/").pop();

  useEffect(() => {
    axios.get(`http://localhost:4000/AdminPanel/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user details:', error));
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>User Profile</h2>
      <p className={styles.userDetails}>Username: {user.name}</p>
      <p className={styles.userDetails}>Email: {user.email}</p>
    </div>
  );
};

export default CoAdminProfile;