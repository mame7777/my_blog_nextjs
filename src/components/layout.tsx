import { ReactNode } from 'react';

// Bootstrap
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';


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
