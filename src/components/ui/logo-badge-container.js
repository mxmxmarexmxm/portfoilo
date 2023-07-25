import React from 'react';
import react from './../../assets/img/logo/react.png';
import next from './../../assets/img/logo/next.png';
import tailwind from './../../assets/img/logo/tailwind.png';
import graphql from './../../assets/img/logo/graphql.png';
import firebase from './../../assets/img/logo/firebase.png';
import css from './../../assets/img/logo/css.png';
import html from './../../assets/img/logo/html.png';
import js from './../../assets/img/logo/js.png';

const logos = {
  react: react,
  next: next,
  tailwind: tailwind,
  graphql: graphql,
  firebase: firebase,
  css: css,
  html: html,
  js: js,
};

const LogoBadgeContainer = (props) => {
  const { techs } = props;
  return (
    <div className="w-full flex justify-center items-center gap-4">
      {techs.map((tech) => (
        <div
          key={tech}
          className="h-10 sm:h-20  flex aspect-square rounded-full hover:scale-125"
        >
          <img
            src={logos[tech]}
            className="w-full object-contain"
            alt={`${tech}-logo`}
          />
        </div>
      ))}
    </div>
  );
};

export default LogoBadgeContainer;
