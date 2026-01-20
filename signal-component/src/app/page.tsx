"use client";

import React, { useState } from "react";
import { Background } from "@/components/Background";
import { Simulator } from "@/components/Simulator";
import { ToggleSwitch } from "@/components/ToggleSwitch";

import { Header } from "@/components/Header";

export default function Home() {
  const [mode, setMode] = useState<"static" | "live">("static");

  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <Header />
      <Background />

      <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center gap-12">
        <div className="w-full flex justify-center">
          <Simulator mode={mode} />
        </div>

        <div className="w-full flex justify-center">
          <ToggleSwitch mode={mode} setMode={setMode} />
        </div>
      </div>
    </main>
  );
}
