import "./fanta.css";
import "./globals.css";
import Head from "./Head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";
import ProductsProvider from "@/context/ProductContext";

export const metadata = {
  title: "Breakmark | Store",
  description: "A store for purchasing things.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <ProductsProvider>
      <html lang="en">
        <Head/>
        <body >
          <div id="portal"></div>
          <div id="app">
            <header>
              <div className="header-content">
                <Link href={'/'}><img className="logo" src="med_res/Breakmark.png"></img></Link>
                <h5 className="mid-text">- Cool stuff for cool people -</h5>
                <Cart></Cart>
              </div>
            </header>
            <main>
              {children}
            </main>
            <div className="hr"/>
            <footer>
              <div className="email-container">
                <h5>Get a sneak peak at new addittions to the store, special offers, and so much more.</h5>
                <EmailInput/>
              </div>
              <div className="links-container">
                <div>
                  <h3>Breakmark</h3>
                  <Link href={'/'}>Project 1</Link>
                  <Link href={'/'}>Project 2</Link>
                </div>
                <div>
                  <h3>Store</h3>
                  <Link href={'/'}>Home</Link>
                  <Link href={'/cart'}>Cart</Link>
                </div>
                <div>
                  <h3>Support</h3>
                  <Link href={'/contacts'}>Contacts</Link>
                  <Link href={'/faq'}>FAQs</Link>
                </div>
              </div>
              <div className="socials">
                <p>© <a href="https://www.Breakmark.com" target="_blank">Breakmark Softwares</a> 2025</p>
                <div className="social-links">
                  <Link href={'/'} target="_blank"><i className="fa-brands fa-github"></i></Link>
                  <Link href={'/'} target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                  <Link href={'/'} target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                </div>
              </div>
            </footer>
          </div>
        </body>
      </html>
    </ProductsProvider>
  );
}
