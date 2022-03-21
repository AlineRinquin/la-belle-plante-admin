import { Category } from "./category";

export class Plant {

  constructor(
    public nom: string = "",
    public price: number = 1,
    public quantity: number = 0,
    public instock: string = "disponible",
    public category = Category.pf,
    public urlPicture: string = "https://picsum.photos/id/18/200/300",
    public rating: number = 0,
    public id : number = 0

  ){}
}
