import '../blocks/ItemCard.css'

export default function ItemCard({item}){
    return <div id= {item.id} className="ItemCard">
        <img className="ItemCard__img" alt="Clothing Item" src= {item.url}></img>
        <div className="ItemCard__title-box"><p className="ItemCard__title">{item.name}</p></div>
        </div>
}