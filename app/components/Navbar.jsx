import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import Spinner from "./Spinner";
import Image from "next/image";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2 max-w-[1440px] mx-auto">
      <h2 className="text-center text-white font-bold text-2xl font-Montserrat">
        Memo Mind
      </h2>
      {loading ? (
        <div className="max-w-[50px]">
          <Spinner />
        </div>
      ) : !user ? (
        <ul className="flex text-white">
          <li
            onClick={handleSignIn}
            className="p-2 cursor-pointer text-xl text-white"
          >
            Sign in
          </li>
        </ul>
      ) : (
        <div className="text-white flex gap-5 items-center">
          <div className="flex items-center gap-3">
            {user && user?.photoURL && (
              <div className="rounded-full">
                {
                  <Image
                    src={user && user?.photoURL}
                    height={50}
                    width={50}
                    alt="user image"
                    className="aspect-square rounded-full"
                  />
                }
              </div>
            )}
            <div>
              <p className="font-Poppins text-xl">{user.displayName}</p>
              <p
                className="cursor-pointer text-lg text-brand-primary"
                onClick={handleSignOut}
              >
                Sign out
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
