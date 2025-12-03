import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    // Check for touch device
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    };
    checkTouch();

    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Handle interactive elements
    const handleElementHover = () => setIsHovering(true);
    const handleElementLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, .cursor-pointer"
    );
    
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleElementHover);
      el.addEventListener("mouseleave", handleElementLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementHover);
        el.removeEventListener("mouseleave", handleElementLeave);
      });
    };
  }, [cursorX, cursorY, isTouchDevice]);

  // Re-attach listeners when DOM changes
  useEffect(() => {
    if (isTouchDevice) return;

    const observer = new MutationObserver(() => {
      const handleElementHover = () => setIsHovering(true);
      const handleElementLeave = () => setIsHovering(false);

      const interactiveElements = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, select, .cursor-pointer"
      );

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementHover);
        el.removeEventListener("mouseleave", handleElementLeave);
        el.addEventListener("mouseenter", handleElementHover);
        el.addEventListener("mouseleave", handleElementLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 2.5 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-3 h-3 rounded-full bg-foreground"
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isVisible ? 0.3 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-8 h-8 rounded-full border border-foreground"
        />
      </motion.div>
    </>
  );
};
