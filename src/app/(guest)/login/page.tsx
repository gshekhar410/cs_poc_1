import { Button } from "@/components/ui/button";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <Button className="hover:bg-red-700 focus:bg-amber-600">
        <Link href={"/home"}>Login</Link>
      </Button>
    </div>
  );
};

export default Login;
