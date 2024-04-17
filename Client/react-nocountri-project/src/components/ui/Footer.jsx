import logo from '../../assets/logoXL.svg'
import facebook from '../../assets/facebook.webp'
import instagram from '../../assets/instagram.webp'
import youtube from '../../assets/youtube.webp'
import twitter from '../../assets/twitter-x.webp'



const Footer = () => {
  return (
    <div className='flex flex-col items-center border-t-[1px] gap-1 md:flex-row md:justify-around px-5 py-2 overflow-y-hidden'>
        <div>
            <img src={logo} className='w-36 md:w-44' alt="" />
        </div>
        <div className='flex w-36 gap-2 lg:order-2'>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
          <a href="#">
            <img src={facebook} alt="" />
          </a>
          <a href="#">
            <img src={youtube} alt="" />
          </a>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
        </div>
        <div className='text-center text-lg font-medium'>
            <p>©<span>{new Date().getFullYear()}</span></p>
        </div>
    </div>
  )
}

export default Footer