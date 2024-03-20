import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function UsersTable({ users }: { users: any }) {
  return (
    <Table className="bg-black text-white">
      <TableCaption>List of all users.</TableCaption>
      <TableHeader>
        <TableRow className="bg-orange-400 text-black hover:bg-orange-400">
          <TableHead className="font-bold w-[100px]">Name</TableHead>
          <TableHead className="font-bold">Email</TableHead>
          <TableHead className="font-bold">Superuser</TableHead>
          <TableHead className="font-bold">Admin</TableHead>
          <TableHead className="font-bold text-right">Disabled</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user: any, idx: number) => (
          <TableRow key={idx} className="bg-slate-800">
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell className="font-medium">
              {user.email.toLowerCase()}
            </TableCell>
            <TableCell>{`${user.superuser}`}</TableCell>
            <TableCell>{`${user.admin}`}</TableCell>
            <TableCell className="text-right">{`${user.disabled}`}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
