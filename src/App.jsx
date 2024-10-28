import { useEffect, useState } from 'react'
import './App.css'
import { carMenu } from './pages/config'

function App() {



  const [cars, setcars] = useState([

  ])

  const [loading, setloading] = useState(false)


  const [name, setname] = useState("")
  const [speed, setspeed] = useState("")
  const [price, setprice] = useState("")
  const [image, setimage] = useState("")
  const [color, setcolor] = useState("")

  console.log(cars);

  const handleSubmit = (e) => {
    e.preventDefault()

    const obj = {
      name,
      speed,
      price,
      image,
      color
    }
    console.log(obj);

    carMenu.collection("cars").add(obj)


    setname("")
    setspeed("")
    setprice("")
    setimage("")
    setcolor("")
  }

  const deleteEL = (id) => {

    carMenu.collection("cars").doc(id).delete()

  }


  useEffect(() => {
    setloading(true)
    carMenu.collection("cars").onSnapshot((data) => {
      const newCars = []
      data.docs.forEach((item) => {
        const obj = { ...item.data(), id: item.id }

        newCars.push(obj)


      })
      setcars(newCars)
      setloading(false)

    })
  }, [])

  return (
    <>
      {loading && <div className='loading'>
        <img src="https://media2.giphy.com/media/uIJBFZoOaifHf52MER/giphy.gif?cid=6c09b9526bx3id9ou3btood5gr2p11upwu5463b5vwljbr0c&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />
      </div>}
      <div class="container">
        <form action="" class="menu" onSubmit={handleSubmit}>
          <div>
            <p>Car Name:</p>
            <input required value={name} onInput={(e) => {
              setname(e.target.value)
            }} type="text" placeholder="Car Name" class="car_name" />
          </div>
          <div>
            <p>Speed :</p>
            <input required value={speed} onInput={(e) => {
              setspeed(e.target.value)
            }} type="number" placeholder="Car Speed" class="car_speed" />
          </div>
          <div>
            <p>Price $:</p>
            <input required value={price} onInput={(e) => {
              setprice(e.target.value)
            }} type="number" placeholder="Car Price" class="car_price" />
          </div>
          <div>
            <p>Image URL:</p>
            <input required value={image} onInput={(e) => {
              setimage(e.target.value)
            }} type="url" placeholder="Car Image" class="car_img" />
          </div>
          <div>
            <p>Image Color:</p>
            <input required value={color}  onInput={(e) => {
              setcolor(e.target.value)
            }} type="color" placeholder="Car Color" class="car_color" />
          </div>
          <button class="submit">Submit</button>
        </form>
        <div class="block">
          {
            cars.map((item) => {
              return <div class="box">
                <img src=
                  {item.image}
                  alt="" />
                <div class="box_info">
                  <div>
                    <h2>
                      {item.name}
                    </h2>
                    <i onClick={() => {
                  deleteEL(item.id)
                }} class="fa-solid fa-trash-can"></i>
                  </div>
                  <p>Speed:
                    {item.speed}
                    km/s</p>
                  <p>Price:
                    {item.price}
                    $</p>
                  <div class="car_span">
                    <p>Color: {item.color}
                    </p>
                    <span style={{ background: item.color }}></span>
                </div>
              </div>
              </div>
            })
          }
      </div>
    </div >
    </>
  )
}

export default App
