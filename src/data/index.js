import { AiFillYoutube } from "react-icons/ai";
import aboutUsImage from "../assets/aboutUs.svg";
import abstactDiamond from "../assets/abstractDiamond.png";
import handsOn from "../assets/handson.jpg";
import event from "../assets/event.png";
import eventImg1 from "../assets/eventImg1.png";
import eventImg2 from "../assets/eventImg2.png";
import eventImg3 from "../assets/eventImg3.png";
import eventImg4 from "../assets/eventImg4.png";
import {
  MegaphoneIcon,
  HomeIcon,
  MapIcon,
  GiftIcon,
  BookOpenIcon,
  SparklesIcon,
  UsersIcon,
  TrophyIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
// Images
export {
  aboutUsImage,
  abstactDiamond,
  handsOn,
  event,
  eventImg1,
  eventImg2,
  eventImg3,
  eventImg4,
};

// Navbar
export const Links = [
  {
    title: `Home`,
    to: `/`,
    icon: HomeIcon,
  },
  {
    title: `Courses`,
    to: `/courses`,
    icon: BookOpenIcon,
  },
  {
    title: `Roadmaps`,
    to: `/roadmaps`,
    icon: MapIcon,
  },
  {
    title: `Events`,
    to: `/events`,
    icon: GiftIcon,
  },
];

export const ExternalLinks = [
  {
    title: `Podcast`,
    to: `https://www.youtube.com/playlist?list=PL9gnSGHSqcnqwmKYZ5rHuzqe32Di47KMr`,
    Icon: MegaphoneIcon,
    color: `text-purple-600`,
  },
  {
    title: `Youtube`,
    to: `https://www.youtube.com/c/KunalKushwaha`,
    Icon: AiFillYoutube,
    color: `text-rose-600`,
  },
];

// About Us
export const AboutUs = [
  {
    icon: ``,
    desc: `We believe that every student, irrespective of their college or branch, can make it big. Community Classroom is an initiative built on this thought.`,
  },
  {
    icon: ``,
    desc: `We provide hands-on training, mentorship for FREE and have an inclusive community.`,
  },
  {
    icon: ``,
    desc: `Get expert guidance with career, Open Source, and  internships, jobs around the world.`,
  },
];

// Courses
export const CourseFeatures = [
  {
    icon: SparklesIcon,
    title: `Quality Content but Completely Free`,
    desc: `All courses are FREE while never compromising on quality.`,
  },
  {
    icon: UsersIcon,
    title: `Detailed Hands On Explanation plus Mentorship`,
    desc: `We cover every topic in detail with a hands-on approach and mentor you to stand out to get opportunities by breaking all the barriers.`,
  },
  {
    icon: TrophyIcon,
    title: `Plenty Courses to make you a Champion`,
    desc: `Explore a wide range of courses including Data Structures & Algorithms, Web Development, DevOps, Machine Learning, and more!`,
  },
];

// Events
export const EventsFeatures = [
  {
    icon: UserGroupIcon,
    desc: `All of our events are completely free and open for everyone. Fun-filled events with no compromise on quality.`,
  },
  {
    icon: AcademicCapIcon,
    desc: `Events conducted will help develop various skills of students in co-curricular activities and to expose them to the current trends in the technical and professional fields.`,
  },
  {
    icon: GiftIcon,
    desc: `Explore the plethora of events & have the opportunity to grab amazing prizes & goodies!`,
  },
];
