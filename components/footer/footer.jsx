import React from 'react';
import footer from '../../styles/footer.module.scss';

function Footer() {

    return ( 
        <footer className={footer.container}>
            <div>
                <h3>bageriet</h3>
                <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer</p>
                <div className={footer.innerContainer}>
                    <p>Copyright 2020 bageriet aps.</p>
                </div>
                <div className={footer.bottom}></div>
            </div>
        </footer>
    )
}

export default Footer