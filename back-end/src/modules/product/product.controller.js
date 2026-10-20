export const productController = {
  getAll: (req, res) => {
    res.status(200).json({
      message: "Lay san pham thanh cong!",
      data: [{ id: 1, name: "iphone x" }],
    });
  },
};
