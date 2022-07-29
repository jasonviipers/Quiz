import react from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { withTranslation } from 'react-i18next';
import Link from 'next/link';

const Navbar = ({}) => {
	return (
		<nav className="site-main-menu">
			<ul>
				<li>
					<Link href="/">
						<span className="menu-tex"> {'Home'} </span>
					</Link>
				</li>
				<li>
					<Link href="/Quizplay">
						<span className="menu-tex"> {'Quiz Play'} </span>
					</Link>
				</li>
				<li>
					<Link href="/Bookmark">
						<span className="menu-tex"> {'Bookmark'} </span>
					</Link>
				</li>
				<li>
					<Link href="/Invite_friends">
						<span className="menu-tex"> {'Invite Friends'} </span>
					</Link>
				</li>
				<li>
					<Link href="/Instruction">
						<span className="menu-tex"> {'Instruction'} </span>
					</Link>
				</li>
				<li>
					<Link href="/Leaderboard">
						<span className="menu-tex"> {'Leaderboard'} </span>
					</Link>
				</li>
				<li className="has-children">
					<Link href="/">
						<span className="menu-tex"> {'More'} </span>
					</Link>
					<span className="menu-toggle">
						<i className="">
							<FaAngleDown />
						</i>
					</span>
					<ul className="sub-menu">
						<li>
							<Link href="/Contact-us">
								<span className="menu-tex">
									{' '}
									{'Contact Us'}{' '}
								</span>
							</Link>
						</li>
						<li>
							<Link href="/About-us">
								<span className="menu-tex"> {'About Us'} </span>
							</Link>
						</li>
						<li>
							<Link href="/Privacy-policy">
								<span className="menu-tex">
									{' '}
									{'Privacy Policy'}{' '}
								</span>
							</Link>
						</li>
						<li>
							<Link href="/Terms-and-conditions">
								<span className="menu-tex">
									{' '}
									{'Terms and Conditions'}{' '}
								</span>
							</Link>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
};
export default withTranslation()(Navbar);
