import { Calendar } from "@/components";
import CardParents from "@/components/CardParents/CardParents";
import CardProfile from "@/components/CardProfile/CardProfile";



const Home = () => {
  return <>
  <div className="bg-gray-50 grid lg:grid-cols-[400px_2fr] p-10 lg:space-x-5 grid-rows-[auto]">
    <div className="grid row-span-2">
    <CardProfile />
    </div>
    <div className="space-y-5 grid row-span-2">
    <CardParents/>
    <div className="grid row-span-2">
    <Calendar />
    </div>
    </div>
  </div>
  </>
};

export default Home;
