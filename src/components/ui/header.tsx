import { SignedIn, UserButton, useUser, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import { ClerkLoaded } from "@clerk/nextjs";

function Header() {
  const { user } = useUser();

  const createClerkPassKey = () => {
    console.log("Creating passkey...");
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-6 py-6 bg-gradient-to-r from-blue-500 to-teal-500 shadow-xl rounded-lg">
      {/* Logo */}
      <div className="mb-4 md:mb-0">
        <Link href="/" className="text-3xl font-extrabold text-white hover:text-teal-100 transition-colors duration-300">
          StyleHaven
        </Link>
      </div>

      {/* Search Bar */}
      <form
        action="/search"
        method="GET"
        className="flex items-center w-full md:w-auto mb-4 md:mb-0"
      >
        <input
          type="text"
          name="query"
          placeholder="Search for clothing, styles..."
          className="flex-grow md:flex-grow-0 w-full md:w-72 px-4 py-2 border border-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all duration-300"
        />
        <button
          type="submit"
          className="bg-teal-600 text-white px-4 py-2 rounded-r-md hover:bg-teal-700 transition-colors duration-300"
        >
          Search
        </button>
      </form>

      {/* Cart Button */}
      <div className="mb-4 md:mb-0">
        <Link
          href="/cart"
          className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
        >
          <TrolleyIcon className="w-6 h-6" />
          <span>Cart</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6 mb-4 md:mb-0">
        <Link href="/about" className="text-lg text-white hover:text-teal-100 transition-colors duration-300">
          About
        </Link>
        <Link href="/deals" className="text-lg text-white hover:text-teal-100 transition-colors duration-300">
          Deals
        </Link>
        <Link href="/contact" className="text-lg text-white hover:text-teal-100 transition-colors duration-300">
          Contact
        </Link>
      </nav>

      {/* User Section */}
      <div className="flex items-center space-x-4">
        <ClerkLoaded>
          <SignedIn>
            <Link
              href="/orders"
              className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
            >
              <PackageIcon className="w-6 h-6" />
              <span>My Orders</span>
            </Link>
          </SignedIn>

          {user ? (
            <div className="flex items-center space-x-2">
              <UserButton />
              <div className="hidden sm:block text-xs">
                <p className="text-gray-400">Welcome Back</p>
                <p className="font-bold">{user.fullName}!</p>
              </div>
            </div>
          ) : (
            <div className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all ease-in-out duration-200">
              <SignInButton mode="modal" />
            </div>
          )}

          {user?.passkeys.length === 0 && (
            <button
              onClick={createClerkPassKey}
              className="bg-white hover:bg-blue-700 hover:text-white animate-pulse text-blue-500 font-bold py-2 px-4 rounded border-blue-300 border"
            >
              Create a passkey
            </button>
          )}
        </ClerkLoaded>

        {user && (
          <Link
            href="/sign-out"
            className="text-white bg-teal-600 px-4 py-2 rounded-md hover:bg-teal-700 transition-colors duration-300"
          >
            Sign Out
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
