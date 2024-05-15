import { parseCookies, destroyCookie } from 'nookies';
import { useRouter } from 'next/router';


const notAuthMiddleware = (context :any) => {
  const cookies = parseCookies(context);
  const router = useRouter();
  // Periksa apakah ada token JWT dalam cookies
  const jwt = cookies.jwt;

  if (jwt) {

    if (context.res) {
      context.res.writeHead(302, { Location: '/' });
      context.res.end();
    } else {
      router.replace('/');
    }
  }

  return {};
};

export default notAuthMiddleware;
