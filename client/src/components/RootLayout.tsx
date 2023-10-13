import React, {FC} from 'react';
import Header from "@/components/Header";

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({children}) => {
    return(
        <>
            <div>
                <Header />
                <main>{children}</main>
            </div>
        </>
    );
}

export default RootLayout;
