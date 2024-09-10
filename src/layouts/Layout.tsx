import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useAppStore } from "../stores/useAppStore";

export default function Layout() {

    const { loadFormStorage } = useAppStore()

    useEffect(() => {
      loadFormStorage()
    }, [])
  return (
    <>
      <Header />
      <main className="container mx-auto py-16">
        <Outlet />
      </main>
      <Modal/>
    </>
  );
}
