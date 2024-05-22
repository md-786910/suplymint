
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './components/Landing'
import Milestone from './components/Milestone'
import Service from './components/Service'
import Testnomials from './components/Testnomials'

function App() {

  return (
    <>
      <div
        className="w-full h-[9650px] relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[124px] leading-[normal] tracking-[normal] text-center text-lg text-gray-200 font-poppins mq450:gap-[31px] mq800:gap-[62px] mq1150:h-auto"
      >
        <Header />
        <Landing />
        <Testnomials />
        <Milestone />
        <Service />

        <Footer />


      </div>
    </>
  )
}

export default App
