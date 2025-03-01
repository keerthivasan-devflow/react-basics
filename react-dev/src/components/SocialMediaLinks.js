import { FiFacebook } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router";

const SocialMediaLinks = () => {
  return (
    <div className="h-24 flex flex-col justify-around items-center p-4 text-2xl text-gray-50 space-y-2">
      <h3 className="font-semibold">Craving Updates? Follow Us</h3>
      <ul className="flex space-x-4">
        <li className="border border-gray-50 p-2 rounded-full hover:bg-gray-100 hover:text-lime-700">
          <Link to={"https://x.com/"} target="_blank">
            <FiTwitter />
          </Link>
        </li>
        <li className="border border-gray-50 p-2 rounded-full hover:bg-gray-100 hover:text-lime-700">
          <Link to={"https://www.youtube.com/"} target="_blank">
            <FiYoutube />
          </Link>
        </li>
        <li className="border border-gray-50 p-2 rounded-full hover:bg-gray-100 hover:text-lime-700">
          <Link to={"https://www.instagram.com/"} target="_blank">
            <FiInstagram />
          </Link>
        </li>
        <li className="border border-gray-50 p-2 rounded-full hover:bg-gray-100 hover:text-lime-700">
          <Link to={"https://www.facebook.com/"} target="_blank">
            <FiFacebook />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaLinks;
