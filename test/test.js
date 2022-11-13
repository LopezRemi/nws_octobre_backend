import request from "supertest";
import app from '../server.js'

describe("POST /materials/", (done) => {
    it("Should add materials", () => {
        request(app)
            .post("//materials/")
            .send({ title: "test post materials" })
            .expect(201, done);
    });
});

describe("GET /materials/", (done) => {
    it("should get all materials", () => {
        request(app).get('/materials/').expect(200, done)
    });
});

describe("GET /materials/:id", (done) => {
    it("should get a particular material", () => {
        request(app).get("/tasks/636d36832ae2fa656ea6a603").expect(200, done);
    });
});

describe("PATCH /materials/:id", (done) => {
    it("should update material", () => {
        request(app)
            .put("/tasks/UPDATE/636d36832ae2fa656ea6a603")
            .expect(201, done)
            .send({ title: "test tache update" });
    });
});

describe("DELETE /materials/:id", (done) => {
    it("should update material", () => {
        request(app)
            .delete("/tasks/DELETE/958890a5-fff5-4745")
            .expect(204, done)
            .send({ message: "material deleted" });
    });
});