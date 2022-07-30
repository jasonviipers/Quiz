import react, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { withTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = ({}) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		// Start navbar here
		<nav className="site-main-menu  sticky top-0 z-40 bg-slate-900">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					{/* Icon humbugger mobile button */}
					<div className="flex items-center mr-6 -ml-2 md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							type="button"
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-200 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-200 transition duration-150 ease-in-out"
						>
							{isOpen ? (
								<svg
									className="block h-6 w-6 navbar-menu"
									stroke="currentColor"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									className="block h-6 w-6 navbar-menu"
									stroke="currentColor"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</button>
					</div>
					{/* End icon humbugger mobile button */}
					{/* Start logo */}
					<div className="flex items-center -ml-2 md:ml-0">
						<Link href="/">
							<a className="router-link-active router-link-exact-active flex flex-shrink-0 items-center cursor-pointer">
								<Image
									className="block w-auto h-8 lg:hidden"
									alt="logo"
									src="/assets/logo/fire.png"
									width="35%"
									height="35%"
								/>
							</a>
						</Link>
						<span className="text-white text-sm hidden md:block">
							{('Fire')}
						</span>
					</div>
					{/* End logo */}
					{/* Start menu */}
					<div className="hidden md:ml-6 md:flex md:space-x-6 rtl:space-x-reverse">
						<Link href="/">
							<a
								className="router-link-active router-link-exact-active border-main-color text-red-400 inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2"
								aria-current="page"
							>
								{('Home')}
							</a>
						</Link>
						<Link href="/Quizplay">
							<a className="border-transparent text-gray-200 hover:border-gray-300 hover:text-red-500 inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2">
								{('Quiz Play')}
							</a>
						</Link>
						<Link href="/Bookmark">
							<a className="border-transparent text-gray-200 hover:border-gray-300 hover:text-red-500 inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2">
								{('Bookmark')}
							</a>
						</Link>
						<Link href="/Invite_friends">
							<a className="border-transparent text-gray-200 hover:border-gray-300 hover:text-red-500 inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2">
								{('Invite Friends')}
							</a>
						</Link>
						<Link href="/Instruction">
							<a className="border-transparent text-gray-200 hover:border-gray-300 hover:text-red-500 inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2">
								{('Instruction')}
							</a>
						</Link>
						<Link href="/Leaderboard">
							<a className="border-transparent text-gray-200 hover:border-gray-300 hover:text-red-500 inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2">
								{('Leaderboard')}
							</a>
						</Link>
					</div>
					{/* start secondary nav */}
					<div className="flex gap-5 items-center">
						<div className="hidden md:flex-shrink-0 md:flex md:items-center">
							<div className="relative">
								<div className="">
									<button
										type="button"
										aria-expanded="true"
										aria-haspopup="true"
										className="text-sm text-white focus:outline-none text-second-color-500 hover:text-second-color-900"
									>
										<span>{'English'}</span>
									</button>
								</div>
							</div>
						</div>
						<Link href="/">
							<a
								type="button"
								className="hidden text-sm text-white md:inline-flex focus:outline-none text-second-color-500 hover:text-second-color-900"
							>
								{('Sign In')}
							</a>
						</Link>
						<Link href="/">
							<a
								type="button"
								className="hidden px-4 py-2 text-sm text-white rounded-md border border-transparent shadow-sm md:inline-flex bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-color-500"
							>
								{('Sign Up')}
							</a>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default withTranslation()(Navbar);

