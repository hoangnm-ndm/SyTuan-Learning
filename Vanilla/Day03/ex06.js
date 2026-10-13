const students = [
  { id: 1, name: "Vu Manh Hung", address: "Ha Noi", score: 8 },
  { id: 2, name: "Nguyen Van A", address: "Ha Nam", score: 10 },
  { id: 3, name: "Nguyen Van B", address: "Ha Tinh", score: 6 },
  { id: 4, name: "Nguyen Van C", address: "Ho Chi Minh", score: 2 },
  { id: 5, name: "Nguyen Van D", address: "Ha Noi", score: 9 },
  { id: 6, name: "Nguyen Van E", address: "Ha Nam", score: 5 },
];

/** Dùng phương thức reduce để gom các học viên theo address */
/**
 * Kết quả mong muốn:
 *
 * {
 * "Ha Noi": [
 *   { id: 1, name: "Vu Manh Hung", address: "Ha Noi", score: 8 },
 *  { id: 5, name: "Nguyen Van D", address: "Ha Noi", score: 9 }
 * ],
 * "Ha Nam": [
 *   { id: 2, name: "Nguyen Van A", address: "Ha Nam", score: 10 },
 *  { id: 6, name: "Nguyen Van E", address: "Ha Nam", score: 5 }
 * ],
 * "Ha Tinh": [
 *     { id: 3, name: "Nguyen Van B", address: "Ha Tinh", score: 6 }
 * ],
 * "Ho Chi Minh": [
 *     { id: 4, name: "Nguyen Van C", address: "Ho Chi Minh", score: 2 }
 *   ]
 * }
 */
