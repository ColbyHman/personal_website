// project.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: { [projectId: string]: Project } = {
    'canvas-to-calendar': {
      title: 'Canvas to Calendar',
      tagline: 'A solution for ensuring assignments are submitted on time!',
      description: 'In this project, I leveraged the Google Calendar and Canvas APIs to streamline the management of assignments on my calendar. Programmed in Python, I employed my JSON proficiency to effectively parse data sourced from Canvas, ensuring seamless integration with Google Calendar. To automate this process, I implemented an AWS Lambda function, executing a daily script that effortlessly uploads assignments to my Google Calendar, enhancing efficiency and organization in tracking academic tasks while also creating reminders to complete them.',
      repo: 'https://github.com/ColbyHman/CanvasToCalendar/',
      technologies: ['AWS Lambda - Execute the function', 'AWS S3 - Stored pickle file', 'Python', 'JSON'],
    },
    'youtube-notify': {
      title: 'YouTube Notify',
      tagline: 'Keeping Discord servers updated with their favorite YouTube content!',
      description: 'I created a Python-powered Discord Bot designed to broadcast timely video updates across multiple servers. It was tailored to accommodate unique subscription preferences for each server, fostering a personalized content experience. Employed MongoDB as the backbone to store channel subscription specifics and the latest video details. Seamless deployment on AWS ECS, encapsulated within a Docker environment to ensure optimal scalability and robust performance.',
      technologies: ['Python', 'Jenkins', 'Docker', 'MongoDB', 'AWS EC2'],
    },
    'mindfl': {
      title: 'mindfl',
      tagline: 'Emotion logging and journaling for all!',
      description: 'I once had a therapist tell me I was horrible at identifying my emotions while I was in college. That sparked an idea to build an application that could help me identify my emotions on a deeper level. With that came an idea to log my emotions and to write down what happened and why I might be feeling this way. From all of that, mindfl was born.',
      technologies: ['Vue.JS', 'JavaScript', 'Node.JS', 'AWS Cognito'],
    },
    'wedding-placecards': {
      title: 'Wedding Placecards',
      tagline: 'Who needs fancy handwriting anyway?',
      description: 'My wife and I had a very long guest list for our wedding, and I wanted to utilize the free placecards our venue gave us. Rather than painstakingly write out all of the names, I took to NodeJS to take in a scan of the placecard template and use a library to generate text on the image. The script would check the length of the name in pixels and determine the proper font size for the person(s) listed.',
      technologies: ['NodeJS'],
      images: ['assets/images/placecard.png']
    },
    'mirrulations': {
      title: 'Mirrulations',
      tagline: 'A backup of regulations.gov!',
      description: 'This was my senior Capstone class project where we were tasked with downloading all of the documents from regulation.gov - an undertaking that is much more difficult than it sounded. We utilized Python for our frontend and backend - Flask served our web interface and we used Python to create "workers" to download all of their documents with the limited API calls per key we had.',
      technologies: ['Python', 'Jenkins', 'Vagrant'],
    },
    '3d-printing': {
      title: '3D Printing',
      tagline: 'Additive Manufacturing at Home!',
      description: 'I fell in love with 3D printing after my mom bought me a beginner printer in 2018. Little did I realize how much I would love the hobby after diving deep into all of the possibilities. My favorite part of printing right now is creating helmets from Star Wars that I could never get as a kid.I also like to tinker with objects I 3D print like the power switch I created for easy access to switch my PC on and off with a safety switch to prevent my cats from turning off my machine.',
      images:['assets/images/boba-fett.png','assets/images/scout-trooper.png', 'assets/images/boba-fett-2.png','assets/images/power-switch.png']
    },
    'home-improvement': {
      title: 'Home Improvement',
      tagline: 'There\'s always something to do...',
      description: 'While Home Improvement is not really "fun" so to speak, I\'ve taken pride in the things I have learned to do. My home was given to me after my mom passed away and I have taken it upon myself to fix things up as much as I can. Projects include installing a whole house water filtration system with a softener, running network cables to my office and my wife\'s office, replacing old outdated outlets, replacing faucets and drain asemblies, and other general projects to keep the house up to date.',
    },
    'dnd-5e': {
      title: 'Dungeons and Dragons 5e Quick Reference',
      tagline: 'I cast self-host!',
      description: 'I\'m currently in a campaign with some friends that we meet weekly for over Discord. We use a quick reference site for actions and it has been very useful. However, I noticed that it does not support Dark Mode. I also noticed it was hosted on GitHub pages. So, I did what any normal software engineer would do. I forked it! One hour later, I was self hosting this site which had not been updated in about 5 years that can now be modified on a whim if we want to add "homebrew" actions.',
      technologies: ['HTML/CSS', 'JavaScript', 'Docker', 'Jenkins']
    }
  };

  getProjectDetails(projectId: string): Project {
    return this.projects[projectId];
  }
}

export interface Project {
  title: string;
  tagline: string;
  description: string;
  repo?: string;
  images?: string[];
  technologies?: string[];
  // Add other attributes as needed
}
