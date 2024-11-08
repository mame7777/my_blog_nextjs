import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
    <div>
        <header>
            <div>ヘッダーだよ</div>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <div>フッターだよ</div>
        </footer>
    </div>
    );
}

export default Layout;
