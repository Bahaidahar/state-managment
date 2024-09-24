// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Rocket } from "lucide-react";

// export default function Component() {
//   const [isLaunched, setIsLaunched] = useState(false);

//   const handleLaunch = () => {
//     setIsLaunched(true);
//     setTimeout(() => setIsLaunched(false), 3000); // Reset after animation
//   };

//   return (
//     <div className="relative mx-auto h-80 w-full max-w-md">
//       <motion.button
//         className={`relative z-10 rounded-full bg-blue-500 px-6 py-3 text-lg font-bold text-white shadow-lg transition-colors ${
//           isLaunched ? "bg-red-500" : "hover:bg-blue-600"
//         }`}
//         onClick={handleLaunch}
//         disabled={isLaunched}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         aria-label="Launch Rocket"
//       >
//         {isLaunched ? "Launching!" : "Launch Rocket"}
//       </motion.button>
//       <motion.div
//         className="absolute bottom-0 left-1/2 -translate-x-1/2 transform"
//         initial={{ y: 0 }}
//         animate={isLaunched ? { y: -300, opacity: 0 } : { y: 0, opacity: 1 }}
//         transition={{ duration: 2, ease: "easeOut" }}
//       >
//         <Rocket className="h-12 w-12 text-gray-800" />
//       </motion.div>
//       {isLaunched && (
//         <motion.div
//           className="absolute bottom-0 left-1/2 -translate-x-1/2 transform"
//           initial={{ y: 0, opacity: 0 }}
//           animate={{ y: [-10, -20], opacity: [0, 1, 0] }}
//           transition={{ duration: 0.5, repeat: 4, repeatType: "reverse" }}
//         >
//           <div className="h-12 w-8 rounded-full bg-gradient-to-t from-orange-500 to-yellow-300" />
//         </motion.div>
//       )}
//     </div>
//   );
// }
