import React from 'react';
import react from './../../assets/img/react.png';
import next from './../../assets/img/next.png';
import tailwind from './../../assets/img/tailwind.png';
import graphql from './../../assets/img/graphql.png';
import firebase from './../../assets/img/firebase.png';
import css from './../../assets/img/css.png';
import html from './../../assets/img/html.png';
import js from './../../assets/img/js.png';

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
          className="h-12 sm:h-20  flex aspect-square rounded-full hover:scale-125"
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
