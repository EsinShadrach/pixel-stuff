"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import textBox from "~/public/text-box.png";
import mouse from "~/public/cursor.png";

export function CursorThing() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [showMouse, setShowMouse] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const cursor = cursorRef.current;

      if (cursor) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    function handleMouseDown() {
      setShowMouse(true);

      const timeout = setTimeout(() => {
        setShowMouse(false);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }

    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <div
      className="z-50"
      ref={cursorRef}
      style={{ position: "fixed", pointerEvents: "none", zIndex: 100 }}
    >
      <div
        className={`${
          showMouse ? "opacity-100" : "opacity-0"
        } relative w-fit animate-fadin`}
      >
        <div
          className={`${
            showMouse ? "opacity-100" : "opacity-0"
          } absolute inset-x-0 text-center text-white top-2`}
        >
          {showMouse ? "Squeek" : ""}
        </div>
        {showMouse && (
          <Image
            priority
            alt="TextBox"
            src={textBox}
            width={80}
            height={40}
            draggable={false}
          />
        )}
      </div>
      <Image
        priority
        alt="Mouse"
        src={mouse}
        width={40}
        height={40}
        draggable={false}
      />
    </div>
  );
}
