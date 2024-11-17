"use client";
import { fabric } from "fabric";
import { useEditor } from "@/features/editor/hooks/use-editor";
import { useEffect, useRef } from "react";
import { Navbar } from "./navbar";

export const Editor = () => {
  const { init } = useEditor();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });
    init({
      initialCanvas: canvas,
      initialContainer: containerRef.current!,
    });
  }, [init]);
  return (
    <div className="h-full flex flex-col">
      <Navbar />
      <div
        className="absolute w-full top-[68px] flex"
        style={{ height: "calc(100% - 68px)" }}
      >
        <div className="flex-1 h-full bg-gray-600" ref={containerRef}>
          <canvas ref={canvasRef} />
        </div>
      </div>
    </div>
  );
};
