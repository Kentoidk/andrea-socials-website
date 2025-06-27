import React, { useState } from 'react';

// Mock Lucide Icons (as they aren't directly available in this specific runtime)
// In a real React app, you'd install lucide-react and import them.
const TwitchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitch"><path d="M21 17V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 1-2 2v2h3v-2h2v-2h10z"/><path d="M16 11V7m-4 4V7"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const DiscordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-discord"><path d="M.05 16.5c-.13 1.09.28 2.08 1.05 2.85.91.91 2.27 1.62 3.69 1.77 1.25.13 2.51.27 3.77.29 2.07.02 4.14-.04 6.21-.01 1.69.02 3.39.01 5.08-.01.99-.01 1.98-.17 2.9-.53.76-.32 1.35-.91 1.69-1.67.54-1.28.67-2.67.68-4.06.01-1.39-.08-2.79-.19-4.18-.08-1.09-.43-2.11-.99-3.04-.6-1.02-1.35-1.92-2.22-2.7-.42-.38-.85-.75-1.32-1.07-.63-.42-1.3-.77-2.03-1.07-.98-.38-2.01-.6-3.09-.7-.9-.08-1.8-.08-2.7-.09-1.34-.01-2.68-.02-4.02.04-1.29.06-2.58.12-3.87.27-1.12.13-2.24.28-3.35.46-1.57.26-3.09.84-4.54 1.73-.78.47-1.46 1.06-2.05 1.74-.63.74-1.13 1.57-1.48 2.47-.39 1.01-.58 2.05-.62 3.12-.03.88-.04 1.76-.05 2.64v.05zM7.34 7.66c.64-.17 1.34-.23 2.03-.2.94.04 1.87.24 2.76.58.74.28 1.48.62 2.16 1.05 1.24.78 2.37 1.7 3.32 2.7.27.28.53.58.76.89.04.06.07.13.11.19.04.05.08.1.1.15.2.35.34.7.43 1.09.09.4.08.81-.03 1.2-.08.26-.2.5-.37.72-.18.23-.39.43-.63.63-.3.26-.6.5-1 .7-.41.2-.84.38-1.28.52-1.3.41-2.62.61-3.95.59-1.68-.02-3.35-.2-4.9-.53-1.4-.3-2.7-.72-3.92-1.3-.84-.42-1.6-.92-2.29-1.5-.66-.56-1.22-1.2-1.69-1.91-.42-.64-.73-1.32-.93-2.04-.15-.54-.23-1.09-.24-1.66 0-.67.1-1.33.2-1.99.07-.4.18-.8.32-1.18.24-.62.56-1.2.98-1.74.45-.59.98-1.11 1.58-1.58.62-.48 1.3-.89 2.02-1.21.36-.16.73-.3 1.1-.42.6-.19 1.22-.32 1.85-.4zM9.59 13.98c.55 0 1-.44 1-1s-.45-1-1-1-1 .44-1 1 .45 1 1 1zm4.82 0c.55 0 1-.44 1-1s-.45-1-1-1-1 .44-1 1 .45 1 1 1z"/></svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tiktok">
    <path d="M9 3H7v11c0 2.8 2.2 5 5 5h4v-2h-4c-1.7 0-3-1.3-3-3V3z"/>
    <path d="M16 3h2v11c0 2.8-2.2 5-5 5h-4v-2h4c1.7 0 3-1.3 3-3V3z"/>
  </svg>
);


// Modal Component
const SocialModal = ({ isOpen, onClose, social }) => {
  const handleRedirect = () => {
    window.open(social.url, '_blank');
    onClose(); // Close modal after redirecting
  };

  return (
    <div
      className={`
        fixed inset-0 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-out
        ${isOpen ? 'opacity-100 backdrop-blur-xl' : 'opacity-0 pointer-events-none'}
      `}
    >
      <div
        className={`
          relative bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-3xl shadow-xl p-6 sm:p-8 w-full max-w-lg text-center overflow-hidden border border-purple-400
          transition-all duration-300 ease-out
          ${isOpen ? 'scale-100' : 'scale-90'}
        `}
      >
        {/* Subtle stars for the modal background */}
        <div className="absolute inset-0 opacity-70 z-0">
          {/* Layer 1: Smallest, most numerous stars for modal */}
          <div className="absolute inset-0 star-layer-1-modal"></div>
          {/* Layer 2: Medium stars for modal */}
          <div className="absolute inset-0 star-layer-2-modal"></div>
          {/* Layer 3: Larger, fewer stars for modal */}
          <div className="absolute inset-0 star-layer-3-modal"></div>
        </div>

        <h3 className="relative z-10 text-2xl font-bold text-pink-200 mb-4">
          Go to {social.name}
        </h3>
        <p className="relative z-10 text-gray-100 mb-6">
          You're about to leave this page and visit Andrea's {social.name} profile.
        </p>
        <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleRedirect}
            className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-md transform hover:scale-105"
          >
            Visit {social.name}
          </button>
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 shadow-md transform hover:scale-105"
          >
            Stay Here
          </button>
        </div>
      </div>
    </div>
  );
};


function App() {
  // State for modal visibility and selected social data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSocial, setSelectedSocial] = useState(null);

  // Function to open modal
  const openModal = (social) => {
    setSelectedSocial(social);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSocial(null); // Clear selected social after closing
  };

  // Friend's data (you can easily update this!)
  const friendData = {
    name: "Andrea Pereira",
    tagline: "Unleashing chaotic good vibes, one stream at a time!",
    profilePic: "https://i.postimg.cc/T102BQnq/Andrea-wb-img.jpg", // Updated profile picture URL with PostImages link
    about: `Andrea is a passionate and dedicated streamer who truly loves connecting with her vibrant community. Her streams are a mix of thrilling RPG adventures, cozy indie game explorations, and intense sessions of competitive titles. She dives deep into the strategic gameplay of Valorant and navigates the chilling co-op survival horror of R.E.P.O. Her primary goal is to foster a welcoming, fun, and inclusive space where gamers can unwind, share laughs, and bond over their shared passion for gaming. When she's not live, you can often find Andrea exploring new virtual worlds, honing her speedrunning techniques, or perhaps planning her next delicious snack break!`,
    socials: [
      {
        name: "Twitch",
        url: "https://www.twitch.tv/aandreapereira",
        icon: <TwitchIcon />,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/and.reatwitch/",
        icon: <InstagramIcon />,
      },
      {
        name: "TikTok",
        url: "https://www.tiktok.com/@aaandreapereiraa",
        icon: <TikTokIcon />,
      },
      {
        name: "Discord",
        url: "https://discord.gg/khQgdbT8WZ",
        icon: <DiscordIcon />,
      },
      // Add more socials if needed, e.g., YouTube, Twitter
      // {
      //   name: "YouTube",
      //   url: "https://www.youtube.com/yourfriendsyoutube",
      //   icon: <YoutubeIcon />,
      // },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-indigo-900 text-white font-inter flex flex-col items-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Stars Background */}
      <div id="stars-container" className="absolute inset-0 z-0"></div>

      {/* Main content container */}
      <div className={`
        w-full max-w-4xl bg-gray-900 bg-opacity-70 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 my-8 relative z-10 fading-border
        transition-all duration-300 ease-out
        ${isModalOpen ? 'opacity-50 blur-md pointer-events-none' : 'opacity-100 blur-0 pointer-events-auto'}
      `}>
        {/* Profile Header Section */}
        <header className="flex flex-col items-center text-center mb-8">
          <img
            src={friendData.profilePic}
            alt={`${friendData.name}'s Profile`}
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-indigo-500 shadow-lg mb-4 transform hover:scale-105 transition-transform duration-300"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/6a0dad/ffffff?text=Image+Error"; }} // Fallback for image loading
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-200 tracking-tight mb-2">
            {friendData.name}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 italic max-w-lg">
            "{friendData.tagline}"
          </p>
        </header>

        {/* About Section */}
        <section className="mb-10 text-center bg-gray-800 bg-opacity-60 rounded-xl p-6 sm:p-8 border border-indigo-500 shadow-lg fading-border">
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-300 mb-4 border-b-2 border-indigo-500 pb-2 inline-block px-4">
            About My Streaming Journey
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-gray-200 mt-4">
            {friendData.about}
          </p>
        </section>

        {/* Social Links Section */}
        <section className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-300 mb-6 border-b-2 border-indigo-500 pb-2 inline-block">
            Connect With Me!
          </h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {friendData.socials.map((social) => (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                key={social.name}
                href="#" // Use '#' to prevent default navigation and trigger modal
                onClick={(e) => {
                  e.preventDefault(); // Prevent page reload
                  openModal(social);
                }}
                className="inline-flex items-center justify-center p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
                aria-label={`Go to ${social.name}`}
              >
                {social.icon}
                <span className="sr-only">{social.name}</span> {/* For accessibility */}
              </a>
            ))}
          </div>
        </section>

        {/* Optional: Footer or small note */}
        <footer className="mt-12 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} {friendData.name}. All rights reserved.</p>
        </footer>
      </div>

      {/* Social Media Redirection Modal */}
      <SocialModal
        isOpen={isModalOpen}
        onClose={closeModal}
        social={selectedSocial || { name: "", url: "" }}
      />

      {/* Tailwind CSS Script - Always include this for Tailwind to work */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Google Fonts - Inter */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      <style>
        {`
          /* Custom font import for "Inter" */
          body {
            font-family: 'Inter', sans-serif;
          }

          /* Starfield generation and animation for main background */
          .min-h-screen {
            position: relative;
          }

          #stars-container {
            width: 100%;
            height: 100%;
            pointer-events: none;
          }

          #stars-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 1px;
            height: 1px;
            background: transparent;
            box-shadow:
              ${Array.from({ length: 700 }).map(() => `${Math.random() * 200}vw ${Math.random() * 200}vh #fff`).join(',')},
              ${Array.from({ length: 200 }).map(() => `${Math.random() * 200}vw ${Math.random() * 200}vh #fff`).join(',')},
              ${Array.from({ length: 50 }).map(() => `${Math.random() * 200}vw ${Math.random() * 200}vh #fff`).join(',')};
            animation: stars-twinkle 150s linear infinite;
            opacity: 0.8;
          }

          @keyframes stars-twinkle {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(-100vh);
            }
          }

          /* Fading border effect */
          @keyframes fading-border-pulse {
            0% {
              border-color: rgba(139, 92, 246, 0.3);
            }
            50% {
              border-color: rgba(139, 92, 246, 0.8);
            }
            100% {
              border-color: rgba(139, 92, 246, 0.3);
            }
          }
          .fading-border {
            border: 2px solid;
            animation: fading-border-pulse 4s infinite ease-in-out;
          }

          /* Starry background for modal content */
          .star-layer-1-modal::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 1px;
            height: 1px;
            background: transparent;
            box-shadow: ${Array.from({ length: 400 }).map(() => `${Math.random() * 100}% ${Math.random() * 100}% rgba(255, 255, 255, 0.6)`).join(',')};
          }
          .star-layer-2-modal::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 1px;
            height: 1px;
            background: transparent;
            box-shadow: ${Array.from({ length: 150 }).map(() => `${Math.random() * 100}% ${Math.random() * 100}% rgba(255, 255, 255, 0.8)`).join(',')};
          }
          .star-layer-3-modal::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 1px;
            height: 1px;
            background: transparent;
            box-shadow: ${Array.from({ length: 30 }).map(() => `${Math.random() * 100}% ${Math.random() * 100}% rgba(255, 255, 255, 0.9)`).join(',')};
          }
        `}
      </style>
    </div>
  );
}

export default App;
