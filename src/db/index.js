import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();
// db.snippet.create({
//   data: {
//     title: "Example Snippet",
//     code: "console.log('Hello, World!');",
//   },
// });
