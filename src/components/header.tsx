import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <Image
        src="/development.png"
        alt="Google Logo"
        width={100}
        height={92}
        color="white"
        style={{ display: "block", background: "white" }}
      />

      <h1>Welcome to Next.js with React</h1>
    </div>
  );
};

export default Header;
