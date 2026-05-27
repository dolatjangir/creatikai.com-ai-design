"use client";

import { useEffect, useRef } from "react";

interface BubbleConfig {
  size: number;
  opacity: number;
  color: string;
  count: number;
}

export default function BubbleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const bubbleConfigs: BubbleConfig[] = [
      { size: 6,   opacity: 0.20, color: "167,139,250", count: 10 },
      { size: 12,  opacity: 0.15, color: "96,165,250",  count: 7  },
      { size: 20,  opacity: 0.12, color: "52,211,153",  count: 5  },
      { size: 35,  opacity: 0.09, color: "167,139,250", count: 4  },
      { size: 55,  opacity: 0.07, color: "96,165,250",  count: 3  },
      { size: 80,  opacity: 0.05, color: "167,139,250", count: 2  },
      { size: 110, opacity: 0.03, color: "52,211,153",  count: 2  },
    ];

    const rand = (min: number, max: number): number =>
      Math.random() * (max - min) + min;

    if (!document.getElementById("bubble-keyframes")) {
      const style = document.createElement("style");
      style.id = "bubble-keyframes";
      style.textContent = `
        @keyframes bubbleFloat {
          0%   { opacity: 0;   transform: translateY(0);    }
          10%  { opacity: 1;                                }
          90%  { opacity: 1;                                }
          100% { opacity: 0;   transform: translateY(-100vh); }
        }
        @keyframes bubbleSway {
          0%   { margin-left: 0px;   }
          20%  { margin-left: 15px;  }
          40%  { margin-left: -10px; }
          60%  { margin-left: 18px;  }
          80%  { margin-left: -6px;  }
          100% { margin-left: 0px;   }
        }
      `;
      document.head.appendChild(style);
    }

    const makeBubble = (cfg: BubbleConfig, temporary = false): void => {
      const el = document.createElement("div");
      const size    = rand(cfg.size * 0.7, cfg.size * 1.4);
      const alpha   = rand(cfg.opacity * 0.6, cfg.opacity * 1.5);
      const duration     = rand(12, 30);
      const swayDuration = rand(4, 8);
      const delay   = temporary ? 0 : rand(0, -duration);

      el.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${rand(2, 96)}%;
        bottom: -${size}px;
        background: radial-gradient(
          circle at 32% 28%,
          rgba(255,255,255,${Math.min(alpha * 2.5, 0.95).toFixed(2)}) 0%,
          rgba(255,255,255,${(alpha * 0.5).toFixed(2)}) 18%,
          rgba(${cfg.color},${alpha.toFixed(2)}) 55%,
          rgba(${cfg.color},${(alpha * 0.3).toFixed(2)}) 80%,
          transparent 100%
        );
        border: 1px solid rgba(255,255,255,${(alpha * 0.65).toFixed(2)});
        box-shadow:
          inset 2px 3px ${(size * 0.3).toFixed(1)}px rgba(255,255,255,${(alpha * 0.55).toFixed(2)}),
          inset -1px -2px ${(size * 0.15).toFixed(1)}px rgba(${cfg.color},${(alpha * 0.25).toFixed(2)}),
          0 0 ${(size * 0.7).toFixed(1)}px rgba(${cfg.color},${(alpha * 0.55).toFixed(2)}),
          0 0 ${(size * 1.4).toFixed(1)}px rgba(${cfg.color},${(alpha * 0.15).toFixed(2)});
        animation:
          bubbleFloat ${duration}s ${delay}s linear ${temporary ? "1" : "infinite"},
          bubbleSway  ${swayDuration}s ${delay}s ease-in-out ${temporary ? "1" : "infinite"};
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        will-change: transform, opacity;
      `;

      if (!temporary) {
        el.addEventListener("animationiteration", () => {
          el.style.left = rand(2, 96) + "%";
          el.style.animationDuration = `${rand(12, 30)}s, ${rand(4, 8)}s`;
        });
      } else {
        el.addEventListener("animationend", () => el.remove());
      }

      container.appendChild(el);
    };

    bubbleConfigs.forEach((cfg) => {
      for (let i = 0; i < cfg.count; i++) makeBubble(cfg);
    });

    const interval = setInterval(() => {
      const cfg = bubbleConfigs[Math.floor(Math.random() * 4)];
      makeBubble(cfg, true);
    }, 1000);

    return () => {
      clearInterval(interval);
      document.getElementById("bubble-keyframes")?.remove();
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    />
  );
}