import { UsersTable } from "@/components/UsersTable";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

const Users = async () => {
  const users = await prisma.user.findMany({
    orderBy: {
      superuser: "desc",
    },
  });

  return (
    <div className="flex flex-col w-full py-[15px] text-black">
      <UsersTable users={users} />
    </div>
  );
};

export default Users;
