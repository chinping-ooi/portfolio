"use client"

import { useEffect, useRef, useState } from "react";
import { Home, FileText, Briefcase, Mail, X, TextAlignJustify } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const menuItems = [
        { name: "Home", path: "/", icon: Home },
        { name: "About", path: "/about", icon: FileText },
        { name: "Project", path: "/project", icon: Briefcase },
        { name: "Contact", path: "/contact", icon: Mail },
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target;
            if (menuRef.current && target instanceof Node && !menuRef.current.contains(target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <div className="fixed top-5 right-5 z-[1000]" ref={menuRef}>
                <button onClick={() => setIsOpen(!isOpen)} className={`absolute top-0 right-0 text-white p-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-50 ${isOpen ? "rounded border-transparent bg-transparent" : "rounded-lg border border-white/10 bg-[var(--gray)] hover:bg-neutral-800"}`}>
                    <div className={`transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "rotate-180" : "rotate-0"}`}>
                        {isOpen ? <X size={24} /> : <TextAlignJustify size={24} />}
                    </div>
                </button>

                <div className={`w-48 bg-[var(--gray)] text-white px-6 py-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] origin-top-right shadow-2xl rounded ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"}`}>
                    <ul className="space-y-5">
                        {menuItems.map((item, index) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.path;

                            return (
                                <li key={index} onClick={() => {
                                    setIsOpen(false);
                                }}
                                    className={`flex items-center gap-4 cursor-pointer text-base font-semibold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"} ${isActive ? "text-orange-500" : "text-gray-300 hover:text-orange-500"}`}
                                    style={{ transitionDelay: `${isOpen ? index * 100 + 100 : 0}ms` }}
                                >
                                    <Link href={item.path} className="flex items-center gap-4 w-full">
                                        <Icon size={22} className={`transition-transform duration-500 ${isActive ? 'scale-110' : ''}`} />
                                        <span className="uppercase tracking-wide">{item.name}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}