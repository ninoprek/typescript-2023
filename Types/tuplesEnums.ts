const color: [number, number, number] = [23, 45, 346];

type HTTPResponse = [number, string];

let goodRes: HTTPResponse = [200, "ok"];
// let goodRes2: HTTPResponse = ["ok", 200];
// goodRes[0] = "ok";

//Strange that this works
goodRes.push(123);
goodRes.pop();
goodRes.pop();
goodRes.pop();
goodRes.pop();

// const responses: HTTPResponse[] = [[404, "Not Found"], [200, "OK"], ["500", "ERROR"]];


/* *************************************** */
// ENUMS

// enum OrderStatus {
//   PENDING,
//   SHIPPED,
//   DELIVERED,
//   RETURNED
// }
enum OrderStatus {
  PENDING = 10,
  SHIPPED = 43,
  DELIVERED = 324,
  RETURNED = 98
}

const myStatus  = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus): boolean {
  return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.RETURNED);

const enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  ERROR = 500
};

ArrowKeys.LEFT