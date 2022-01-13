import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import avatar from "../assets/image/avatar.jpg";

const StyledLeftBlock = styled.div`
  background-color: var(--color-light-gray);
  font-size: 16px;
  .avatar_wrapper {
    .avatar {
      width: 125px;
      height: 125px;
      margin-bottom: 20px;
    }
  }
  .contacts {
    margin-bottom: 50px;
  }
  .profile {
    margin-bottom: 44px;
    .link {
      display: block;
      font-size: 14px;
      margin-bottom: 5px;
      text-decoration: underline;
      &:hover {
        color: var(--color-orange);
      }
    }
  }
  .technical_skills {
    margin-bottom: 50px;
  }

  .titles {
    font-size: 16px;
    font-weight: 600;
  }
  .item {
    font-size: 14px;
  }
`;

export default function LeftBlock() {
  const { t } = useTranslation();
  return (
    <StyledLeftBlock className="p-6 pt-4">
      <div className="flex flex-col w-full">
        <div className="flex justify-start w-full avatar_wrapper">
          <img
            src={avatar}
            alt="avatar"
            className="object-cover border-2 border-white rounded-full avatar"
          />
        </div>

        <div className="contacts">
          <p>+38 093 626-49-07</p>
          <p>ivanov.piter.86@gmail.com</p>
        </div>

        <div className="profile">
          <h3 className="titles">{t("lb.profile")}</h3>
          <a
            href="https://github.com/IP777"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            github.com
          </a>
          <a
            href="www.linkedin.com/in/пётр-иванов-bbb9431ba"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            linkedin.com
          </a>
          <a
            href="https://www.facebook.com/petro.ivanov.86"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            facebook.com
          </a>
        </div>

        <div className="technical_skills">
          <h3 className="titles">{t("lb.tSkills")}</h3>
          <ul>
            <li className="item">HTML5</li>
            <li className="item">CSS3</li>
            <li className="item">SCSS</li>
            <li className="item">JavaScript / ES6</li>
            <li className="item">Gulp</li>
            <li className="item">Git/GitHub</li>
            <li className="item">React.js + Redux</li>
            <li className="item">MongoDB</li>
          </ul>
        </div>
        <div>
          <h3 className="titles">{t("lb.sSkills")}</h3>
          <ul>
            <li className="item">{t("lb.skills.critical")}</li>
            <li className="item">{t("lb.skills.creative")}</li>
            <li className="item">Agile</li>
            <li className="item">{t("lb.skills.dev")}</li>
          </ul>
        </div>
      </div>
    </StyledLeftBlock>
  );
}
