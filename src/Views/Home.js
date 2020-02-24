import React, { useGlobal } from "reactn";
import { useTitle } from "Utils";

export default function Home() {
  /**
   * set title
   */
  useTitle("Larry Buntus");

  /**
   * state
   */
  const [user] = useGlobal("user");

  return <p>Home {user?.name}</p>;
}
