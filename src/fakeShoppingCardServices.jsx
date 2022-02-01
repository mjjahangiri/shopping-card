export const ShoppingCard = [
  {
    id: 1,
    description: "کاپشن چرم",
    quantity: 1,
    price: "499.000",
  },
  {
    id: 2,
    description: "تیشرت تامی هیلفیگر",
    quantity: 2,
    price: "199.000",
  },
  {
    id: 3,
    quantity: 1,
    description: "شلوار لی",
    price: "249.000",
  },
  {
    id: 4,
    description: "بلوز بافت",
    quantity: 1,
    price: "310.000",
  },
  {
    id: 5,
    description: "کفش اسپرت نایک",
    quantity: 1,
    price: "399.000",
  },
  {
    id: 6,
    description: "جوراب نایک",
    quantity: 4,
    price: "99.000",
  },
];

export function getShopCard() {
  return ShoppingCard.filter((g) => g);
}
