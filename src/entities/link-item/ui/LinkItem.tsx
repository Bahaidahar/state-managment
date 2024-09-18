import React from "react";
import { ILinkItem } from "../models/interface";
import Link from "next/link";

const LinkItem = ({ href, title, description, color }: ILinkItem) => {
  return (
    <Link
      target="_blank"
      href={href}
      className="theme-transition block transform rounded-xl bg-white p-6 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
    >
      <h3
        className={`mb-2 text-2xl font-semibold text-${color}-500 dark:text-${color}-400 theme-transition`}
      >
        {title}
      </h3>
      <p className="theme-transition text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </Link>
  );
};

export default LinkItem;
