import "./product.css"
const Product = (props) => {
    const{item} = props;
    return (
                <div className="column">
                    <div className="content">
                        <div className="prod-image">
                            <img src={item.img} alt="img" style={{"width":"100%"}} />
                        </div>
                        <div className="desc">
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                        </div>
                    </div>
                </div>
    )
}

export default Product