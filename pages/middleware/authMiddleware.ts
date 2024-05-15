import { parseCookies, destroyCookie } from 'nookies';
import { redirect } from 'next/navigation'

const checkAuth = (context :any) => {
  const cookies = parseCookies(context);

  // Periksa apakah ada token JWT dalam cookies
  const jwt = cookies.jwt;

  if (!jwt) {

    if (context.res) {
      context.res.writeHead(302, { Location: '/login' });
      context.res.end();
    } else {
      redirect('/login')
    }
  }

  return {};
};

export default checkAuth;
