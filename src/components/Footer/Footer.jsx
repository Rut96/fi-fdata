import './Footer.css'

export function Footer(){
    return(
        <footer className="Footer">
            Footer © {new Date().getFullYear() }
        </footer>
    );
}