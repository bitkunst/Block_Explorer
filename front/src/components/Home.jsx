import React, { useEffect, useState } from 'react';
import BlockPrev from './blocks/BlockPrev';
import TxPrev from './transactions/TxPrev';
import styled from 'styled-components';
import socketIO from 'socket.io-client';
import styles from '../public/Home.module.css';

const Layout = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ;
`;

const Home = () => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const socket = socketIO.connect('http://localhost:4000', {
            transports: ['websocket'],
        });

        setSocket(socket);
    }, []);

    return (
        <div>
            {socket && (
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <BlockPrev socket={socket} />
                    </div>
                    <div className={styles.wrapper}>
                        <TxPrev socket={socket} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
