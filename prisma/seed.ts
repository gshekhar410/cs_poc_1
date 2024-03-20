import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient();

const initial_users = [
  {
    name: "Shekhar Giri",
    email: "gshekhar104@gmail.com",
    superuser: true,
    admin: true,
    disabled: false,
  },
  {
    name: "Eric Lillard",
    email: "eric.l.lillard@gmail.com",
    superuser: false,
    admin: true,
    disabled: false,
  },
  {
    name: "Jonathan Love",
    email: "cso.claimsmart@gmail.com",
    superuser: false,
    admin: true,
    disabled: false,
  },
  {
    name: "Krishnakumar Ganesh",
    email: "krishnakumar.ganesh@gmail.com",
    superuser: false,
    admin: true,
    disabled: false,
  },
  {
    name: "Justin Barr",
    email: "justin.barr@gmail.com",
    superuser: false,
    admin: true,
    disabled: false,
  },
];

async function main() {
  initial_users.map(async (item, index) => {
    try {
      await prisma.user.create({
        data: item,
      });
    } catch (e) {
      console.log("User already exits", e);
    }
  });

  for (let i = 0; i < 10; i++) {
    try {
      const user = await prisma.user.create({
        data: {
          email: faker.internet.email(),
          name: faker.person.fullName().substring(0, 30), // Truncate names to 30 characters
          superuser: false,
          admin: false,
        },
      });

      console.log(`Created user with email: ${user.email}`);
    } catch (e) {
      console.log("Error occurred while inserting dummy user", e);
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
