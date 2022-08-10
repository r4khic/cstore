import React from 'react';
import GlobalStyles from 'presentation/layout/styles';
import Header from 'presentation/layout/Header';
import Footer from 'presentation/layout/Footer';

type PropsT = {
    children?: React.ReactNode;
};

const Layout: React.FC<PropsT> = (props) => {
    const { children } = props;

    return (
        <div>
            <GlobalStyles />
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;