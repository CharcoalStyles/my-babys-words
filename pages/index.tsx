import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { CogIcon } from "../components/icons/cog";
import { NewWordModal } from "../components/NewWordModal";
import { SettingsModal } from "../components/SettingsModal";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>My Baby's Words</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-2xl">My Baby's Words</a>
        </div>
        <div className="navbar-end">
          <NewWordModal />
          <SettingsModal />
        </div>
      </div>
    </div>
  );
};

export default Home;
