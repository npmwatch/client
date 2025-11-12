"use client";

import { PoppinsRegular, PoppinsSemiBold } from "@/lib/fonts";
import { LOGO_SRC_URL, NAVBAR_LINKS } from "@/lib/constants";
import ThemeToggle from "@/components/ui/ToggleTheme";

import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";

// TODO: Add navbar menu for mobile device

const NavbarExport = () => {
	const [mounted, setMounted] = React.useState(false);
	const { setTheme, resolvedTheme } = useTheme();
	const pathname = usePathname();

	React.useEffect(() => setMounted(true), []);

	const toggleThemeSwitch = () => {
		setTheme(resolvedTheme === "dark" ? "light" : "dark");
	};

	return (
		<>
			<motion.nav
				role="navigation"
				aria-label="Primary Navigation"
				initial={{ opacity: 0, y: -18 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, ease: "easeOut" }}
				className="fixed top-0 right-0 left-0 z-60 py-6"
			>
				<div className="mx-auto w-full max-w-7xl px-4 2xl:px-0">
					<div className="flex items-center justify-between">
						<motion.div
							initial={{ opacity: 0, y: -8 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.1 }}
						>
							<Link href={"/"} className="group flex items-center gap-3">
								<Image
									src={LOGO_SRC_URL}
									title="NPM Watch Home"
									alt="NPM.watch"
									width={50}
									height={50}
									priority={true}
									draggable={false}
								/>

								<h1
									className={`${PoppinsSemiBold.className} text-xl leading-none tracking-wider text-[#F72836] dark:text-[#FFFFFF]`}
								>
									NPM.watch
								</h1>
							</Link>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: -8 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.18 }}
							className="hidden items-center gap-8 lg:flex"
						>
							<ul className="flex items-center gap-14">
								{NAVBAR_LINKS.map((link, i) => (
									<motion.li
										key={link?.label}
										initial={{ opacity: 0, y: -4 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.35, delay: 0.2 + i * 0.05 }}
									>
										<Link
											aria-current={pathname === link?.href ? "page" : undefined}
											href={link?.href}
											className={`${PoppinsRegular.className} group relative text-sm leading-normal tracking-wide text-[#333333] transition-colors duration-500 hover:text-[#F72836] dark:text-[#FFFFFF]`}
										>
											{link?.label}

											<span className="absolute -bottom-1 left-0 h-px w-0 bg-linear-to-r from-[#F72836] to-transparent transition-all duration-500 ease-out group-hover:w-full" />
										</Link>
									</motion.li>
								))}
							</ul>

							<motion.div
								initial={{ opacity: 0, y: -6 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.35, delay: 0.32 }}
								className="flex h-5 items-center border-l border-[#33333333] pl-6 dark:border-[#FFFFFF33]"
							>
								{mounted && <ThemeToggle resolvedTheme={resolvedTheme} onToggle={toggleThemeSwitch} />}
							</motion.div>
						</motion.div>
					</div>
				</div>
			</motion.nav>
		</>
	);
};

export default NavbarExport;
export { NAVBAR_LINKS };
