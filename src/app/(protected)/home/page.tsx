import { ButtonLink } from "@/components/LinkButton";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full py-[15px] text-black">
      <h3 className="font-normal">Welcome,</h3>
      <p className="font-bold italic mb-[25px]">Eagle</p>
      <p className="font-bold mb-2">What you would like to do?</p>
      <ul>
        <li>
          #<ButtonLink text="Record voice note" url="/new-voice-note"></ButtonLink>
        </li>
        <li>
          #<ButtonLink text="View users list" url="/users"></ButtonLink>
        </li>
        <li>
          #<ButtonLink text="Sign out" url="/login"></ButtonLink>
        </li>
      </ul>
    </div>
  );
};

export default Home;
