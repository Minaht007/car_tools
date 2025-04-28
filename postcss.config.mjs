const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
            extend: {
               backgroundColor: {
                mainBG: "#B67216", 
              },
              textColor: {
               mainColor: "#B67216", 
              }
           },
           },
    },
  },
};
export default config;




















// const config = {
//   plugins: ["@tailwindcss/postcss"],
//   extends: {
//     fontFamily: {
//       default: ["Inter"],
//     },
//     backgroundColor: {
//       mainBG: " #FFF5DD"
//     }
//   }
// };

// export default config;


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       backgroundColor: {
//         mainBG: "#B67216", 
//       },
//       textColor: {
//         mainColor: "#B67216", 
//       }
//     },
//   },
//   plugins: [
//     require('@tailwindcss/forms'), 
//   ],
// }