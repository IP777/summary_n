import React from "react";
import { useTranslation } from "react-i18next";
import avatar from "../assets/image/avatar.jpg";
import { SVG } from "../assets/image/svg/Sprites";

export default function LeftBlock() {
  const { t } = useTranslation();
  return (
    <div className="p-6 pt-4 text-white bg-brown-100">
      <div className="flex flex-col w-full">
        <div className="flex justify-center w-full mb-1">
          <img
            src={avatar}
            alt="avatar"
            className="object-cover border-2 border-white rounded-full w-44 h-44"
          />
        </div>

        <div className="mb-4">
          <h3 className="text-2xl font-semibold">{t("lb.contact")}</h3>
          <p>+38 093 626-49-07</p>
          <p>ivanov.piter.86@gmail.com</p>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-2xl font-semibold">{t("lb.profile")}</h3>
          <div className="flex items-center w-full mb-1">
            <SVG
              id="github"
              fill="#fff"
              height={30}
              style={{ marginRight: 10 }}
            />
            <a
              href="https://github.com/IP777"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              https://github.com/IP777
            </a>
          </div>
          <div className="flex items-center w-full mb-1">
            <SVG
              id="linkedin"
              fill="#fff"
              height={30}
              style={{ marginRight: 10 }}
            />
            <a
              href="www.linkedin.com/in/пётр-иванов-bbb9431ba"
              target="_blank"
              rel="noopener noreferrer"
              className="w-48 break-words hover:underline"
            >
              www.linkedin.com/in/пётр-иванов-bbb9431ba
            </a>
          </div>
          <div className="flex items-center w-full">
            <SVG
              id="facebook"
              fill="#fff"
              height={30}
              style={{ marginRight: 10 }}
            />
            <a
              href="https://www.facebook.com/petro.ivanov.86"
              target="_blank"
              rel="noopener noreferrer"
              className="w-48 break-words hover:underline"
            >
              https://www.facebook.com/petro.ivanov.86
            </a>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-2xl font-semibold">{t("lb.tSkills")}</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SCSS</li>
            <li>JavaScript / ES6</li>
            <li>Gulp</li>
            <li>Git/GitHub</li>
            <li>React.js + Redux</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">{t("lb.sSkills")}</h3>
          <ul>
            <li>{t("lb.skills.critical")}</li>
            <li>{t("lb.skills.creative")}</li>
            <li>Agile</li>
            <li>{t("lb.skills.dev")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}