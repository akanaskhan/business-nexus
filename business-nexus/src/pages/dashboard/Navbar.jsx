import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";
import { MessageSquareText } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar({ data, handleLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-neutral-100">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto px-4 sm:px-8 py-1 sm:py-2">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/logo.png" className="h-12 w-full" alt="Logo" />
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <Link
                to="/dashboard/chat"
                className="relative hover:bg-muted p-2 rounded-full cursor-pointer"
              >
                <MessageSquareText className="text-xl text-neutral-500" />
                <div className="absolute top-0 right-0 inline-flex items-center justify-center h-2 w-2 text-xs font-medium text-white bg-red-500 rounded-full mt-1 mr-1"></div>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                  <div className="relative cursor-pointer">
                    {data.profilePicture && (
                      <img
                        src={data.profilePicture}
                        alt="Profile"
                        className="w-9 h-9 rounded-full bg-cover"
                      />
                    )}
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-4 ">
                  <Link to="/dashboard/profile">
                    <DropdownMenuItem className="cursor-pointer">
                      Profile
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="cursor-pointer"
                  >
                    <div className="w-full flex items-center justify-between">
                      <p>Logout</p>
                      <LogOut
                        size={20}
                        className="cursor-pointer"
                        title="Log out"
                      />
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* <span title={`${data.fullName}`}>
                {data.fullName.length > 10
                  ? `${data.fullName.substring(0, 10)}...`
                  : data.fullName}
              </span> */}
            </div>
          </div>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          
        </div>
      </div>
    </nav>
  );
}
