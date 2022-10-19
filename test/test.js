import request from "supertest";
import app from '../server.js'

describe("POST /tasks/add", (done) => {
    it("Should add task", () => {
        request(app)
            .post("/tasks/add")
            .send({ title: "test tache TDD" })
            .expect(201, done);
    });
});

describe("GET /tasks", (done) => {
    it("should get all task", () => {
        request(app).get('/tasks').expect(200, done)
    });
});

describe("GET /tasks/:id", (done) => {
    it("should get a particular task", () => {
        request(app).get("/tasks/958890a5-fff5-4745").expect(200, done);
    });
});

describe("PUT /tasks/UPDATE/:id", (done) => {
    it("should update task", () => {
        request(app)
            .put("/tasks/UPDATE/958890a5-fff5-47")
            .expect(201, done)
            .send({ title: "test tache TDD" });
    });
});

describe("DELETE /tasks/DELETE/:id", (done) => {
    it("should update task", () => {
        request(app)
            .delete("/tasks/DELETE/958890a5-fff5-4745")
            .expect(204, done)
            .send({ message: "task deleted" });
    });
});