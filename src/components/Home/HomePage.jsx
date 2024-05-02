import videoHomepage from '../../assets/video-homepage.mp4'
import { useSelector } from 'react-redux';

const HomePage = () => {
  const account = useSelector(state => state.user.account);
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  console.log(account, isAuthenticated);
  
  return ( 
    <>
      <video className="fixed bottom-0 w-full" autoPlay loop muted>
        <source
          src={videoHomepage}
          type="video/mp4"
        />
      </video>
      <div className="relative p-[100px] w-[50%] flex flex-col gap-8">
        <div className="text-[4rem] leading-[4rem]">There's a better way to ask</div>
        <div className="text-xl">"You don't want to make a boring form."
          And our audience won't answer one.
          Create a typeform insted- and make everyone happy.
        </div>
        <div className="">
          <button className=" text-white font-bold px-6 py-3 mb-4 rounded-md bg-black hover:opacity-80">Get's started. It's free</button>
          <div className="font-thin text-sm">No credit card required</div>
          <div className="font-thin text-sm">No time limit on Free plan</div>
        </div>
      </div>
    </> 
  );
}
 
export default HomePage;