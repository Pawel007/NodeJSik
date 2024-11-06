import { expect } from "chai";
import pkg from "pactum";
const { spec } = pkg;
import 'dotenv/config'
import { baseUrl, userID } from "../helpers/data.js";

describe("Api tests", () => {
  it("get request", async () => {
    const response = await spec().get(`${baseUrl}/BookStore/v1/Books`)
     // .inspect();
     console.log(process.env.SECRET_PASSWORD)
    const responseB = JSON.stringify(response.body);
    expect(response.statusCode).to.eql(200);
    expect(responseB.body.books[1].title).to.eql("Learning JavaScript Design Patterns");
    expect(responseB.body.books[4].author).to.eql("Kyle Simpson");
  });

    it.only("Create a user", async () => {
        const response = await spec()
        .post(`${baseUrl}/Account/v1/User`)
        .withBody({
            userName: "kot_pies",
            password: "Test123!",
        })
        .inspect();
        expect(response.statusCode).to.eql(201)
        //23a98fad-717d-4d19-9eae-531aa14f1431
    })
});
