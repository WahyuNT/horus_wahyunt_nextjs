import { parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';

const checkAuth = (context :any) => {
  const cookies = parseCookies(context);


  const jwt = cookies.jwt;

  if (!jwt) {

    if (context.res) {
      context.res.writeHead(302, { Location: '/login' });
      context.res.end();
    } else {
      Router.replace('/login');
    }
  }

  return {};
};

export default checkAuth;
