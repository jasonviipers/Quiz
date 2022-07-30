import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { withTranslation } from 'react-i18next';

const Footer = () => {
	return (
		<footer aria-labelledby="footer-heading">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<div className="space-y-4 xl:col-span-1">
						<Link href="/">
							<a
								className="router-link-active router-link-exact-active cursor-pointer"
								aria-current="page"
							>
								<Image
									width="30"
									height="30"
									alt="Home Services"
									src="/assets/logo/fire.png"
									className="w-auto h-12"
								/>
							</a>
						</Link>
						<p className="text-base text-gray-200">
							{
								'Firer Quiz made with key principles of a beautiful, effective, simple to use and better code quality with use of functional based component.'
							}
						</p>
					</div>
					<div className="grid grid-cols-3 gap-8 mt-12 xl:mt-0 xl:col-span-2">
						<div>
							<h3 className="text-sm font-semibold tracking-wider text-gray-200 uppercase">
								{'Featured Categories'}
							</h3>
							<ul className="mt-4 space-y-4">
								<li>
									<Link href="/">
										<a className="text-base text-gray-300 hover:text-red-400">
											{''}
										</a>
									</Link>
								</li>
								<li>
									<Link href="/">
										<a className="text-base text-gray-300 hover:text-red-400">
											{''}
										</a>
									</Link>
								</li>
								<li>
									<Link href="/">
										<a className="text-base text-gray-300 hover:text-red-400">
											{''}
										</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className="mt-12 md:mt-0">
							<h3 className="text-sm font-semibold tracking-wider text-gray-200 uppercase">
								{'Help & Support'}
							</h3>
							<ul className="mt-4 space-y-4">
								<li>
									<Link href="/">
										<a className="text-base text-gray-300 hover:text-red-400">
											{'Service'}
										</a>
									</Link>
								</li>
								<li>
									<Link href="/">
										<a className="text-base text-gray-300 hover:text-red-400">
											{'	Service'}
										</a>
									</Link>
								</li>
								<li>
									<Link href="/">
										<a className="text-base text-gray-300 hover:text-red-400">
											{'Service'}
										</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className="mt-12 md:mt-0">
							<h3 className="text-sm font-semibold tracking-wider text-gray-200 uppercase">
								{'Useful links'}
							</h3>
							<ul className="mt-4 space-y-4">
								<li>
									<Link href="/">
										<a className="text-base text-gray-300 hover:text-red-400">
											{'	Privacy Policy'}
										</a>
									</Link>
								</li>
								<li>
									<Link href="/">
										<a className="text-base text-gray-300 hover:text-red-400">
											{'	Terms & Conditions'}
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="pt-8 mt-12 border-t border-gray-200">
					<p className="text-base text-gray-400 xl:text-center">
						{`${'©'} ${new Date().getFullYear()} Fire Quiz. All rights reserved.`}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default withTranslation()(Footer);
