const mysql = require("mysql");

describe("test de Pablo", () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test_unitaire_bdd",
  });

  connection.connect();

  beforeEach(function () {
    connection.beginTransaction();
  });

  afterEach(function () {
    connection.rollback();
  });

  afterAll(function () {
    connection.end();
  });

  it("devrait faire des trucs", () => {
    let a = 2; //appeler une fonction à la place
    let b = 2; //appeler une fonction à la place
    expect(a + b).toBe(4);
  });
});
