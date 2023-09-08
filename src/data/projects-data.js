import chatFlix from '../assets/img/projects/chatflix.png';
import wartung from '../assets/img/projects/wartung.png';
import itQuiz from '../assets/img/projects/it-quiz.png';
import maske from '../assets/img/projects/maske.png';
import antiReels from '../assets/img/projects/antireels.png';

const projects = [
  {
    title: 'E-COMMERCE APPLICATION',
    name: 'Maske.rs',
    projectImg: maske,
    description:
      'Online store for selling mobile devices equipment, especially for covers.',
    liveUrl: 'https://maske.rs/',
    techs: ['work', 'react', 'typescript', 'next', 'tailwind', 'graphql'],
  },
  {
    title: 'CHAT APPLICATION',
    name: 'ChatFlix',
    projectImg: chatFlix,
    description:
      'ChatFilx is an IT-focused chat application that fosters collaborative discussions and knowledge sharing among professionals in a user-friendly environment.',
    liveUrl: 'https://mxmxmarexmxm.github.io/ChatFlix/',
    githubUrl: 'https://github.com/mxmxmarexmxm/ChatFlix',
    techs: ['personalProject', 'react', 'css', 'firebase'],
  },
  {
    title: 'SHORT CONTENT BLOCKER',
    name: 'AntiReels',
    projectImg: antiReels,
    noPhoneImg: true,
    description:
      'AntiReels is a simple extension for Firefox and Chrome that helps you stay focused and productive by blocking short content from Facebook, Instagram, TikTok and YouTube. ',
    liveUrl: 'https://addons.mozilla.org/en-US/firefox/addon/antireels',
    githubUrl: 'https://github.com/mxmxmarexmxm/AntiReels',
    techs: ['personalProject', 'html', 'css', 'js'],
  },
  {
    title: 'QUIZ APPLICATION',
    name: 'IT Quiz',
    projectImg: itQuiz,
    description:
      'IT Quiz is a simple quiz application. It provides a collection of IT-related questions and allows users to test their knowledge in various IT domains.',
    liveUrl: 'https://mxmxmarexmxm.github.io/it-quiz/',
    githubUrl: 'https://github.com/mxmxmarexmxm/it-quiz',
    techs: ['personalProject', 'react', 'css'],
  },
  {
    title: 'CONTENT MANAGEMENT SYSTEM',
    name: 'ASM Wartung',
    projectImg: wartung,
    description:
      'Wartung is a comprehensive CMS tailored for businesses, offering seamless content creation, editing, and management capabilities. ',
    liveUrl: 'https://app.asm-wartung.de/',
    techs: ['work', ' react', 'tailwind'],
  },
];

export default projects;
