import React from 'react';
import Marquee from 'react-fast-marquee';

interface Item {
    image: string;
}

interface TrustBarProps {
    images: Item[];
}

export const TrustBar = ({ images }: TrustBarProps) => {
    return (
        <Marquee>
            {images.map((item, index) => (
                <img width={100} key={index} src={item.image} className="mx-10" />
            ))}
        </Marquee>
    );
};
