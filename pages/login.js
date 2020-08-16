export default function Login() {
  return (
    <div>
      Login
    </div>
  );
}

Login.getInitialProps = ({ res }) => {
  if (res) {
    res.writeHead(301, {
      Location: process.env.CMS_URL,
    });
    res.end();
  }

  return {};
};
