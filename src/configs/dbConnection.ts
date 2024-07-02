import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("playground", "elisha", "Okello@900", {
  host: "localhost",
  dialect: "postgres",
});

// export const dbConfig: { [key: string]: DatabaseConfig } = {
//
//   test: {
//     username: "elisha",
//     password: "Okello@900",
//     database: "playground",
//     host: "localhost",
//     dialect: "postgres",
//   },
//   production: {
//     username: "elisha",
//     password: "Okello@900",
//     database: "playground",
//     host: "localhost",
//     dialect: "postgres",
//   },
// };
