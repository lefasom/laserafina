import Footer from "./Footer"
import Menu from "./Menu"

export default function Layout({ children }) {
    return (
      <>
        <Menu/>
        <main>{children}</main>
        <Footer />
      </>
    )
  }
