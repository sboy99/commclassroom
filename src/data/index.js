import { AiFillYoutube } from "react-icons/ai";
import {
  MegaphoneIcon,
  HomeIcon,
  MapIcon,
  GiftIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
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
