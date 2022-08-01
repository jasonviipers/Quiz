import React from 'react';
import { Helmet } from 'react-helmet';

interface SeoProps {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
	type?: string;
	author?: string;
	publisher?: string;
	datePublished?: string;
	dateModified?: string;
	keywords?: string;
	lang?: string;
}

export const SEO: React.FC<SeoProps> = ({
	title,
	description,
	image,
	url,
	type,
	author,
	publisher,
	datePublished,
	dateModified,
	keywords,
	lang
}: SeoProps) => {
	return <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta name="url" content={url} />
        <meta name="type" content={type} />
        <meta name="author" content={author} />
        <meta name="publisher" content={publisher} />
        <meta name="datePublished" content={datePublished} />
        <meta name="dateModified" content={dateModified} />
        <meta name="keywords" content={keywords} />
        <meta name="lang" content={lang} />
    </Helmet>;
};
