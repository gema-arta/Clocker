import React, { useEffect, useRef, useState } from 'react';
import { Label, Image } from 'semantic-ui-react';
import raw from 'raw.macro';
import psl from 'psl';
import { VirtualGrid } from './../../components/lists/virtualGrid';

const euroSource = raw('./../../database/euro_sites.txt')
    .split('\n')
    .map((item) => new window.URL(item.trim()))
    .map((urlObject) => ({
        name: psl.parse(urlObject.hostname).domain,
        favicon: `${urlObject.origin}/favicon.ico`,
        url: urlObject.href,
    }));

const usSource = raw('./../../database/us_sites.txt')
    .split('\n')
    .map((item) => new window.URL(item.trim()))
    .map((urlObject) => ({
        name: psl.parse(urlObject.hostname).domain,
        favicon: `${urlObject.origin}/favicon.ico`,
        url: urlObject.href,
    }));

export const DataSelector = () => {
    const euroData = euroSource.map((item) => Object.values(item));
    const unitedStatesData = usSource.map((item) => Object.values(item));

    const processedEuro = euroData.map((textArray) => [
        <Label
            className='urlShortName'
            as='a'
            target='_blank'
            content={textArray[0]}
        />,
        <Image
            avatar
            centered
            style={{ display: 'block' }}
            src={textArray[1]}
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://eu.ui-avatars.com/api/?name=${textArray[0]}`;
            }}
        />,
        textArray[2],
    ]);

    const gridRef = useRef();

    useEffect(() => {
        if (gridRef.current != null) {
            gridRef.current.resetAfterIndices({
                columnIndex: 0,
                rowIndex: 0,
            });
            gridRef.current.scrollToItem(0);
        }
    }, [gridRef]);

    const [data, setData] = useState(processedEuro);

    return <VirtualGrid gridRef={gridRef} rowData={data} />;
};
