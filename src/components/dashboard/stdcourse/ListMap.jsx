import React from 'react'
import { IoEyeOutline } from 'react-icons/io5'

const ListMap = () => {
    const [item, setItem] =  useState([
        {
          id: 1,
          image: {},
          name: "jsدوره آموزش جامع",
          teacher: "دکتر محمد حسین بحرالعلومی",
          termname: "بهار",
          startdate: "1401/06/09",
          price: "2,500,000",
        },
        {
            id: 2,
            image: {},
            name: "jsدوره آموزش جامع",
            teacher: "دکتر محمد حسین بحرالعلومی",
            termname: "بهار",
            startdate: "1401/06/09",
            price: "2,500,000",
          },
          {
            id: 3,
            image: {},
            name: "jsدوره آموزش جامع",
            teacher: "دکتر محمد حسین بحرالعلومی",
            termname: "بهار",
            startdate: "1401/06/09",
            price: "2,500,000",
          },
          {
            id: 4,
            image: {},
            name: "jsدوره آموزش جامع",
            teacher: "دکتر محمد حسین بحرالعلومی",
            termname: "بهار",
            startdate: "1401/06/09",
            price: "2,500,000",
          },
          {
            id: 5,
            image: {},
            name: "jsدوره آموزش جامع",
            teacher: "دکتر محمد حسین بحرالعلومی",
            termname: "بهار",
            startdate: "1401/06/09",
            price: "2,500,000",
          },
          {
            id: 6,
            image: {},
            name: "jsدوره آموزش جامع",
            teacher: "دکتر محمد حسین بحرالعلومی",
            termname: "بهار",
            startdate: "1401/06/09",
            price: "2,500,000",
          },
          {
            id: 7,
            image: {},
            name: "jsدوره آموزش جامع",
            teacher: "دکتر محمد حسین بحرالعلومی",
            termname: "بهار",
            startdate: "1401/06/09",
            price: "2,500,000",
          },
          {
            id: 8,
            image: {},
            name: "jsدوره آموزش جامع",
            teacher: "دکتر محمد حسین بحرالعلومی",
            termname: "بهار",
            startdate: "1401/06/09",
            price: "2,500,000",
          },
      ])

  return (
    <div>
          {item.map((item) => (
              <ul key={item.id} className="listrow d-flex justify-content-around">
                <li>
                  <img
                    src={item.image}
                    alt="coursitems"
                    style={{ width: "50px", height: "50px" }}
                  ></img>
                </li>
                <li>{item.name}</li>
                <li>{item.teacher}</li>
                <li>{item.startdate}</li>
                <li>{item.price}</li>
                <li>
                <IoEyeOutline className='text-orange' />            
                </li>
              </ul>
            ))}
    </div>
  )
}

export default ListMap