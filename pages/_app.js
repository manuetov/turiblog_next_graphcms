import React from 'react';

import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;


// import React from 'react';
// import { Layout } from '../components'

// import 'tailwindcss/tailwind.css'
// import '../styles/globals.scss'

// function MyApp({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   )
// }

// export default MyApp