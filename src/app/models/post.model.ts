export interface IPost {
    _id: string;
    qrcode: number;
    title: string;
    amount: number;
    price: number;
    totalAmount: number;
    totalPrice: number;
    sold: number;
    soldPrice: number;
    soldAmount: number;
    balanceAmount: number;
    balancePrice: number;
    created: Date;
}
