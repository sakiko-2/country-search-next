import Footer from '../components/footer'
import Navbar from '../components/navbar'

export default function Layout({children}) {
  return (
    <div className="flex min-h-screen flex-col bg-[color:var(--light-background-color)] text-[color:var(--light-text-color)] dark:bg-[color:var(--dark-background-color)] dark:text-[color:var(--dark-text-color)]">
      <Navbar />
      <main className="container flex flex-1 flex-col px-5 py-6 sm:mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  )
}
