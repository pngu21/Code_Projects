import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Swipeable from "react-swipeable-cards";

const SwipeCards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await api.get("/users");
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  const handleSwipe = async (direction, targetUserId) => {
    if (direction === "right") {
      await api.post("/match", { targetUserId });
      alert("Matched!");
    }
  };

  return (
    <Swipeable
      items={users}
      renderItem={(user) => (
        <div key={user._id}>
          <h3>{user.name}</h3>
          <img src={user.profilePicture} alt={user.name} />
          <p>{user.interests.join(", ")}</p>
        </div>
      )}
      onSwipe={(dir, user) => handleSwipe(dir, user._id)}
    />
  );
};

export default SwipeCards;
