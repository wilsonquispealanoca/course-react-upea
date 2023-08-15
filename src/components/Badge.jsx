import React from "react";
import badgeImage from "../assets/badgeImage.png";
import logoLoading from "../assets/logoLoading.png";
import avatarDefault from "../assets/avatarDefault.png";
import "./styles/Badge.css";

function Badge({ name, hashtag, description, userName, isLoading }) {
  let classesImg = `${
    isLoading === false ? "Badge__header-loading skeleton" : "Badge__header"
  }`;

  let classesDescription = `${
    isLoading === false
      ? "Badge__description-loading skeleton"
      : "Badge__description"
  }`;

  let classesUserName = `${
    isLoading === false ? "Badge__username-loading skeleton" : "Badge__username"
  }`;

  return (
    <>
      <div className="Badge">
        <div className={classesImg}>
          <img
            src={isLoading === false ? logoLoading : badgeImage}
            alt="Logo de la conferencia"
          />
        </div>
        <div className="Badge__section">
          <div className="Badge__section-name">
            {isLoading === false ? (
              <img
                className="Badge__avatar-loading"
                src={avatarDefault}
                alt="Avatar"
              />
            ) : (
              <img
                className="Badge__avatar"
                src="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                alt="Avatar"
              />
            )}

            <h3 className="Badge__title">{name}</h3>
          </div>

          <div className="Badge__description">
            {isLoading === false ? (
              <div className={classesDescription}></div>
            ) : (
              <div>{description}</div>
            )}

            {isLoading === false ? (
              <div className={classesUserName}></div>
            ) : (
              <strong>{userName}</strong>
            )}
          </div>
          {isLoading === false ? (
            <div className="Badge__section-footer skeleton"></div>
          ) : (
            <span className="Badge__footer">#{hashtag}</span>
          )}
        </div>
      </div>
    </>
  );
}

export default Badge;
