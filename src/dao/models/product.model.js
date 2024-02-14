// import { Schema, model } from "mongoose";
// import { randomUUID } from "node:crypto";
// import mongoosePaginate from "mongoose-paginate-v2";

// const productsList = [
//   {
//     _id: "288b956a-0630-43fe-a3b7-e07c82cb8b8c",
//     title: "7up",
//     description: "Gaseosa 7up Original 354ml.",
//     price: "393",
//     thumbnail: ["1702872959732-7up.webp"],
//     code: "7up001",
//     status: true,
//     stock: 145,
//     category: "bebidas",
//     timestamp: "2023-12-18T04:15:59.763Z",
//   },
//   {
//     _id: "817329fc-fe15-40cf-8b7f-ba5d0cb36577",
//     title: "7up Free",
//     description: "Gaseosa 7up sugar free 354ml.",
//     price: "790",
//     thumbnail: ["1702873048578-7upFree.webp"],
//     code: "7upFree",
//     status: true,
//     stock: 333,
//     category: "bebidas",
//     timestamp: "2023-12-18T04:17:28.585Z",
//   },
//   {
//     _id: "f791cff8-0c2a-4134-9743-56b204adff27",
//     title: "Coca",
//     description: "Gaseosa Coca-cola Sabor Original 354 Ml",
//     price: "565",
//     thumbnail: ["1702873151784-Coca.webp"],
//     code: "CC01",
//     status: true,
//     stock: 1560,
//     category: "bebidas",
//     timestamp: "2023-12-18T04:19:11.808Z",
//   },
//   {
//     _id: "80ad08e6-a8de-4893-9f43-ab1622cfa1b8",
//     title: "Coca Light",
//     description: "Gaseosa Coca-cola light 354 Ml",
//     price: "1400",
//     thumbnail: ["1702873247049-CocaLight.webp"],
//     code: "CC-L1",
//     status: true,
//     stock: 870,
//     category: "bebidas",
//     timestamp: "2023-12-18T04:20:47.055Z",
//   },
//   {
//     _id: "2264b041-642b-4175-a22e-369d1817e4b3",
//     title: "Fanta Grape",
//     description: "Fanta limited edition",
//     price: "2100",
//     thumbnail: ["1702873450337-FantaGrape.webp"],
//     code: "F00G12",
//     status: true,
//     stock: 50,
//     category: "limited",
//     timestamp: "2023-12-18T04:24:10.343Z",
//   },
//   {
//     _id: "4b4d5fb9-a104-4f71-a88d-8d26714cf60c",
//     title: "Fanta Guarana",
//     description: "Fanta limited edition ",
//     price: "2150",
//     thumbnail: ["1702873549447-FantaGuarana.webp"],
//     code: "FGLE001",
//     status: true,
//     stock: 50,
//     category: "limited",
//     timestamp: "2023-12-18T04:25:49.453Z",
//   },
//   {
//     _id: "0d0489dd-d80c-4364-9991-1f3b1e4586ef",
//     title: "Fanta Maracuja",
//     description: "Fanta limited edition",
//     price: "1700",
//     thumbnail: ["1702873694278-FantaMaracuja.webp"],
//     code: "FMLE-001",
//     status: true,
//     stock: 80,
//     category: "limited",
//     timestamp: "2023-12-18T04:28:14.302Z",
//   },
//   {
//     _id: "c6f70a0e-2dd6-4b56-929e-52a118e609bc",
//     title: "Fanta Misterio",
//     description: "Fanta limited edition",
//     price: "2300",
//     thumbnail: ["1702873828271-FantaMisterio.webp"],
//     code: "FM002",
//     status: true,
//     stock: 120,
//     category: "limited",
//     timestamp: "2023-12-18T04:30:28.295Z",
//   },
//   {
//     _id: "fd3db18e-1f9e-40e7-aff5-740b8a4cf87f",
//     title: "Fanta Uva",
//     description: "Fanta Uva limited edition",
//     price: "1900",
//     thumbnail: ["1702873909991-FantaUva.webp"],
//     code: "FU-LE001",
//     status: true,
//     stock: 135,
//     category: "limited",
//     timestamp: "2023-12-18T04:31:49.997Z",
//   },
//   {
//     _id: "49ff5767-002d-4856-bc69-b056073319bd",
//     title: "Mirinda",
//     description: "Mirinda Sabor naranja",
//     price: "1200",
//     thumbnail: ["1702873975867-MirindaNaranka.webp"],
//     code: "MNO-001",
//     status: true,
//     stock: 200,
//     category: "bebidas",
//     timestamp: "2023-12-18T04:32:55.874Z",
//   },
//   {
//     _id: "04fffee5-7cfc-485c-bd44-897a9ca01e90",
//     title: "Pepsi",
//     description: "Pepsi sabor original",
//     price: "750",
//     thumbnail: ["1702874019752-Pepsi.webp"],
//     code: "PSO-001",
//     status: true,
//     stock: 2100,
//     category: "bebidas",
//     timestamp: "2023-12-18T04:33:39.773Z",
//   },
//   {
//     _id: "823813a8-b9b3-44f9-bad0-986ba123cb48",
//     title: "Pepsi Black",
//     description: "Pepsi Black nuevo sabor",
//     price: "1100",
//     thumbnail: ["1702874191220-PepsiBlack.webp"],
//     code: "PB-001",
//     status: true,
//     stock: 250,
//     category: "bebidas",
//     timestamp: "2023-12-18T04:36:31.226Z",
//   },
//   {
//     _id: "c853e538-fdeb-42dc-ad25-25da45d6012c",
//     title: "Sprite",
//     description: "Sprite sabor original",
//     price: "805",
//     thumbnail: ["1702874305930-Sprite.webp"],
//     code: "SO0",
//     status: true,
//     stock: 1230,
//     category: "bebidas",
//     timestamp: "2023-12-18T04:38:25.953Z",
//   },
//   {
//     _id: "dd5fea63-5681-403f-ba48-cfe4acaf4083",
//     title: "Paso De Los Toros",
//     description: "Gaseosa Paso De Los Toros Sin Azúcares 1,5l Pomelo",
//     price: "805",
//     thumbnail: ["1702874462611-PASOdelostoros.png"],
//     code: "PDLT-A0",
//     status: true,
//     stock: 100,
//     category: "bebidas",
//     timestamp: "2023-12-18T04:41:02.634Z",
//   },
// ];

// const productCollection = "products";

// const productSchema = new Schema(
//   {
//     _id: { type: String, default: randomUUID },
//     title: { type: String, required: true, max: 100 },
//     description: { type: String, required: true, max: 100 },
//     price: { type: String, required: true },
//     thumbnail: { type: Array, required: true },
//     code: { type: String, required: true, unique: true },
//     status: { type: Boolean, required: false },
//     stock: { type: Number, required: true },
//     category: { type: String, required: true, max: 100 },
//     timestamp: { type: Date, default: Date.now },
//   },
//   {
//     strict: "throw",
//     versionKey: false,
//   }
// );

// productSchema.plugin(mongoosePaginate);
// export const productModel = model(productCollection, productSchema);

// // Delete 'products' collection to refresh the list
// // productModel
// //   .deleteMany({})
// //   .then(() => {
// //     console.log("Cleaning products collection...");
// //     // Upload all products from productList
// //     const productList = [
// //       // Add your product objects here
// //       {
// //         _id: "288b956a-0630-43fe-a3b7-e07c82cb8b8c",
// //         title: "7up",
// //         description: "Gaseosa 7up Original 354ml.",
// //         price: "393",
// //         thumbnail: ["1702872959732-7up.webp"],
// //         code: "7up001",
// //         status: true,
// //         stock: 145,
// //         category: "bebidas",
// //         timestamp: "2023-12-18T04:15:59.763Z",
// //       },
// //       {
// //         _id: "817329fc-fe15-40cf-8b7f-ba5d0cb36577",
// //         title: "7up Free",
// //         description: "Gaseosa 7up sugar free 354ml.",
// //         price: "790",
// //         thumbnail: ["1702873048578-7upFree.webp"],
// //         code: "7upFree",
// //         status: true,
// //         stock: 333,
// //         category: "bebidas",
// //         timestamp: "2023-12-18T04:17:28.585Z",
// //       },
// //       {
// //         _id: "f791cff8-0c2a-4134-9743-56b204adff27",
// //         title: "Coca",
// //         description: "Gaseosa Coca-cola Sabor Original 354 Ml",
// //         price: "565",
// //         thumbnail: ["1702873151784-Coca.webp"],
// //         code: "CC01",
// //         status: true,
// //         stock: 1560,
// //         category: "bebidas",
// //         timestamp: "2023-12-18T04:19:11.808Z",
// //       },
// //       {
// //         _id: "80ad08e6-a8de-4893-9f43-ab1622cfa1b8",
// //         title: "Coca Light",
// //         description: "Gaseosa Coca-cola light 354 Ml",
// //         price: "1400",
// //         thumbnail: ["1702873247049-CocaLight.webp"],
// //         code: "CC-L1",
// //         status: true,
// //         stock: 870,
// //         category: "bebidas",
// //         timestamp: "2023-12-18T04:20:47.055Z",
// //       },
// //       {
// //         _id: "2264b041-642b-4175-a22e-369d1817e4b3",
// //         title: "Fanta Grape",
// //         description: "Fanta limited edition",
// //         price: "2100",
// //         thumbnail: ["1702873450337-FantaGrape.webp"],
// //         code: "F00G12",
// //         status: true,
// //         stock: 50,
// //         category: "limited",
// //         timestamp: "2023-12-18T04:24:10.343Z",
// //       },
// //       {
// //         _id: "4b4d5fb9-a104-4f71-a88d-8d26714cf60c",
// //         title: "Fanta Guarana",
// //         description: "Fanta limited edition ",
// //         price: "2150",
// //         thumbnail: ["1702873549447-FantaGuarana.webp"],
// //         code: "FGLE001",
// //         status: true,
// //         stock: 50,
// //         category: "limited",
// //         timestamp: "2023-12-18T04:25:49.453Z",
// //       },
// //       {
// //         _id: "0d0489dd-d80c-4364-9991-1f3b1e4586ef",
// //         title: "Fanta Maracuja",
// //         description: "Fanta limited edition",
// //         price: "1700",
// //         thumbnail: ["1702873694278-FantaMaracuja.webp"],
// //         code: "FMLE-001",
// //         status: true,
// //         stock: 80,
// //         category: "limited",
// //         timestamp: "2023-12-18T04:28:14.302Z",
// //       },
// //       {
// //         _id: "c6f70a0e-2dd6-4b56-929e-52a118e609bc",
// //         title: "Fanta Misterio",
// //         description: "Fanta limited edition",
// //         price: "2300",
// //         thumbnail: ["1702873828271-FantaMisterio.webp"],
// //         code: "FM002",
// //         status: true,
// //         stock: 120,
// //         category: "limited",
// //         timestamp: "2023-12-18T04:30:28.295Z",
// //       },
// //       {
// //         _id: "fd3db18e-1f9e-40e7-aff5-740b8a4cf87f",
// //         title: "Fanta Uva",
// //         description: "Fanta Uva limited edition",
// //         price: "1900",
// //         thumbnail: ["1702873909991-FantaUva.webp"],
// //         code: "FU-LE001",
// //         status: true,
// //         stock: 135,
// //         category: "limited",
// //         timestamp: "2023-12-18T04:31:49.997Z",
// //       },
// //       {
// //         _id: "49ff5767-002d-4856-bc69-b056073319bd",
// //         title: "Mirinda",
// //         description: "Mirinda Sabor naranja",
// //         price: "1200",
// //         thumbnail: ["1702873975867-MirindaNaranka.webp"],
// //         code: "MNO-001",
// //         status: true,
// //         stock: 200,
// //         category: "bebidas",
// //         timestamp: "2023-12-18T04:32:55.874Z",
// //       },
// //       {
// //         _id: "04fffee5-7cfc-485c-bd44-897a9ca01e90",
// //         title: "Pepsi",
// //         description: "Pepsi sabor original",
// //         price: "750",
// //         thumbnail: ["1702874019752-Pepsi.webp"],
// //         code: "PSO-001",
// //         status: true,
// //         stock: 2100,
// //         category: "bebidas",
// //         timestamp: "2023-12-18T04:33:39.773Z",
// //       },
// //       {
// //         _id: "823813a8-b9b3-44f9-bad0-986ba123cb48",
// //         title: "Pepsi Black",
// //         description: "Pepsi Black nuevo sabor",
// //         price: "1100",
// //         thumbnail: ["1702874191220-PepsiBlack.webp"],
// //         code: "PB-001",
// //         status: true,
// //         stock: 250,
// //         category: "bebidas",
// //         timestamp: "2023-12-18T04:36:31.226Z",
// //       },
// //       {
// //         _id: "c853e538-fdeb-42dc-ad25-25da45d6012c",
// //         title: "Sprite",
// //         description: "Sprite sabor original",
// //         price: "805",
// //         thumbnail: ["1702874305930-Sprite.webp"],
// //         code: "SO0",
// //         status: true,
// //         stock: 1230,
// //         category: "bebidas",
// //         timestamp: "2023-12-18T04:38:25.953Z",
// //       },
// //       {
// //         _id: "dd5fea63-5681-403f-ba48-cfe4acaf4083",
// //         title: "Paso De Los Toros",
// //         description: "Gaseosa Paso De Los Toros Sin Azúcares 1,5l Pomelo",
// //         price: "805",
// //         thumbnail: ["1702874462611-PASOdelostoros.png"],
// //         code: "PDLT-A0",
// //         status: true,
// //         stock: 100,
// //         category: "bebidas",
// //         timestamp: "2023-12-18T04:41:02.634Z",
// //       },
// //     ];
// //     productModel
// //       .insertMany(productList)
// //       .then((products) => {
// //         console.log("Ready to go. Products uploaded successfully!");
// //       })
// //       .catch((err) => {
// //         console.error("Error uploading products:", err);
// //       });
// //   })
// //   .catch((err) => {
// //     console.error("Error deleting products:", err);
// //   });
