import { parseCookies, destroyCookie } from 'nookies';

import { useRouter } from 'next/navigation'

const notAuthMiddleware = (context :any) => {
  const cookies = parseCookies(context);
  const Router = useRouter()
  // Periksa apakah ada token JWT dalam cookies
  const jwt = cookies.jwt;

  if (jwt) {

    if (context.res) {
      context.res.writeHead(302, { Location: '/' });
      context.res.end();
    } else {
      Router.replace('/');
    }
  }

  return {};
};

export default notAuthMiddleware;
