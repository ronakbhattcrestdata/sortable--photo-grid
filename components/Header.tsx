import { useRouter } from "next/router";

export default function Header() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/photoGrid">PhotoGrid</Link>
    </div>
  );
}

const Link = ({ children, href }) => {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? "red" : "black",
  };
  return (
    <a
      href="#"
      style={style}
      onClick={(e) => {
        e.preventDefault();
        // typically you want to use `next/link` for this usecase
        // but this example shows how you can also access the router
        // and use it manually
        router.push(href);
      }}
    >
      {children}
      <style jsx>{`
        a {
          margin-right: 10px;
        }
      `}</style>
    </a>
  );
};
