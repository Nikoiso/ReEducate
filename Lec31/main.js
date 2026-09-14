// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// const Port = 3000;

// app.use(express.json());

// const MONGO_URI = 'mongodb://admin:admin@ac-tkidhbh-shard-00-00.gtkrjlo.mongodb.net:27017,ac-tkidhbh-shard-00-01.gtkrjlo.mongodb.net:27017,ac-tkidhbh-shard-00-02.gtkrjlo.mongodb.net:27017/?ssl=true&replicaSet=atlas-owkgvh-shard-0&authSource=admin&appName=Cluster0';

// mongoose.connect(MONGO_URI)
//   .then(() => {
//     console.log('Has been connected successfully');
//   })
//   .catch((err) => {
//     console.error('Unable to connect', err);
//   });

// const carSchema = new mongoose.Schema({
//   id: { type: String, required: true, unique: true },
//   brand: { type: String, required: true },
//   model: { type: String, required: true },
//   year: Number,
//   price: Number
// }, { timestamps: true });

// const Car = mongoose.model('Car', carSchema);

// app.get('/Cars', async (req, res) => {
//   try {
//     const cars = await Car.find();
//     res.json(cars);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.get('/Cars/:id', async (req, res) => {
//   try {
//     const car = await Car.findOne({ id: req.params.id });
//     if (!car) {
//       return res.status(404).json({ message: "მანქანა ამ ID-ით ვერ მოიძებნა" });
//     }
//     res.json(car);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.post('/Cars', async (req, res) => {
//   try {
//     const newCar = new Car(req.body);
//     const savedCar = await newCar.save();
//     res.status(201).json(savedCar);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// app.listen(Port, () => {
//   console.log(`Server running on http://localhost:${Port}`);
// });

// მონაცემები მონგოზე ჩვეულებრივ ავიდა AI-ის დახმარებით დავაკავშირე თორე რაღაც პრობლემა მქონდა ვერ ვასწორებდი

const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let items = [
  { id: 1, name: " Mercedes Benz C300 ", category: " Sedan ", price: 15000 },
  { id: 2, name: " BMW 540 ", category: " Sedan ", price: 21000 },
  { id: 3, name: " Mercedes Benz GL450 ", category: " SUV ", price: 15000 },
  { id: 4, name: " Kia Optima ", category: " Sedan ", price: 10000 },
  { id: 5, name: " Porsche Panamera ", category: " Sedan ", price: 24000 },
];

app.get("/", (req, res) => {
  res.json("this is / req");
});

app.get("/items", (req, res) => {
  let { page = 1, take = 3 } = req.query;
  take > 3 ? (take = 3) : take;
  res.json(items.slice((page - 1) * take, page * take));
});

app.get("/items/:id", (req, res) => {
  let { id } = req.params;
  const findCars = items.find((el) => el.id === Number(id));
  res.json({ data: findCars });
});

app.post("/items", (req, res) => {
  const { name, category, price } = req.body;
  const lastId = items[items.length - 1]?.id || 0;
  let newItem = {
    id: lastId + 1,
    name,
    category,
    price,
  };
  items.push(newItem);

  res.json({
    message: " New item has been added successfully ",
    data: newItem,
  });
});

app.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  const index = items.findIndex((el) => el.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ message: "ID is invalid" });
  }

  const [deletedItem] = items.splice(index, 1);

  res.json({ message: "Item deleted successfully", data: deletedItem });
});

app.put("/item/:id", (res, req) => {
  const { id } = req.params;
  const { name, category, price } = req.body;
  const idenx = item.findIndex((el) => el.id === Number(id));
  if (index === -1) {
    return res.status(404).json({ message: "id is invalid" });
  }

  items[index] = {
    ...items[index],
    name: name || items[index].name,
    category: category || items[index].category,
    price: price || items[index].price,
  };

  res.json({ data: items[index] });
});


app.get("/secret", (req, res) => {
    const role = req.headers["role"];
  
    if (role === "admin") {
      res.json({ message: "Zdarova Admin!" });
    } else {
      res.status(403).json({ message: "Access denied" });
    }
  });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
