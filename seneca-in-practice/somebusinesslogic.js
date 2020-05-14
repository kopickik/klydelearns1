const Seneca = require("seneca");

function rejector() {
  this.add("cmd:run", (msg, done) => {
    return done(null, { tag: "rejector" });
  });
}

function approver() {
  this.add("cmd:run", (msg, done) => {
    return done(null, { tag: "approver" });
  });
}

function local() {
  this.add("cmd:run", function (msg, done) {
    this.prior(msg, (err, reply) => {
      return done(null, { tag: reply ? reply.tag : "local" });
    });
  });
}

Seneca().use(approver).listen({ type: "http", port: 8260, pin: "cmd:*" });

Seneca().use(rejector).listen(8270);

const handler = (err, reply) => console.log(err, reply);

Seneca().use(local).act("cmd:run", handler);

Seneca()
  .client({ port: 8270, pin: "cmd:run" })
  .client({ port: 8260, pin: "cmd:run" })
  .use(local)
  .act("cmd:run", handler);

Seneca()
  .client({ port: 8260, pin: "cmd:run" })
  .client({ port: 8270, pin: "cmd:run" })
  .use(local)
  .act("cmd:run", handler);
