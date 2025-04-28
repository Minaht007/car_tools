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

/** @type {import('tailwindcss').Config} */
export default {
  plugins: {
    '@tailwindcss/postcss': {
      extends: {      
          backgroundColor: {
              mainBG: " #B67216"
            }
           }
        }
    },  
}