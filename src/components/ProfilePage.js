import React, { useState } from 'react';

const initialUserInfo = {
  name: 'Altynmoon',
  email: 'altynmoon_@example.com',
  bio: 'I love Bruno Mars',
};

function ProfilePage() {
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Профиль</h1>
      {isEditing ? (
        <div>
          <label>Имя: </label>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
          />
          <br />
          <label>Электронная почта: </label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
          />
          <br />
          <label>О себе: </label>
          <textarea
            name="bio"
            value={userInfo.bio}
            onChange={handleInputChange}
          />
          <br />
          <button onClick={handleSaveProfile}>Сохранить</button>
          <button onClick={handleCancelEdit}>Отмена</button>
        </div>
      ) : (
        <div>
          <p>
            <strong>Имя: </strong>
            {userInfo.name}
          </p>
          <p>
            <strong>Электронная почта: </strong>
            {userInfo.email}
          </p>
          <p>
            <strong>О себе: </strong>
            {userInfo.bio}
          </p>
          <button onClick={handleEditProfile}>Редактировать профиль</button>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
