import React, { useState, useEffect } from "react";

interface BookmarkProps {
    onclick?: () => void;
    isBookmarked?: boolean;
    id?: string;
    className?: string;

}

export const Bookmark: React.FC<BookmarkProps> = ({
    onclick,
    isBookmarked,
    id,
    className
}: BookmarkProps) => {
    const [isBookmarkedState, setIsBookmarkedState] = useState(isBookmarked);

    useEffect(() => {
        setIsBookmarkedState(isBookmarked);
    }, [isBookmarked]);

    const handleClick = () => {
        if (onclick) {
            onclick();
        }
        setIsBookmarkedState(!isBookmarkedState);   
            console.log(isBookmarkedState);
    }

    return (
        <button
            className={`${className} ${isBookmarkedState ? 'bookmarked' : ''}`}
            onClick={handleClick}
            id={id}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.37 0 0 5.37 0 12C0 18.63 5.37 24 12 24C18.63 24 24 18.63 24 12C24 5.37 18.63 0 12 0ZM12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2ZM12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM12 6C9.34 6 7 8.34 7 12C7 15.66 9.34 18 12 18C14.66 18 17 15.66 17 12C17 8.34 14.66 6 12 6Z" fill="white" />
            </svg>
        </button>
    );
}