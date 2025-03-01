import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <>
      <div className="bg-lime-700 text-white flex justify-around p-4 font-bold">
        <div className="border-2 w-8/12 p-4">
          <ul>
            <li>Home</li>
            <li>What's New</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>
        <SocialMediaLinks />
      </div>
    </>
  );
};

export default Footer;
