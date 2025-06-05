import React from 'react';
import { LayoutGrid } from './ui/layout-grid';

const cards = [[
    {
        id: 1,
        className: 'md:col-span-2',
        thumbnail: 'gallery/gallery1.webp',
    },
    {
        id: 2,
        className: 'col-span-1',
        thumbnail: 'gallery/gallery2.webp',
    },
    {
        id: 3,

        className: 'col-span-1',
        thumbnail: 'gallery/gallery3.webp',
    },
    {
        id: 4,

        className: 'md:col-span-2',
        thumbnail: 'gallery/gallery4.webp',
    },
],
[
    {
        id: 1,
        className: 'md:col-span-2',
        thumbnail: 'gallery/gallery6.webp',
    },
    {
        id: 2,
        className: 'col-span-1',
        thumbnail: 'gallery/gallery2.webp',
    },
    {
        id: 3,

        className: 'col-span-1',
        thumbnail: 'gallery/gallery3.webp',
    },
    {
        id: 4,

        className: 'md:col-span-2',
        thumbnail: 'gallery/gallery8.webp',
    },
]];

export default function Gallery() {
    return (
        <div className='my-6 md:my-10 px-3'>
            <div className="font-bold text-3xl md:text-5xl mb-4 md:mb-10">Gallery</div>
            <div className="flex h-screen w-full">
                <LayoutGrid cards={cards[0]} />
                <LayoutGrid cards={cards[1]} />
            </div>
        </div>
    );
}