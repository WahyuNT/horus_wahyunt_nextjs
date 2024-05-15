import { parseCookies, destroyCookie } from 'nookies';
import { redirect } from 'next/navigation'


const notAuthMiddleware = (context :any) => {
  const cookies = parseCookies(context);

  // Periksa apakah ada token JWT dalam cookies
  const jwt = cookies.jwt;

  if (jwt) {

    if (context.res) {
      context.res.writeHead(302, { Location: '/' });
      context.res.end();
    } else {
      redirect('/')
    }
  }

  return {};
};

export default notAuthMiddleware;
