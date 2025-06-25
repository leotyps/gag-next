// pages/index.tsx or app/page.tsx (depending on your Next.js version)

import { Link } from "@heroui/link";
// Removed Snippet and Code as they are not needed for this landing page layout
// import { Snippet } from "@heroui/snippet";
// import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

// Commented out or removed as they are no longer directly used in this page.
// import { siteConfig } from "@/config/site";
// import { title, subtitle } from "@/components/primitives"; // You might not need these specific styles anymore

// If you have custom icons like GithubIcon, you might need a PlayIcon
// For now, we'll just use text for the Play button.
// import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 font-sans text-gray-800">
      {/* Navbar - Simplified for this example, based on the image header */}
      <nav className="flex items-center justify-between p-4 px-6 md:px-10 lg:px-20 border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-2">
          {/* Replace with your logo if available */}
          <svg
            className="h-6 w-6 text-violet-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 8a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="font-semibold text-lg text-gray-700">SaasAble</span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "ghost",
            })}
            href="#" // Replace with actual Buy Now link
          >
            Buy Now
          </Link>
          <button className="md:hidden">
            {/* Hamburger menu icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white shadow-inner">
        <p className="mb-2 text-sm text-gray-500 md:text-base">
          Start your virtual{" "}
          <span className="font-bold text-violet-600">Garden Adventure</span>
        </p>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
          Grow A Garden Map Game on Roblox
        </h1>
        <p className="mb-8 max-w-3xl text-base text-gray-600 md:text-lg">
          Cultivate your dream garden, explore unique biomes, and socialize
          with friends in this immersive Roblox experience!
        </p>

        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
            size: "lg", // Larger button for the hero
            class: "px-10 py-3 text-lg font-semibold", // Custom padding and text size
          })}
          href="https://www.roblox.com/games/your-game-id" // Replace with your Roblox game URL
        >
          {/* You can add a Play icon here if you have one */}
          Play Now
        </Link>

        {/* Featurettes below Play Now button */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-gray-600 md:text-base">
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Plant & Harvest</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-purple-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Rare Plants</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Explore Biomes</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-orange-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 9a1 1 0 100-2 1 1 0 000 2zM11 9a1 1 0 100-2 1 1 0 000 2zM12 2H8a1 1 0 00-1 1v1H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-2V3a1 1 0 00-1-1zM4 14V6a1 1 0 011-1h10a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1z"></path>
            </svg>
            <span>Active Community</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Regular Updates</span>
          </div>
        </div>

        {/* Placeholder for the large image/video area below the hero, if applicable */}
        <div className="mt-12 flex h-64 w-full max-w-5xl items-center justify-center rounded-lg bg-gray-100 text-lg text-gray-400 shadow-lg md:h-96">
          {/* This could be an embedded Roblox experience or a promotional video thumbnail */}
          Your Immersive Garden Map Content Here (e.g., video or interactive demo)
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Your Ultimate Gardening Experience
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature Card 1: Diverse Biomes */}
          <div className="transform rounded-lg bg-gray-50 p-6 shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Diverse Biomes
            </h3>
            <p className="text-gray-600">
              Discover unique environments, each with its own special plants.
            </p>
          </div>

          {/* Feature Card 2: Farming Mechanics */}
          <div className="transform rounded-lg bg-gray-50 p-6 shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Farming Mechanics
            </h3>
            <p className="text-gray-600">
              Master advanced farming techniques for maximum yield, plants.
            </p>
          </div>

          {/* Feature Card 3: Customization Options */}
          <div className="transform rounded-lg bg-gray-50 p-6 shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Customization Options
            </h3>
            <p className="text-gray-600">
              Personalize your garden and avatar with endless choices.
            </p>
          </div>

          {/* Feature Card 4: Multiplayer Fun */}
          <div className="transform rounded-lg bg-gray-50 p-6 shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Multiplayer Fun
            </h3>
            <p className="text-gray-600">
              Play with friends, trade items, and visit their gardens.
            </p>
          </div>

          {/* Feature Card 5: Challenging Quests */}
          <div className="transform rounded-lg bg-gray-50 p-6 shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Challenging Quests
            </h3>
            <p className="text-gray-600">
              Embark on quests to unlock rare items and achievements.
            </p>
          </div>

          {/* Feature Card 6: Regular Updates */}
          <div className="transform rounded-lg bg-gray-50 p-6 shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Regular Updates
            </h3>
            <p className="text-gray-600">
              Enjoy fresh content, new plants, and exciting events.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action at the Bottom */}
      <section className="bg-gray-50 px-4 py-16 text-center sm:px-6 lg:px-8 md:py-24">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
          Ready to immerse yourself in the world of &quot;Grow A Garden Map Game&quot;?
        </h2>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            isExternal
            className={buttonStyles({
              variant: "bordered",
              radius: "full",
              size: "lg",
              class: "px-8 py-3 text-base font-semibold",
            })}
            href="#" // Replace with Watch Trailer link
          >
            Watch Trailer
          </Link>
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
              size: "lg",
              class: "px-8 py-3 text-base font-semibold",
            })}
            href="https://www.roblox.com/games/your-game-id" // Replace with your Roblox game URL
          >
            Play Now On Roblox
          </Link>
        </div>
      </section>
    </div>
  );
}
