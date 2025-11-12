"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

type ThemeToggleProps = {
	onToggle: () => void;
	resolvedTheme: string | undefined;
};

const ThemeToggle = ({ resolvedTheme, onToggle }: ThemeToggleProps) => {
	const reduceMotion = useReducedMotion();

	return (
		<motion.button
			role="switch"
			type="button"
			onClick={onToggle}
			aria-checked={resolvedTheme === "dark"}
			aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
			className="relative inline-flex h-10 w-10 cursor-pointer items-center justify-center text-[#333333] dark:text-[#FFFFFF]"
		>
			<AnimatePresence mode="wait" initial={false}>
				<motion.span
					key={resolvedTheme}
					initial={{
						rotate: reduceMotion ? 0 : -90,
						opacity: 0,
						scale: reduceMotion ? 1 : 0.6,
					}}
					animate={{
						rotate: 0,
						opacity: 1,
						scale: 1,
					}}
					exit={{
						rotate: reduceMotion ? 0 : 90,
						opacity: 0,
						scale: reduceMotion ? 1 : 0.6,
					}}
					whileHover={{
						scale: 1.12,
						transition: { type: "spring", stiffness: 250, damping: 10 },
					}}
					className="flex items-center justify-center"
				>
					{resolvedTheme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
				</motion.span>
			</AnimatePresence>
		</motion.button>
	);
};

export default ThemeToggle;
