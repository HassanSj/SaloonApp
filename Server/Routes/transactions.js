const express = require("express");
const booking = express.Router();
// const membership = express.Router();
// const wallets = express.Router();
// const withdraw = express.Router();
const db = require("../config/db");

booking.get("/transactions/booking", (req, res) => {
  db.query(
    "SELECT s.id ,b.id , b.customer_id,c.first_name , c.last_name , b.saloon_id, s.amount,s.refund ,s.status,s.created_at, n.name FROM transactions as s , bookings as b , customers as c  , business_types as n LIMIT 20",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.send(result);
    }
  );
});
// membership.get("/transactions/membership", (req, res) => {
//   db.query(
//     "SELECT m.membership_id, b.saloon_id, c.first_name , c.last_name ,n.name, p.id, p.price,s.refund ,s.status,s.created_at FROM booking_memberships as m , packages as p , transactions as s , bookings as b , customers as c  , business_types as n",
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log(result);
//       res.send(result);
//     }
//   );
// });
// wallets.get("/transactions/wallet", (req, res) => {
//   db.query(
//     "SELECT b.customer_id,c.first_name , c.last_name , sl.id, sl.first_name , sl.last_name , s.amount,s.refund ,s.status,s.created_at, n.name , w.id FROM transactions as s , bookings as b , customers as c  , business_types as n , wallets as w , saloons as sl",
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log(result);
//       res.send(result);
//     }
//   );
// });
// withdraw.get("/transactions/withdraw", (req, res) => {
//   db.query(
//     "SELECT sl.id, sl.first_name , sl.last_name ,n.name , w.id, s.amount,s.refund ,s.created_at,  s.status FROM transactions as s , bookings as b , customers as c  , business_types as n , wallets as w , saloons as sl",
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log(result);
//       res.send(result);
//     }
//   );
// });
module.exports = booking;
// module.exports = membership;
// module.exports = wallets;
// module.exports = withdraw;
