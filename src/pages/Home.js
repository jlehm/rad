import React from 'react'
import './Home.css'

import SearchContainer from './../containers/SearchContainer.js'
import Categories from './../features/Categories.js'
import Recommended from './../features/Recommended.js'
import Featured from './../features/Featured.js'
import Footer from './../features/Footer.js'

import SearchProvider from './../containers/SearchProvider.js'

const categories = [
  {
    label: "Events",
    image: "https://res.cloudinary.com/dtvu2cwfg/image/upload/v1543693807/parkatpoint.jpg"
  },
  {
    label: "Museums",
    image: "https://res.cloudinary.com/dtvu2cwfg/image/upload/v1543693807/parkatpoint.jpg"
  },
  {
    label: "National Parks",
    image: "https://res.cloudinary.com/dtvu2cwfg/image/upload/v1543693807/parkatpoint.jpg"
  },
  {
    label: "Amusement",
    image: "https://res.cloudinary.com/dtvu2cwfg/image/upload/v1543693807/parkatpoint.jpg"
  },
  {
    label: "Adventure",
    image: "https://res.cloudinary.com/dtvu2cwfg/image/upload/v1543693807/parkatpoint.jpg"
  },
  {
    label: "Sports",
    image: "https://res.cloudinary.com/dtvu2cwfg/image/upload/v1543693807/parkatpoint.jpg"
  },
]
const recommended = [
   {
     id: "0",
     thumb: "https://res.cloudinary.com/dtvu2cwfg/image/upload/v1543693807/parkatpoint.jpg",
     title: "title",
     text: "example text",
     rating: "5.0",
     price: "$50"
   },
   {
    id: "1",
    thumb: "https://res.cloudinary.com/dtvu2cwfg/image/upload/v1543693807/parkatpoint.jpg",
    title: "title",
    text: "example text",
    rating: "5.0",
    price: "$50"
  },
  {
    id: "2",
    thumb: "https://res.cloudinary.com/dtvu2cwfg/image/upload/v1543693807/parkatpoint.jpg",
    title: "title",
    text: "example text",
    rating: "5.0",
    price: "$50"
  },
  {
    id: "3",
    thumb: "https://res.cloudinary.com/dtvu2cwfg/image/upload/v1543693807/parkatpoint.jpg",
    title: "title",
    text: "example text",
    rating: "5.0",
    price: "$50"
  },
  {
    id: "4",
    thumb: "https://res.cloudinary.com/dtvu2cwfg/image/upload/v1543693807/parkatpoint.jpg",
    title: "title",
    text: "example text",
    rating: "5.0",
    price: "$50"
  },
  {
    id: "5",
    thumb: "https://res.cloudinary.com/dtvu2cwfg/image/upload/v1543693807/parkatpoint.jpg",
    title: "title",
    text: "example text",
    rating: "5.0",
    price: "$50"
  },
  {
    id: "6",
    thumb: "https://res.cloudinary.com/dtvu2cwfg/image/upload/v1543693807/parkatpoint.jpg",
    title: "title",
    text: "example text",
    rating: "5.0",
    price: "$50"
  },
  {
    id: "7",
    thumb: "https://res.cloudinary.com/dtvu2cwfg/image/upload/v1543693807/parkatpoint.jpg",
    title: "title",
    text: "example text",
    rating: "5.0",
    price: "$50"
  },
  {
    id: "8",
    thumb: "https://res.cloudinary.com/dtvu2cwfg/image/upload/v1543693807/parkatpoint.jpg",
    title: "title",
    text: "example text",
    rating: "5.0",
    price: "$50"
  },
]

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <SearchProvider>
          <SearchContainer {...this.props} />
          <Categories {...this.props} categories={categories}/>
          <Recommended {...this.props} data={recommended}/>
          <Featured {...this.props} />
          <Footer {...this.props} />
        </SearchProvider>
      </div>
    )
  }
}

export default Home
