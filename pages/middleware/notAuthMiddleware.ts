import { parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';


const notAuthMiddleware = (context :any) => {
  const cookies = parseCookies(context);

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
