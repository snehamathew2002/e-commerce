import { useEffect,useState } from "react"
import Product from "./products"
import {
    Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10,Img11,Img12
} from './images'
import CreateProduct from "./create-product"
const data = [
    {
        name: "Book Shelf",
        price: "Rs.20000",
        img:Img1
    },
    {
        name: "Glass Iron Moon Lamp",
        price: "Rs.1500",
        img:Img2
    },
    {
        name: "Glass Indoor Swing",
        price: "Rs.15000",
        img:Img3
    },
    {
        name: "Lamp",
        price: "Rs.20000",
        img:Img4
    },
    {
        name: "Mirror",
        price: "Rs.10000",
        img:Img5
    },
    {
        name: "Moon Light",
        price: "Rs.1000",
        img:Img6
    },
    {
        name: "Plant Chandelier",
        price: "Rs.5000",
        img:Img7
    },
    {
        name: "Shoe Rack",
        price: "Rs.15000",
        img:Img8
    },
    {
        name: "Snow Globe",
        price: "Rs.2000",
        img:Img9
    },
    {
        name: "Table Decor",
        price: "Rs.4000",
        img:Img10
    },
    {
        name: "Wall Art",
        price: "Rs.4500",
        img:Img11
    },
    {
        name: "Giant Wheel Lamp",
        price: "Rs.4500",
        img: Img12
    }
]
const Products = () => { 
    const [products ,setProduct] = useState(data)
    const createProducts = (p) => {
        setProduct([...products,p])
    }
    return(
        <>
            <CreateProduct createProduct={createProducts}/>
            <div className="row">
                {data.map(item => {
                    return(
                        <Product item={item}/>
                    )
                })}
            </div>
        </> 
            )
}

export default Products;