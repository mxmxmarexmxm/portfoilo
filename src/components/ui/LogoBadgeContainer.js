import React from 'react';
import react from './../../assets/img/logo/react.png';
import next from './../../assets/img/logo/next.png';
import tailwind from './../../assets/img/logo/tailwind.png';
import graphql from './../../assets/img/logo/graphql.png';
import firebase from './../../assets/img/logo/firebase.png';
import css from './../../assets/img/logo/css.png';
import html from './../../assets/img/logo/html.png';
import js from './../../assets/img/logo/js.png';
import work from './../../assets/img/logo/work.png';
import personalProject from './../../assets/img/logo/personal-project.png';
import typescript from './../../assets/img/logo/typescript.png';

const logos = {
  react: react,
  next: next,
  tailwind: tailwind,
  graphql: graphql,
  firebase: firebase,
  css: css,
  html: html,
  js: js,
  typescript: typescript,
  personalProject: personalProject,
  work: work,
};

const LogoBadgeContainer = (props) => {
  const { techs, animation, justify } = props;
  return (
    <div
      className={`w-full flex items-center gap-4 flex-wrap ${
        justify === 'justify-start' ? 'justify-start' : 'justify-center'
      } `}
    >
      {techs.map((tech) => (
        <div
          key={tech}
          className={`h-10 sm:h-16 flex aspect-square rounded-full ${animation}`}
        >
          <img
            src={logos[tech]}
            className={`w-full object-contain hover:scale-125`}
            alt={`${tech}-logo`}
          />
        </div>
      ))}
    </div>
  );
};

export default LogoBadgeContainer;
