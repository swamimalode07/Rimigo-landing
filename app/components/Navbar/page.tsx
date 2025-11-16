"use client";
import {
    Navbar as UINavbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    NavbarLogo,
    NavbarButton,
} from "@/components/ui/resizable-navbar";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "About", link: "#" },
        { name: "Destinations", link: "#" },
        { name: "Testimonials", link: "#" },
    ];

    return (
    <UINavbar>
        <NavBody>
        <NavbarLogo />

        <NavItems
            items={navItems}
            onItemClick={() => setIsOpen(false)}
        />

        <NavbarButton
            href="/start"
            variant="primary"
            className="
            flex items-center gap-5
            bg-[#7011F6] text-white 
            px-6 py-2.5
            rounded-full
            font-medium text-md
            transition-all duration-300
            hover:bg-[#7011F6]/90"
        >
            Login
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </NavbarButton>

    </NavBody>

        <MobileNav>
        <MobileNavHeader>
            <NavbarLogo />

            <MobileNavToggle
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {navItems.map((item, idx) => (
            <a
                key={idx}
                href={item.link}
                className="w-full text-lg text-black dark:text-white px-2 py-2"
                onClick={() => setIsOpen(false)}
            >
                {item.name}
            </a>
        ))}

        <NavbarButton
            href="/start"
            variant="primary"
            className="
                flex items-center justify-center gap-5
                bg-[#7011F6] text-white 
                w-full mt-2
                rounded-full
                font-medium text-md
                transition-all duration-300
                hover:bg-[#7011F6]/90
            "
            >
            Login
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </NavbarButton>

        </MobileNavMenu>
        </MobileNav>
    </UINavbar>
    );
};

export default AppNavbar;
