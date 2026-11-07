import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-clip bg-white text-slate-900">
      <Navbar />

      <main className="w-full flex-1 pt-8 sm:pt-20 lg:pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
