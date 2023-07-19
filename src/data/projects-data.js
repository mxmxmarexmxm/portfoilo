import maskeDesk from '../assets/img/maskeDesk.png';
import maskePhone from '../assets/img/maskePhone.png';
import placeholderPc from '../assets/img/placeholder-pc.png';
import placeholderPhone from '../assets/img/placehoder-phone.png';

const projects = [
  {
    title: 'E-COMMERCE APPLICATION',
    name: 'Maske.rs',
    phoneImgUrl: maskePhone,
    desktopImgUrl: maskeDesk,
    description:
      'Online store for selling mobile devices equipment, especially for covers.',
    url: 'https://maske.rs/',
    techs: ['react', 'next', 'tailwind', 'graphql'],
  },
  {
    title: 'CONTENT MANAGEMENT SYSTEM',
    name: 'ASM Wartung',
    phoneImgUrl: placeholderPhone,
    desktopImgUrl: placeholderPc,
    description:
      'Wartung is a comprehensive CMS tailored for businesses, offering seamless content creation, editing, and management capabilities. ',
    url: 'https://app.asm-wartung.de/',
    techs: ['react', 'tailwind'],
  },
  {
    title: 'CHAT APPLICATION',
    name: 'ChatFlix',
    phoneImgUrl: placeholderPhone,
    desktopImgUrl: placeholderPc,
    description:
      'ChatFilx is an IT-focused chat application that fosters collaborative discussions and knowledge sharing among professionals in a user-friendly environment.',
    url: 'https://mxmxmarexmxm.github.io/ChatFlix/',
    github: 'https://github.com/mxmxmarexmxm/ChatFlix',
    techs: ['react', 'CSS Modules', 'Firebase'],
  },
  {
    title: 'SHORT CONTENT BLOCKER',
    name: 'AntiReels',
    // phoneImgUrl: maskePhone,
    desktopImgUrl: placeholderPc,
    description:
      'AntiReels is a simple extension for Firefox and Chrome that helps you stay focused and productive by blocking short content from Facebook, Instagram, TikTok and YouTube. ',
    // url: 'https://maske.rs/',
    github:'https://github.com/mxmxmarexmxm/AntiReels',
    techs: ['html', 'css', 'js'],
  },
];

export default projects;
