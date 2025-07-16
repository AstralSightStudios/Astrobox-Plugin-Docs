import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    location.href = `${location.href}docs/intro`;
  }, []);
  return (
    <div></div>
  );
}
