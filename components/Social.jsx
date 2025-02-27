import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/0xmhc" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/mouhcine-jouad/",
  },
];
function Social({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          target="_blank"
          key={index}
          href={item.path}
          className={iconStyles}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}

export default Social;
