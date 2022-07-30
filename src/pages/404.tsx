import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Page404 = () => {
	return (
		<div className="min-h-screen grid place-items-center p-4 sm:p-8">
			<div className="text-center">
				<p className=" text-body-dark text-sm 2xl: uppercase tracking-widest mb-4 sm:mb-5">
					{('404-heading')}
				</p>
				<h1 className="font-bold text-2xl leading-normal sm:text-3xl text-bolder mb-5">
					{('404-sub-heading')}
				</h1>
				<div className="mb-11">
					<Image
						src="/no-result.svg"
						alt={'404-heading'}
						width={600}
						height={453}
					/>
				</div>
				<Link
					href="/"
					className="inline-flex items-center  sm:text-base text-bolder underline focus:outline-none hover:no-underline hover:text-body-dark"
				>
					{'404-back-home'}
				</Link>
			</div>
		</div>
	);
};

export default Page404;
export const getStaticProps = async ({ locale }: any) => {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };