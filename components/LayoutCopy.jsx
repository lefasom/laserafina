import Footer from "./Footer"
import MenuCopy from "./MenuCopy"

export default function LayoutCopy({ children }) {
    return (
      <>
        <MenuCopy/>
        <main>{children}</main>
        <Footer />
      </>
    )
  }
