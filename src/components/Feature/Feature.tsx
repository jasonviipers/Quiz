import Image from 'next/image';
import React from 'react';

const Feature = () => {
	return (
		<div className="py-10 bg-accent-color-50">
			<div className="flex justify-between items-center px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex-1 min-w-0">
					<h2 className="py-3 text-xl font-bold lg:text-4xl text-white">
						{'Featured Categories'}
					</h2>
					<p className="text-sm sm:text-base text-second-color-400 sm:truncate text-gray-300">
						{
							'We provide you the best quiz.'
						}
					</p>
				</div>
				<div className="flex mt-4 md:mt-0">
					<a className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-white rounded-md border border-transparent shadow-sm bg-main-color hover:bg-main-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-color">
						{'View All'}
					</a>
				</div>
			</div>
			<div className="grid overflow-hidden grid-cols-2 gap-4 px-4 mx-auto max-w-7xl sm:py-6 sm:px-6 lg:px-8 sm:grid-cols-3 lg:grid-cols-6 sm:gap-8">
				<a className="relative group bg-white p-6 rounded-lg hover:shadow-lg">
					<div>
						<span className="rounded-lg inline-flex p-2 ring-4 ring-white bg-main-color">
							<Image
								src="/assets/img/loading.gif"
								width={48}
								height={48}
								alt="Fire Services"
								className="h-12 w-12 opacity-70"
								aria-hidden="true"
							/>
						</span>
					</div>
					<div className="mt-8">
						<h3 className="text-lg text-second-color-600 font-bold">
							{'Fireman Services'}
						</h3>
						<p className="mt-2 text-sm text-second-color-400">
							{' Categories for all Fireman services'}
						</p>
					</div>
				</a>
				<a className="relative group bg-white p-6 rounded-lg hover:shadow-lg">
					<div className="">
						<span className="rounded-lg inline-flex p-2 ring-4 ring-white bg-ms-color">
                        <Image
								src="/assets/img/loading.gif"
								width={48}
								height={48}
								alt="Car Services"
								className="h-12 w-12 opacity-70"
								aria-hidden="true"
							/>
                        </span>
                        <div className="mt-8">
                            <h3 className="text-lg text-second-color-600 font-bold">{'Fireman Services'}</h3>
                            <p className="mt-2 text-sm text-second-color-400">{' Categories for all Fireman services'}</p>
                        </div>
					</div>
				</a>
                <a className="relative group bg-white p-6 rounded-lg hover:shadow-lg">
                    <div className="">
                        <span className="rounded-lg inline-flex p-2 ring-4 ring-white bg-ls-color">
                        <Image
								src="/assets/img/loading.gif"
								width={48}
								height={48}
								alt="Car Services"
								className="h-12 w-12 opacity-70"
								aria-hidden="true"
							/> 
                        </span>
                        <div className="mt-8">
                            <h3 className="text-lg text-second-color-600 font-bold">{'Fireman Services'}</h3>
                            <p className="mt-2 text-sm text-second-color-400">{' Categories for all Fireman services'}</p>
                        </div>
                    </div>
                </a>
			</div>
		</div>
	);
};

export default (Feature);
